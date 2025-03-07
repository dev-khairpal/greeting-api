import express from "express";
import { greet } from "../controllers/greet.controller.js";


const router = express.Router();


router.get("/greet", greet);

export default router