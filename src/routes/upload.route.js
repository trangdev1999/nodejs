import multer from "multer";
import express from "express";

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload/");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

var upload = multer({
  storage: storage,
});

const router = express.Router();
router.post("/", upload.single("file"), (req, res) => {
  try {
    res.status(200).json({
      message: "upload thanh  cong",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});
export default router;
