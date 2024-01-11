import dotenv from 'dotenv'
dotenv.config()

import mysql from 'mysql'


export const mysqlDB = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_ID,
    password: process.env.MYSQL_PW,
    database: process.env.MYSQL_DB,
    port: process.env.MYSQL_PORT,
});

export function connect() {
    try { 
        mysqlDB.connect(err => {
            if(err) {
                console.log("Connect MySQL Err!")
                return
            }
            console.log("Connect MySQl Ok!")
        })
    }catch(err) {
        console.log("Connect MySQL Err!")
    }
}
