const express = require("express");
const app = express();
const mysql =require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "Rajkumar",
    host: "localhost",
    password: "Raj@3009",
    database: "ReactDataBase",

})

app.post("/create", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const mobile = req.body.mobile;

    db.query("INSERT INTO personalInfo (name, email, mobile) VALUES (?,?,?)",
    [name, email, mobile],
    (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("inserted value")
        }
    } 
    );
});

app.get("/details", (req, res) => {
    db.query("SELECT * FROM personalInfo", (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
console.log(" node js server has started.");
})