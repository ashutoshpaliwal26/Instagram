import UserModel from '@/models/userModel';
import ConnectToDb from '@/config/connectToDb';
import { setUserCookies, getUserCookies } from '@/service/auth';
import { cookies } from 'next/headers';




export default async function SignUp(req, res) {

    try{
        if (req.method === "POST") {
            await ConnectToDb();
    
            const { name, phone, email, password, username } = req.body;
            const checkUser = await UserModel.findOne({email, password});
            if(checkUser){

                return res.status(404).json({success  : false});
            }else{
                const newUser = new UserModel({
                    name, phone, password, email, username
                })
    
                await newUser.save();

                const token = setUserCookies({name, password, email, username});
                return res.json({success : true, token : token});
            }
        }
    }catch(err){
        return res.send(err);
    }
}
