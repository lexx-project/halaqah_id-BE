import { Router } from "express";
import * as setoranController from "../controllers/setoran.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { roleMiddleware } from "../middleware/role.middleware";

const router = Router();

router.use(authMiddleware);

router.post(
  "/",
  roleMiddleware(["superadmin", "muhafiz"]),
  setoranController.create
);

router.get(
  "/all",
  authMiddleware,
  roleMiddleware(["superadmin"]),
  setoranController.getAll
);

router.get("/santri/:santriId", authMiddleware, setoranController.getBySantri);

export default router;
