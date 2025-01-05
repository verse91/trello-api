import express, { Request, Response } from "express";
import {HttpStatus} from "http-status-ts";

const router = express.Router();

router.get("/status", (req: Request, res: Response) => {
  res.status(HttpStatus.OK).json({ status: "ok", message: HttpStatus.OK });
});

export const API_V1 = router;
