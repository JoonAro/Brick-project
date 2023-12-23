import express from "express"
import mysql from "mysql2"
import cors from 'cors'
const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "brickDB"
})

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("Hello this is the backend")
})

app.get("/products", (req, res) => {
    const q = "SELECT * FROM products";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8082, () => {
    console.log("Connected to backend!")
})