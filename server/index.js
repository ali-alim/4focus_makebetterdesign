import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 6000;
const MONGO_URI = process.env.MONGO_URI;
  

// const MONGO_URI = 'http://localhost'

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Successfully connected to port: ${PORT}`)
    )
  )
  .catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify', false);
