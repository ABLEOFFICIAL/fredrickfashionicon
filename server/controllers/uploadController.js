const cloudinary = require("../config/cloudinary");
const multer = require("multer");

// Use multer for temporary in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const dataURI = "data:" + req.file.mimetype + ";base64," + b64;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "ffi_products",
    });

    res.status(200).json({
      success: true,
      imageUrl: result.secure_url,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Upload failed", error: err.message });
  }
};

module.exports = { upload, uploadImage };
