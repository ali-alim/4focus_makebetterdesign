import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import postRoutes from "./routes/posts.js"

const env= dotenv.config()
const PORT = process.env.PORT || 7000;

const app = express();

app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());



mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Successfully connected to port: ${PORT}`)
    )
  )
  .catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify', false);
