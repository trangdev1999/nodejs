import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import cors from "cors";
import path from "path";


// import newsRouter from "./routes/new.router";


import employeeRouter from './routes/employee.route';
import tasksRouter from "./routes/task.router";
import projectRouter from "./routes/project.route"
import UserRouter from "./routes/auth.route";

// import authorRouter from "./routes/auth"
// import clubRouter from "./routes/club.router";
import zoneRouter from "./routes/zone.router";


const app = express();
app.use(cors());
mongoose
  .connect("mongodb://localhost:27017/angular")
  .then(() => console.log("ket noi thanh cong"))
  .catch((error) => console.log("ket noi bd khong thanh cong", error));



app.use(express.json());
app.use(morgan("tiny"));
app.use("/upload", express.static("upload"));
// app.use("../upload", express.static(path.join(__dirname) + `\\upload`));

app.use("/api", projectRouter);
app.use("/api", UserRouter);


// app.use("/api",newsRouter);
app.use("/api",tasksRouter);
app.use("/api", employeeRouter)
app.use("/api", zoneRouter)



app.listen(8000, () => {
  console.log("http://localhost:8000/api/")
});
