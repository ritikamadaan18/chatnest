import { Router } from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
const router = Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
//re_GYA1keXz_L8y5XbFTG9JmfEh363NzFPKd
