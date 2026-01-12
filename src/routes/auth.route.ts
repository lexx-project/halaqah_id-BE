import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { successResponse } from "../utils/response";
import { roleMiddleware } from "../middleware/role.middleware";

const router = Router();

router.post("/login", authController.login);

router.get("/me", authMiddleware, (req, res) => {
  const user = (req as any).user;

  return successResponse(res, "User data retrieved", user);
});

router.post(
  "/register",
  authMiddleware,
  roleMiddleware(["superadmin"]),
  authController.register
);

router.get(
  "/muhafiz",
  authMiddleware,
  roleMiddleware(["superadmin"]),
  authController.getAllMuhafidz
);

router.delete(
  "/muhafiz/:id",
  authMiddleware,
  roleMiddleware(["superadmin"]),
  authController.deleteMuhafidz
);

router.patch(
  "/muhafiz/:id",
  authMiddleware,
  roleMiddleware(["superadmin"]),
  authController.updateMuhafiz
);

router.post(
  "/impersonate/:id",
  authMiddleware,
  roleMiddleware(["superadmin"]),
  authController.impersonate
);

export default router;
