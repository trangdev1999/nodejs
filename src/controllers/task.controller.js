import Tasks from '../models/task.model';

export const addTask = async (req, res) => {
    console.log(req.body);
    try {
        const task = await new Tasks(req.body).save();
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({
            message: "Tạo task không thành công"
        });
    }
}


export const getAllTask = async (req, res) => {
    try {
        const task = await Tasks.find();
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({
            message: error
        });
    }
}

export const removeTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Tasks.findOneAndDelete({
            _id: id
        });
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({
            message: "Xóa không thành công"
        });
    }
}

export const getOneTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Tasks.findOne({
            _id: id
        });
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({
            message: "news not found"
        });
    }
}

export const updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const getData = req.body;
        const task = await Tasks.findOneAndUpdate({
            _id: id
        }, getData, {
            task: true
        });
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({
            message: "Cập nhật không thành công",
        });
    }
}