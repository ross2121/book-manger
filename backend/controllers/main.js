const CustomAPIError = require("../errors/customerror")
const jwt=require("jsonwebtoken")
const {badrequest}=require("../errors/index");
const login = async (req, res) => {
    const { username, password } = req.body;
    // console.log(username,password);
    if (!username || !password) {
        throw new badrequest('Please provide email and password');
    }

    try{
        const id=req.body.id;
    const token=jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
       res.status(200).json({msg:"user created",token})}
       catch(error
       ){
console.log(error);
       }
};

const dashboard = async (req, res) => {
    console.log(req.user);
    const lucknumber = Math.floor(Math.random() * 100);
    res.status(200).json({ msg: `hello ${req.user.username}`, secret: `here is your authorized data your lucky number is ${lucknumber}` });
   
// console.log(token);

}
module.exports = { login, dashboard }
