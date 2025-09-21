import {Router} from 'express';
import Item from '../models/itemSchema.js';
import auth from '../middleware/auth.js';

const router = Router();

router.get("/all-items",auth,async(req,res)=>{
try {
    const items = await Item.find();
    res.status(200).send(items);
    
} catch (error) {
    res.send({
        success: false,
        message: error.message
    })
    
}
});

router.post("/add-items",auth,async(req,res)=>{
    const {name,price,image,seller} = req.body;

    if(!name || !price || !image || !seller){
        return res.status(400).send("Name and price and iamge and seller name are required");
    }

    try {
        const item = new Item({name,price,image,seller});
        await item.save();
        res.status(201).send(item);
        
    } catch (error) {
        res.status(500).send("server error");
        
    }
})

export default router;