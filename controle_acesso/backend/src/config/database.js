import mysql2 from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config

 const db = mysql2.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "senai",
    database: process.env.DB_DATABASE || "desi20251",

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

export default db

