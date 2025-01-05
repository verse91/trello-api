import Joi from "joi";
import { HttpStatus } from "http-status-ts";

const createNew = async (req: any, res: any, next: any) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict(),
    description: Joi.string().required().min(3).max(256).trim().strict(),
  });
  try {
    console.log("req.body: ", req.body);
    //abortEarly đơn giản là trả về toàn bộ lỗi, nếu set true thì sẽ chỉ in ra title
    await correctCondition.validateAsync(req.body, { abortEarly: false });
    // next();
    res
      .status(HttpStatus.CREATED)
      .json({ message: "POST API Validations", code: HttpStatus.CREATED });
  }
  catch (error: any) {
      console.error(error);
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({ message: error.message, code: HttpStatus.UNPROCESSABLE_ENTITY });
  }
};

export const boardValidation = {
  createNew,
};
