import dotenv from "dotenv"
dotenv.config();

import express from "express";
import cors from "cors";
import greetRoute from "./routes/greet.routes.js"


const PORT = process.env.PORT || 6000

const app = express();
app.use(
    cors({
      origin: ["http://localhost:5175", "https://your-frontend-url.vercel.app"], 
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type"],
    })
  );
app.use(express.json());


app.use("/api",greetRoute );



app.listen(PORT, () => {
  console.log(`server ${PORT}`);
});
