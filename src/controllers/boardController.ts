import { HttpStatus } from "http-status-ts";
import { boardService } from "../services/boardService";

const createNew = async (req: any, res: any, next: any) => {
  try {
    // console.log("req.body: ", req.body);

    const createdBoard = await boardService.createNew(req.body);
    // res.status(HttpStatus.CREATED).json({ message: "POST API From Controller", code: HttpStatus.CREATED });
    res.status(HttpStatus.CREATED).json(createdBoard);
    // throw new API_Error(HttpStatus.BAD_GATEWAY,'error test');
    }

  catch (error: any) {next(error);}
};

export const boardController = { createNew };
