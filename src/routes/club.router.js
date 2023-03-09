import express from "express";
import multer from 'multer';

import {
    uploadClubImage,
    getAllClub,
    getOneClub,
    addClub,
    updateClub,
    removeClub,
    search
} from "../controllers/club.controller";
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/images/clubs/");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});
const upload = multer({ storage: storage });

router.get("/club", getAllClub);
router.get("/search", search);
router.get("/club/:id", getOneClub);
router.post("/add-club", addClub);
router.post("/uploads-club", upload.single('image'), uploadClubImage);
router.put("/uploads-club", upload.single('image'), uploadClubImage);
router.put("/club/:id", updateClub);
router.delete("/delete-club/:id", removeClub);

export default router;