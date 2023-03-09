import User from '../models/user';
import Employees from '../models/employee.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signUp = async (req, res) => {
    try {
        const checkEmail = await User.findOne({ email: req.body.email }).exec();
        if (checkEmail) {
            return res.status(200).json({
                message: 'Email đã tồn tại!!!'
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashed
        }).save();

        return res.status(200).json({

            message: "Đăng kí tài khoản thành công!!!"
        })
    } catch (error) {
        return res.status(400).json({
            message: "Đăng kí không thành công!!!"
        })
    }
}

export const signIn = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(404).json({ message: "email khong dung" })
        }


        const checkPassword = await bcrypt.compare(
            req.body.password,
            user.password)

        if (!checkPassword) {
            return res.status(404).json({ message: "password khong dung" })
        }


        if(user && checkPassword) {
            const token =jwt.sign({_id:user._id},'trang')
            return res.status(200).json({
                user:user,
                accessToken:token,
            })
        }
    } catch (e) { 
        return res.status(400).json({
            message: 'Lỗi đăng nhập'
        })
    }
}

export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({ _id: { $ne: req.params.id } }).select([
            'username', 'email', '_id'
        ]);
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const remove = async (req, res) => {
    const filter = { _id: req.params.id };

    try {
        const user = await User.findOneAndDelete(filter).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Xóa user không thành công",
            error
        });
    }
};