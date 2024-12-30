// src/server.ts

import express, { Request, Response } from "express";

type str = string;
type num = number;

const app = express();
const hostname: str = "localhost";
const PORT: any = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
    app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello World!</h1>");
});

// Start the server
app.listen(PORT, hostname, () => {
  console.log(`Server is running on http://${hostname}:${PORT}`);
});
