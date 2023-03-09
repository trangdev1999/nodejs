import express from "express";

import {
    getAllZone,
    getOneZone,
    addZone,
    updateZone,
    removeZone,
} from "../controllers/zone.controller";
const router = express.Router();

router.get("/zone", getAllZone);
router.get("/zone/:id", getOneZone);
router.post("/add-zone", addZone);
router.put("/zone/:id", updateZone);
router.delete("/delete-zone/:id", removeZone);

export default router;