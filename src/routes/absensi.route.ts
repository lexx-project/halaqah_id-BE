// src/routes/absensi.route.ts
import { Router } from "express";
import * as absensiController from "../controllers/absensi.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.post("/", absensiController.create);

router.get("/santri/:santriId", absensiController.getBySantri);

router.get("/halaqah/:halaqahId", absensiController.getByHalaqah);

export default router;
