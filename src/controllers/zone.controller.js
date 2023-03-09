import Zones from '../models/zone.model'

export const getAllZone = async (req,res) =>{
    try{
        const zone=await Zones.find().populate('employeeId');
        res.status(200).json(zone);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}



export const getOneZone = async (req,res) =>{
    try{
        const id = req.params.id;
        const zone=await Zones.findById({
            _id:id
        })
        res.status(200).json(zone);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export const addZone = async(req, res)=>{
    try{
        const getData=req.body;
        const  zone=await Zones(getData).save()
        res.status(200).json(zone);
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

export const updateZone = async(req, res)=>{
    try {
        const id=req.params.id;
        const getData=req.body;
        const zone = await Zones.findOneAndUpdate({
            _id: id
        }, getData, {
            zone: true
        });
        res.status(200).json(zone)
        
    } catch (error) {
        res.status(400).json({
            message:"cap nhat khong thanh cong"
        })
        
    }
}

export const removeZone = async (req, res) => {
    try {
        const id = req.params.id;
        const zone=await Zones.findByIdAndDelete({
            _id:id
        })
        res.status(200).json(zone)
    } catch (error) {
        res.status(400).json({ message: "xoa khong thanh cong"})
    }
}