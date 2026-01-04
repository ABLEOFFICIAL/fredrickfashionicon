const router = require("express").Router();
const Card = require("../models/Card");
const { protect } = require("../middleware/auth");

// Create a new card
router.post("/", protect, async (req, res, next) => {
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
    next(error);
  }
});

// Get all cards for a user
router.get("/", protect, async (req, res, next) => {
  try {
    const cards = await Card.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json({ success: true, cards });
  } catch (error) {
    next(error);
  }
});

// Update a card (e.g., set default)
router.put("/:id", protect, async (req, res, next) => {
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
    next(error);
  }
});

// Delete a card
router.delete("/:id", protect, async (req, res, next) => {
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
    next(error);
  }
});

module.exports = router;
