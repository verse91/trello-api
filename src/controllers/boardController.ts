import { HttpStatus } from "http-status-ts";

const createNew = async (req: any, res: any, next: any) => {
  try {
    console.log("req.body: ", req.body);
    res.status(HttpStatus.CREATED).json({ message: "POST API From Controller", code: HttpStatus.CREATED });
    // throw new API_Error(HttpStatus.BAD_GATEWAY,'error test');
    }

  catch (error: any) {next(error);}
};

export const boardController = { createNew };
