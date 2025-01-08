import express, { Request, Response } from "express";
import { HttpStatus } from "http-status-ts";
import { boardValidation } from "../../validations/BoardValidation";
import { boardController } from "../../controllers/boardController";

const router = express.Router();
router
  .route("/")
  .get((req: Request, res: Response) => {
    res.status(HttpStatus.OK).json({ message: "API GET List Board" });
  })
  .post(boardValidation.createNew, boardController.createNew);
export const boardRoutes = router;
