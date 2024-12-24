const {loginService} = require('../../services/auth')
const validateUserData = require('../../validators/authValidator')

const login = async (req, res)=>{
    try{
        const {isValid, message} = validateUserData(req);

        if(!isValid){
            return res.status(400).json({message});
        }
        
        const loginData = await loginService(req);

        if(!loginData.data){
            return res.status(400).json({message: loginData.message})
        }

        return res.status(200).json({message: loginData.message, data: loginData.data})
    }catch (error) {
        console.log("error: ", error);
        return res.status(500).json({message: "INTERNAL_SERVER_ERROR"});
    }
}

module.exports = {login}