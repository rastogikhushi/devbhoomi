import User from '../models/User'
// create new User
export const createUser=async(req,res)=>{
    const newUser=new User(req.body)
    try {
        const savedUser=await newUser.save()
        res.status(200).json({success:true,message:'Successully created',data:savedUser});
    } catch (error) {
        res.status(500).json({success:false,message:'failed to create. Try again'});
    }
}
// update User
export const updateUser=async(req,res)=>{
    const id=req.params.id

    try {
        const updateUser=await User.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true});
        res.status(200).json({success:true,message:'Successully updated',data:updateUser});
    } catch (error) {
        res.status(500).json({success:false,message:'failed to update'});
    }
}
// delete User
export const deleteUser=async(req,res)=>{
    const id=req.params.id

    try {
        const deleteUser=await User.findByIdAndDelete(id);
        res.status(200).json({success:true,message:'Successully deleted'});
    } catch (error) {
        res.status(500).json({success:false,message:'failed to delete'});
    }
}
// getSingle User
export const getSingleUser=async(req,res)=>{
    const id=req.params.id

    try {
        const user=await User.findById(id);
        res.status(200).json({success:true,message:'Successully found',data:user});
    } catch (error) {
        res.status(404).json({success:false,message:'not found'});
    }
}
// getAll User
export const getAllUser=async(req,res)=>{
    
    try {
        const users= await User.find({})
        res.status(200).json({success:true, message:'Successully found',data:users})
    } catch (error) {
        res.status(404).json({success:false,message:'not found'});
    }
};