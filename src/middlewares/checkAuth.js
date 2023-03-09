const users=[
    {id: 1, name: 'trang',role:1},
    {id: 2, name: 'user 2' ,role:2}
]

export const checkAuth=(req,res,next)=>{
    const userId=req.params.userId;
    const currentUser=users.find((user)=>user.id==userId)
    if(!currentUser){
        return res.status(400).json({
            message:"banj khong co quyen truy cap"
        });
    }
    next();
}