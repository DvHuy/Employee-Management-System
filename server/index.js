import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import connectToDatabase from "./db/db.js";
import departmentRouter from "./routes/department.js";
import employeeRouter from "./routes/employee.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

app.use("/api/department", departmentRouter);
app.use("/api/employee", employeeRouter);

app.listen(process.env.PORT, ()=>{
    connectToDatabase();
    console.log(`Server is running at ${process.env.PORT}`);
} )