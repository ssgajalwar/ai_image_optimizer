import { Schema,models,model } from "mongoose";

//clerkId,email,username,photo,firstName,lastName,
//planId,creditBalance
interface User {
    checkId: string;
    email: string;
    username: string;
    photo: string;
    firstName?: string;
    lastName?: string;
    planId?: number;
    creditBalance?: number;
}



const UserSchema = new Schema({
    checkId:{type:String,required:true,unique:true},
    email:{type:String, required:true,unique:true},
    username:{type:String,required:true,unique:true},
    photo:{type:String,required:true},
    firstName:{type:String},
    lastName:{type:String},
    planId:{type:Number,default:1},
    creditBalance:{type:Number,default:10}
})

const User = models?.User || model('User',UserSchema);

export default User;