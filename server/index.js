import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './db/config.js';
import userRoutes  from './routes/userRoutes.js';
import itemRoutes from './routes/itemRoutes.js';
import cartRoutes from './routes/cartRoutes.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 8082;

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());
app.options("*", cors());

app.use("/api/users",userRoutes);
app.use("/api/items",itemRoutes);
app.use("/api/cart",cartRoutes);




app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})
