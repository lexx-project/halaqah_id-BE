import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { successResponse } from "../utils/response";

const router = Router();

// Route Login (Public)
router.post("/login", authController.login);

// Route Test (Protected) - Kasih ini ke FE buat ngetes token mereka jalan gak
router.get("/me", authMiddleware, (req, res) => {
  // Ambil data user yang udah disimpen Satpam (Middleware) di objek req
  const user = (req as any).user;

  // Kirim data user-nya, jangan cuma pesan teks!
  return successResponse(res, "User data retrieved", user);
});
export default router;
