import { Router } from "express";
import health from "./health.js";
import users from "./users.js";

const router = Router();

router.use("/health", health);
router.use("/users", users);

export default router;
