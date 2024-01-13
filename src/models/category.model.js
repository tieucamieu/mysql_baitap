import { mysqlDB } from '../mysql.js'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export const categoryModel = {
    findMany: async () => {
        try {
            return await new Promise((ok) => {
                let queryStr = `
                    SELECT category.*, product.id as productId, product.name, product.price
                    FROM category
                    LEFT JOIN product
                    on product.categoryId = category.id
                `
                mysqlDB.query(queryStr, (err, result) => {
                    let temp = [];
                    for (let i in result) {
                        if(temp.length == 0) {
                            temp.push({
                                id: result[i].id,
                                title: result[i].title,
                                status: result[i].statis,
                                products: result[i].productId ? [
                                    {
                                        id: result[i].productId,
                                        name: result[i].name,
                                        price: result[i].price
                                    }
                                ] : []
                            })
                            continue
                        }

                        if (temp[temp.length - 1].id == result[i].id) {
                            temp[temp.length - 1].products = [
                                ...temp[temp.length - 1].products,
                                {
                                    id: result[i].productId,
                                    name: result[i].name,
                                    price: result[i].price
                                }
                            ]
                        } else {
                            temp.push({
                                id: result[i].id,
                                title: result[i].title,
                                status: result[i].status,
                                products: result[i].productId ? [
                                    {
                                        id: result[i].productId,
                                        name: result[i].name,
                                        price: result[i].price
                                    }
                                ] : []
                            })
                        }
                    }
                    if (err) ok({
                        err: "Lỗi query!"
                    })

                    ok({
                        data: temp
                    })
                })
            })
        } catch (err) {
            return {
                err
            }
        }
    },
    findMany2: async () => {
        try {
            let category = await prisma.category.findMany({
                include: {
                    products: {
                        include: {
                            category: true
                        }
                    }
                }
            });
            return {
                data: category
            }
        } catch (err) {
            return {
                err
            }
        }
    }
} 