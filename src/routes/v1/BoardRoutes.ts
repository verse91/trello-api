import express, { Request, Response } from "express";
import { HttpStatus } from "http-status-ts";

const router = express.Router();
router
  .route("/")
  .get((req: Request, res: Response) => {
    res.status(HttpStatus.OK).json({ message: "API GET List Board" });
  })
  .post((req: Request, res: Response) => {
    res.status(HttpStatus.CREATED).json({ message: "API POST List Board", code: HttpStatus.CREATED });
  });
export const boardRoutes = router;
