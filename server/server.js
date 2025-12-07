import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
