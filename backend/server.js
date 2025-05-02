const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createPool(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cor_database',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

db.getConnection((err) => {
    if (err) console.log("Can't Connect to Database.", err);
    else console.log("Connecting Database Successfully.");
});

app.get("/api/cor", (req, res) => {
    db.query("SELECT * FROM cor", (err, result) => {
        if (err) return res.status(401).json({ message: "Failed to fetch COR" })

        return res.status(200).json({ message: "Successfull", COR: result[0] })
    })
});

app.get("/api/student_info", (req, res) => {
    db.query("SELECT * FROM student_information", (err, results) => {
        if (err) return res.status(401).json({ message: "Failed to fetch student information" });

        console.log(results[0])

        return res.status(200).json({ message: "Successfull", student: results[0] })
    });
});

app.get("/api/subjects", (req, res) => {
    db.query("SELECT * FROM subjects", (err, subjects) => {
        if (err) return res.status(401).json({ message: "Failed to fetch subjects" });

        console.log(subjects)

        return res.status(200).json({ message: "Successfull", subjects })
    });
});

app.get("/api/fees", (req, res) => {
    db.query("SELECT * FROM assessed_fees", (err, fees) => {
        if (err) return res.status(401).json({ message: "Failed to fetch fees" });

        return res.status(200).json({ message: "Successfull", fees: fees[0] })
    });
});

app.listen(5000, () => {
    console.log("Server is running in port 5000.");
})