const multer = require("multer");
const cloudinary = require("../config/cloudinary");

// Multer memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Cloudinary upload helper
const uploadToCloudinary = (fileBuffer, filename) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "foods", public_id: filename },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    stream.end(fileBuffer);
  });
};

module.exports = { upload, uploadToCloudinary };
