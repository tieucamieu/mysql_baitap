import { userModel } from "../models/user.model.js";

export const userController = {
    findMany: async (req, res) => {
        try {
            let {err, data} = await userModel.findMany();
            if(err) throw err;

            return res.status(200).json({
                message: "Lấy dữ liệu thành công!",
                data
            })
        }catch(err) {
            return res.status(500).json({
                message: err
            })
        }
    },
    create: async (req, res) => {
        try {
            let {err, data} = await userModel.create(req.body);
            if(err) throw err;

            return res.status(200).json({
                message: "Tạo mới dữ liệu thành công!",
                data
            })
        }catch(err) {
            return res.status(500).json({
                message: err
            })
        }
    },
    delete: async (req, res) => {
        try {
            let {err, data} = await userModel.delete(req.params.userId);
            if(err) throw err;

            return res.status(200).json({
                message: "Xóa dữ liệu thành công!",
                data
            })
        }catch(err) {
            return res.status(500).json({
                message: err
            })
        }
    },
    update: async (req, res) => {
        try {
            let {err, data} = await userModel.update(req.params.userId, req.body);
            if(err) throw err;

            return res.status(200).json({
                message: "Cập nhật dữ liệu thành công!",
                data
            })
        }catch(err) {
            return res.status(500).json({
                message: err
            })
        }
    }
}