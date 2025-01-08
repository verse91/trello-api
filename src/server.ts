/* eslint-disable no-console */
import express, { Request, Response } from "express";
import { CLOSE_DB, CONNECT_DB} from "./config/mongodb";
import exitHook from "async-exit-hook";
import { API_V1 } from "./routes/v1/index";
import { boardRoutes } from "./routes/v1/BoardRoutes";
import { errorHandlingMiddleware } from "./middlewares/errorHandling.middleware";

const app = express();
const PORT = process.env.PORT;

const START_SERVER = () => {
    app.use(express.json()); // Let user send json data
    app.use('/v1', API_V1);
    app.use("/v2", boardRoutes);

    // Xử lý lôi tập trung
    app.use(errorHandlingMiddleware);

  app.get("/api", (req: Request, res: Response) => {
    res.json({ message: "Welcome to the API!" });
  });

  // Start server
  app.listen(PORT, () => {
    console.log(
      `Hi ${process.env.AUTHOR}. Server is running on http://${process.env.HOST}:${process.env.PORT}`
    );
  });

  exitHook((signal: any) => {
      CLOSE_DB();

      console.log("Exited with signal: ", signal);
    });
};

// Connect to MongoDB and start the server
CONNECT_DB()
  .then(() => {
    // console.clear();
    console.log("Connected to MongoDB!");
    START_SERVER();
  })
  .catch((err: string) => {
    console.error(err);
    process.exit(1);
  });
