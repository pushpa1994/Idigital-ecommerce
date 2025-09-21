import jwt from 'jsonwebtoken';

function auth (req, res, next ) {
    try {
        const token = req.headers.authorization.split(' ')[1];       
        const decoded = jwt.verify(token ,'Idigital-spotify');       
        // req.body.userId = decoded.userId;
        next();
        
    } catch (error) {
        res.status(400).send({
            success: false,
            message: error.message

        })
        
    }

}
export default auth;