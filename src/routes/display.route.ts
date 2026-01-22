import { Router } from "express";
import * as absensiController from "../controllers/absensi.controller";
import * as halaqahController from "../controllers/halaqah.controller";
import * as setoranController from "../controllers/setoran.controller";
import * as santriController from "../controllers/santri.controller";

const router = Router();

router.get("/halaqah/:halaqahId", absensiController.getByHalaqah);
router.get("/", halaqahController.listHalaqah);
router.get("/all", setoranController.getAll);
router.get("/", santriController.getSantri);

export default router;
