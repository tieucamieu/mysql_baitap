import { categoryModel } from "../models/category.model.js";

export const categoryController = {
    findMany: async (req, res) => {
        try {
            let {err, data} = await categoryModel.findMany2();
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
    }
}