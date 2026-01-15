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

export default router;
