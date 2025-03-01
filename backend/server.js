import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
// import 'dotenv/config'
import userRouter from "./routes/userRoute.js"
import {config} from "dotenv"
import cartRouter from "./routes/cartRoute.js"
import orderRoute from "./routes/orderRoute.js"


//loading env 
config()

//app config 
const app = express()
const port = process.env.PORT || 4000

//middlewares
app.use(express.json());
app.use(cors());

//database connection
connectDB()

//api endpoint middleware
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRoute)

app.get("/", (req,res) => {
     res.send("app is working fine ")
})

app.listen(port, () => {
    console.log(`Server is working at port ${port}`)
})