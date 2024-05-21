
const jwt=require("jsonwebtoken")
const {unauthonticated} = require("../errors/index")
const authenlicationmiddleware=async(req,res,next)=>{
    const autheader=req.headers.authorization;
    if(!autheader||!autheader.startsWith('Bearer ')){
        throw new unauthonticated('No Token provided');
    }
    const token=autheader.split(' ')[1];
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const {id,username}=decoded;
        req.user={id,username};
        next();
    } catch (error) {
        // console.log(error)
        throw new unauthonticated("Not authorized to acess this route"); 
    }    
    } 
    
module.exports=authenlicationmiddleware;