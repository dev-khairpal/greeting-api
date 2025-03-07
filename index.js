import dotenv from "dotenv"
dotenv.config();

import express from "express";
import cors from "cors";
import greetRoute from "./routes/greet.routes.js"


const PORT = process.env.PORT || 6000

const app = express();
app.use(
    cors({
      origin: ["http://localhost:5175", "https://greeting-client-xi.vercel.app/",
        "greeting-client-git-main-dev-khairpals-projects.vercel.app","greeting-client-hy855blw4-dev-khairpals-projects.vercel.app"
      ], 
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type"],
    })
  );
app.use(express.json());


app.use("/api",greetRoute );



app.listen(PORT, () => {
  console.log(`server ${PORT}`);
});
