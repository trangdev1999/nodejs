import Employees from "../models/employee.model";
import Zones from '../models/zone.model';
import bcrypt from 'bcrypt';

export const addEmployee = async (req, res) => {
    try {
        const checkName = await Employees.findOne({ name: req.body.name });

        if (checkName) {
            return res.status(200).json({
                name: 'tao nhan vien thanh cong!!!',
                status: false
            })
        }

        const checkEmail = await Employees.findOne({ email: req.body.email }).exec();
        if (checkEmail) {
            return res.status(200).json({
                email: 'Email đã tồn tại!!!',
                status: false
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);
        const employee = await new Employees({
            name: req.body.name,
            password: hashed,
            email: req.body.email,
            zone: req.body.zone,
            image: req.body.image,
            phone: req.body.phone,
            status: req.body.status,
        }).save();

        if (req.body.zone) {
            const group = Zones.find({ _id: req.body.zone });
            await group.updateOne({ $push: { employeeId: employee._id } });
        }

        return res.status(201).json({
            status: true,
            employee
        })

    } catch (error) {
        res.status(400).json({
            message: "Tạo nhân viên không thành công"
        });
    }
}

export const getAllEmployee = async (req, res) => {
    try {
        const employee = await Employees.find()
        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({
            message: error
        });
    }
}

export const getOneEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const project = await Employees.findOne({
            _id: id
        });
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({
            message: "news not found"
        });
    }
}

export const updateEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const getData = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);
        getData.password = hashed;
        const employee = await Employees.findOneAndUpdate({
            _id: id
        }, getData, {
            employee: true
        });

        if (req.body.zone) {
            const getEmployeeId = await Zones.findOne({ _id: req.body.zone });
            if (getEmployeeId._id.toString() != req.body.zone) {
                const group = Zones.find({ _id: req.body.zone });
                await group.updateOne({ $push: { employeeId: employee._id } });
            }
        }
        res.status(200).json(employee)
    } catch (error) {
        res.status(400).json({
            message: "Cập nhật không thành công",
        });
    }
}

export const removeEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const project = await Employees.findOneAndDelete({
            _id: id
        });
        res.status(200).json(project);
    } catch (error) {
        res.status(400).json({
            message: "Xóa không thành công"
        });
    }
}