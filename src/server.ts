/* eslint-disable no-console */
import express, { Request, Response } from "express";
import exitHook from "async-exit-hook";
import { CLOSE_DB, CONNECT_DB } from "./config/mongodb";

const app = express();

const START_SERVER = () => {
  app.get("/", async (req: Request, res: Response) => {
    res.send("<h1>Hello, TypeScript with Express!<h1>");
  });

  app.get("/api", (req: Request, res: Response) => {
    res.json({ message: "Welcome to the API!" });
  });

  // Start server
  app.listen(() => {
    console.log(
      `Hi ${process.env.AUTHOR}. Server is running on http://${process.env.HOST}:${process.env.PORT}`
    );
  });

  // Print exit signal be4 close the server
  exitHook((signal: string) =>{
    CLOSE_DB();
    console.log("Exited with signal: ", signal);
  })
};

// Connect to MongoDB and start the server
CONNECT_DB()
  .then(() => {
    console.clear();
    console.log("Connected to MongoDB!");
    START_SERVER();
  })
  .catch((err: string) => {
    console.error(err);
    process.exit(1);
  });
