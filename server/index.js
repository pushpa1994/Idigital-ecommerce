import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './db/config.js';
import userRoutes  from './routes/userRoutes.js';
import itemRoutes from './routes/itemRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import { fileURLToPath } from "url";
import path from "path";




dotenv.config();
const app = express();
const PORT = process.env.PORT || 8082;

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors({
  origin: '*', // or '*' for testing
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  credentials: true
}));

// Required when using ES modules (type: "module" in package.json)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve Angular dist folder
app.use(express.static(path.join(__dirname, "../client/dist/client")));

// ✅ Catch-all to serve Angular
// app.get("/:path(*)", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/dist/client/index.html"));
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/client/index.html"));
});



app.use("/api/users",userRoutes);
app.use("/api/items",itemRoutes);
app.use("/api/cart",cartRoutes);




app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})
