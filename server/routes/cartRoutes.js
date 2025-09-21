import {Router} from 'express';
import Cart from '../models/cartSchema.js';
import auth from '../middleware/auth.js';

const router = Router();

router.post("/add-to-cart",auth, async(req,res)=>{
    const {userId , itemId, quantity} = req.body;

    if(!userId || !itemId ||!quantity){
        return res.status(400).send('userId,itemId,quantity are required');
    }

    try {

        let cart = await Cart.findOne({userId});

        if(!cart){
            cart = new Cart({userId,items: []});
        }

        const existingItemIndex = cart.items.findIndex(item => 
            item.item.toString() === itemId);
        
            if(existingItemIndex > -1){
                cart.items[existingItemIndex].quantity += quantity;
            } else {
                cart.items.push({item: itemId, quantity});
            }

            await cart.save();
            res.status(200).send(cart);
        
    } catch (error) {
        res.status(400).send(error.message);
        
    }
})

router.get('/get-user-cart/:userId',auth, async(req,res)=> {
    const userId  = req.params.userId;        
    try {
        const cart = await Cart.findOne({userId}).populate('items');       
        if(!cart){
            return res.status(404).send('Cart not found');
        }
        res.status(200).send(cart);
        
    } catch (error) {
        res.status(500).send('server error');
        
    }
})

export default router;