import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express();

//Basic Configuration
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({ extended:true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
//cors Configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods:["GET","POST", "PUT", "DELETE","PATCH","OPTIONS"],
    allowedHeaders:["Content-Type", "Authorization"],
}))



//import router
import healthcheckRouter from "./routes/healthcheck.routes.js";
import authrRouter from "./routes/auth.routes.js";

app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/auth", authrRouter);

app.get('/', (req,res)=>{
    res.send("Hello Worlddd");
})

export default app