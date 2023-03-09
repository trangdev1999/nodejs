import mongoose  from "mongoose";
import {createHmac} from "crypto"



const userSchema= new mongoose.Schema({

    username:{
        type:String,
        maxLength:255,
        minLength:5,
        required:true},
    email:{
        type:String,
        maxLength:255,
        minLength:5,
        required:true},
    password:{
        type:String,
        maxLength:255,
        minLength:6}
},{timestamp:true}
)

userSchema.methods={
    authenticate(password){
        // mật khâur gửi lên
        console.log("mật khẩu từ client gửi lên",password)
        console.log("mật khẩu trong database",this.password)
        console.log("mật khẩu đã mã hóa",this.encryptedPassword(password))
        return this.password=== this.encryptedPassword(password)
    }, 
    encryptedPassword(password){

        if(!password) return;
        try{
            // return createHmac("sha256","123456").update(password).digest("hex")
            return password
        }catch(error){
            console.log(error)
        }
    }
}
userSchema.pre("save",function(next){
   this.password= this.encryptedPassword(this.password);
   next()
})

export default mongoose.model("User",userSchema)