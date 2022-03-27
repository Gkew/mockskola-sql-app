const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "users",
});

app.post("/create", (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const account = req.body.account;
  const role = req.body.role;





  db.query(
    "INSERT INTO users (fname, lname, email, account, role) VALUES (?,?,?,?,?)",
    [fname, lname, email, account, role],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const account = req.body.account;
  const role = req.body.role;

  db.query(
    "UPDATE users SET fname = ?, lname = ?, email = ?, account = ?, role =?  WHERE id = ?",
    [fname, lname, email, account, role, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});



app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM users WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});