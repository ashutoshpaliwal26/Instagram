import "dotenv";

import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URI ;

const ConnectToDb = async()=>{
    try{
        const connect = await mongoose.connect(mongoUrl , {
            dbName : 'Social'
        });
        console.log("Connected Successfully");
    }catch(err){
        console.log(err);
    }
}

module.exports = ConnectToDb;

