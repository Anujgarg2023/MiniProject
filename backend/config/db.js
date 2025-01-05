import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://anujgarg11a14044:anujadmin@cluster0.fboww.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}

