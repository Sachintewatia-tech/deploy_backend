const jwt = require("jsonwebtoken");
const auth = (req,res,next)=>{
    const token = req.headers.header;
    console.log(token);
    if(token){
        const decoded = jwt.verify(token,"masai");
        if(decoded){
            next()
        }else{
            res.status(400).send({"mag":"Please login first"})
        }
    }else{
        res.status(400).send({"mag":"Please login first"})
    }
}

module.exports = {
    auth
}