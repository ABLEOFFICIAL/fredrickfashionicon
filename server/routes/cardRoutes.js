const router = require("express").Router();
const Card = require("../models/Card");
const { protect } = require("../middleware/auth");

// Create a new card
router.post("/", protect, async (req, res) => {
  try {
    const { type, last4, cardholderName, expiryMonth, expiryYear, isDefault } =
      req.body;

    // If this card is set as default, remove default from other cards
    if (isDefault) {
      await Card.updateMany({ user: req.user._id }, { isDefault: false });
    }

    const card = await Card.create({
      user: req.user._id,
      type,
      last4,
      cardholderName,
      expiryMonth,
      expiryYear,
      isDefault: !!isDefault,
    });

    res.json({ success: true, card });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all cards for a user
router.get("/", protect, async (req, res) => {
  try {
    const cards = await Card.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json({ success: true, cards });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update a card (e.g., set default)
router.put("/:id", protect, async (req, res) => {
  try {
    const { isDefault } = req.body;

    const card = await Card.findOne({ _id: req.params.id, user: req.user._id });
    if (!card)
      return res
        .status(404)
        .json({ success: false, message: "Card not found" });

    if (isDefault) {
      await Card.updateMany({ user: req.user._id }, { isDefault: false });
      card.isDefault = true;
    }

    await card.save();
    res.json({ success: true, card });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete a card
router.delete("/:id", protect, async (req, res) => {
  try {
    const card = await Card.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!card)
      return res
        .status(404)
        .json({ success: false, message: "Card not found" });

    res.json({ success: true, message: "Card deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
