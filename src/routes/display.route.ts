import { Router } from "express";
import * as displayController from "../controllers/display.controller";

const router = Router();

// All routes are PUBLIC - no authentication required
router.get(
  "/absensi/halaqah/:halaqahId",
  displayController.getPublicAbsensiByHalaqah,
);
router.get("/halaqah", displayController.getPublicHalaqah);
router.get("/setoran/all", displayController.getPublicAllSetoran);
router.get("/santri", displayController.getPublicSantri);

export default router;
