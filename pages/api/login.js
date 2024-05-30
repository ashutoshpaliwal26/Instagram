import UserModel from'@/models/userModel'
import {setUserCookies} from '@/service/auth'

async function handelLogIn(req,res){
    try{
        const { username, password} = req.body;
        const userCheck = await UserModel.findOne({username, password});
        if(userCheck){
            const token = setUserCookies({ name : userCheck.name, email : userCheck.email, username : userCheck.username });
            return res.json({success : true , token : token});
        }else{
            return res.json({success : false});
        }
    }catch(err){
        res.send(err);
    }
}

export default handelLogIn;