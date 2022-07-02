import "dotenv/config";
import express from "express";
const app = express();
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
const PORT = process.env.PORT || 8000;

//use middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());

// connect to db
import { mongoConnect } from "./src/config/dbConfig.js";
mongoConnect();

//APIS
import registerLoginRouter from "./src/routers/registerLogin.js";
app.use("/api/v1/register-login", registerLoginRouter);

app.get("/", (req, res) => {
  res.json({
    message: "You reaced e commerce api",
  });
});

app.use((error, req, res, next) => {
  const status = error.status || 404;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server running at http://localhost:${PORT}`);
});
