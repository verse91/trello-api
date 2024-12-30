import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello, TypeScript with Express!<h1>");
});

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the API!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
