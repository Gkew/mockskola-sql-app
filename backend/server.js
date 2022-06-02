////////////////////////////////////////////////////////////////////////
//Emmi
////////////////////////////////////////////////////////////////////////
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

app.post("/createUser", (req, res) => {
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
app.post("/createStudent", (req, res) => {
  const studentFname = req.body.studentFname;
  const studentLname = req.body.studentLname;
  const studentEmail = req.body.studentEmail;
  const studentCourse = req.body.studentCourse;

  db.query(
    "INSERT INTO students (studentFname, studentLname, studentEmail, studentCourse) VALUES (?,?,?,?)",
    [studentFname, studentLname, studentEmail, studentCourse],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
app.post("/createPost", (req, res) => {
  const title = req.body.title;
  const publisher = req.body.publisher;
  const post = req.body.post;
  const tags = req.body.tags;

  db.query(
    "INSERT INTO posts (title, publisher,  post, tags) VALUES (?,?,?,?)",
    [title, publisher, post, tags],
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
app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/posts", (req, res) => {
  db.query("SELECT * FROM posts", (err, result) => {
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
app.delete("/deleteposts/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM posts WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/deleteusers/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM users WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.delete("/deletestudents/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM students WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////
//AXEL
////////////////////////////////////////////////////////////////////////////////////////////////

app.post("/createCourses", (req, res) => {
  const course = req.body.course;
  const teacher = req.body.teacher;
  const weeks = req.body.weeks;
  const info = req.body.info;

  db.query(
    "INSERT INTO courses (course, teacher, weeks, info) VALUES (?,?,?,?)",
    [course, teacher, weeks, info],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/courses", (req, res) => {
  db.query("SELECT * FROM courses", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/deletecourses/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM courses WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/createcomments", (req, res) => {
  const flname = req.body.flname;
  const ccourse = req.body.ccourse;
  const comment = req.body.comment;

  db.query(
    "INSERT INTO comments (flname, ccourse, comment) VALUES (?,?,?)",
    [flname, ccourse, comment],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/comments", (req, res) => {
  db.query("SELECT * FROM comments", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.delete("/deletecomment/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM comments WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/updateCourses", (req, res) => {
  const id = req.body.id;
  const course = req.body.course;
  const teacher = req.body.teacher;
  const weeks = req.body.weeks;
  const info = req.body.info;
  db.query(
    "UPDATE courses SET course=?, teacher=?, weeks=?, info=?  WHERE id = ?",
    [course, teacher, weeks, info, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/updateComment", (req, res) => {
  const id = req.body.id;
  const flname = req.body.flname;
  const ccourse = req.body.ccourse;
  const comment = req.body.comment;

  db.query(
    "UPDATE comments SET flname=?, ccourse=?, comment=?  WHERE id = ?",
    [flname, ccourse, comment, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
/////////////////////////////////////////////////////////////////////////////////////////////////
//MARKUS
////////////////////////////////////////////////////////////////////////////////////////////////

app.post("/createPrograms", (req, res) => {
  const program = req.body.program;
  const description = req.body.description;
  const courses = req.body.courses;
  const admin = req.body.admin;

  db.query(
    "INSERT INTO programs (program, description, courses, admin) VALUES (?,?,?,?)",
    [program, description, courses, admin],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/programs", (req, res) => {
  db.query("SELECT * FROM programs", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/deleteprogram/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM programs WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/updateprogram", (req, res) => {
  const id = req.body.id;
  const program = req.body.program;
  const description = req.body.description;
  const courses = req.body.courses;
  const admin = req.body.admin;

  db.query(
    "UPDATE programs SET program = ?, description = ?, courses = ?, admin = ? WHERE id = ?",
    [program, description, courses, admin, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
