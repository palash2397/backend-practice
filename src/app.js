import express from "express"
import cookieParser from "cookie-parser";

import cors from "cors"
import { JSON_LIMIT } from "./constants.js";
const port = process.env.PORT 

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN ,
    credentials:true
}))  // to connect from specific url

app.use(express.json({limit:JSON_LIMIT })) // to accecpt json data
app.use(express.urlencoded({extended:true, limit:JSON_LIMIT})) 
app.use(cookieParser())
app.use(express.static("public"))



// import routes
import userRoutes from "./routes/user.routes.js"
app.use("/api/v1/user/", userRoutes)

app.listen(port,()=>{
   console.log(`the server is running at ${port}`);
})
export {app};