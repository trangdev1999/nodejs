import Clubs from '../models/club.model';
// import Groups from '../models/group.model';

const search = async (req, res) => {
    try {
        const value = req.body.value;
        const data = await Clubs.find({ title_small: { $regex: value, $options: "i" } });
        res.status(200).json({

        })
    } catch (error) {

    }
}

const uploadClubImage = async (req, res) => {
    try {
        res.status(200).json({
            message: "Upload image success"
        });
    } catch (error) {
        res.status(400).json({
            message: 'Upload image error'
        });
    }
}

const getAllClub = async (req, res) => {
    try {
        const club = await Clubs.find();
        res.status(200).json(club);
    } catch (error) {
        res.status(400).json({
            message: error
        });
    }
};

const getOneClub = async (req, res) => {
    try {
        const id = req.params.id;
        const club = await Clubs.findOne({
            _id: id
        });
        res.status(200).json(club)
    } catch (error) {
        res.status(400).json({
            message: "club not found"
        });
    }
}

const addClub = async (req, res) => {
    try {
        const getData = req.body;
        const club = await new Clubs(getData).save();
        if (req.body.group) {
            const group = Groups.find({ _id: req.body.group });
            console.log(group)
            await group.updateOne({ $push: { team: club._id } });
        }
        res.status(200).json(club)
    } catch (error) {
        res.status(400).json({
            message: "Not add club"
        });
    }
}

const updateClub = async (req, res) => {
    try {
        const id = req.params.id;
        const getData = req.body;
        const club = await Clubs.findOneAndUpdate({
            _id: id
        }, getData, {
            club: true
        });
        if (req.body.group) {
            const group = Groups.find({ _id: req.body.group });
            await group.updateOne({ $push: { team: club._id } });
        }
        if (req.body.schedule) {
            const schedule = Schedule.find({ _id: req.body.schedule });
            await schedule.updateOne({ $push: { team: club._id } });
        }
        res.status(200).json(club)
    } catch (error) {
        res.status(400).json({
            message: "Cập nhật không thành công",
        });
    }
}

const removeClub = async (req, res) => {
    try {
        const id = req.params.id;
        const club = await Clubs.findOneAndDelete({
            _id: id
        });
        res.status(200).json(club);
    } catch (error) {
        res.status(400).json({
            message: "Xóa không thành công"
        });
    }
}

export {
    uploadClubImage,
    getAllClub,
    getOneClub,
    addClub,
    updateClub,
    removeClub,
    search
}