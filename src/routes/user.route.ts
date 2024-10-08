import { Router } from "express";
import {
  authSateController,
  forgotPassword,
  genereteAccessToken,
  recoverPassword,
  registerUserController,
  resetPassword,
  signinController,
} from "../controllers/user.controller";
import { isAuthenticatedUser } from "../middlewares/auth";

const router = Router();
router.post("/register", registerUserController);
router.post("/signin", signinController);
router.get("/auth-state", isAuthenticatedUser, authSateController);
router.post("/refreshToken", genereteAccessToken);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/recover-password", recoverPassword);

const userRoute = router;
export default userRoute;
