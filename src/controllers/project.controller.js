import Projects from '../models/project'

export const addProject = async (req, res) => {
    try {
        const project = await new Projects(req.body).save();
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({
            message: "Tạo dự án không thành công"
        });
    }
}


export const getAllProject = async (req, res) => {
    try {
        const news = await Projects.find();
        res.status(200).json(news);
    } catch (error) {
        res.status(400).json({
            message: error
        });
    }
}

export const removeProject = async (req, res) => {
    try {
        const id = req.params.id;
        const project = await Projects.findOneAndDelete({
            _id: id
        });
        res.status(200).json(project);
    } catch (error) {
        res.status(400).json({
            message: "Xóa không thành công"
        });
    }
}

export const getOneProject = async (req, res) => {
    try {
        const id = req.params.id;
        const project = await Projects.findOne({
            _id: id
        });
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({
            message: "news not found"
        });
    }
}

export const updateProject = async (req, res) => {
    try {
        const id = req.params.id;
        const getData = req.body;
        console.log(req.body)
        const project = await Projects.findOneAndUpdate({
            _id: id
        }, getData, {
            project: true
        });
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({
            message: "Cập nhật không thành công",
        });
    }
}