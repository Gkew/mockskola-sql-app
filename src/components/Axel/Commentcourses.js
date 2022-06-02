import "./Commentcourses.css";
import { useState } from "react";
import Axios from "axios";

function Commentcourses() {
  const [newflname, setNewflname] = useState(0);
  const [newccourse, setNewccourse] = useState(0);
  const [newcomment, setNewcomment] = useState(0);
  const [flname, setFlname] = useState("");
  const [ccourse, setCcourse] = useState("");
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [coursesList, setCoursesList] = useState([]);

  const addComment = () => {
    Axios.post("http://localhost:3001/createComments", {
      flname: flname,
      ccourse: ccourse,
      comment: comment,
    }).then(() => {
      setCommentsList([
        ...commentsList,

        {
          flname: flname,
          ccourse: ccourse,
          comment: comment,
        },
      ]);
    });
  };
  const getCourses = () => {
    Axios.get("http://localhost:3001/courses").then((response) => {
      setCoursesList(response.data);
    });
  };

  const getComments = () => {
    Axios.get("http://localhost:3001/comments").then((response) => {
      setCommentsList(response.data);
    });
  };
  const deleteComment = (id) => {
    Axios.delete(`http://localhost:3001/deletecomment/${id}`).then(
      (response) => {
        setCommentsList(
          commentsList.filter((val) => {
            return val.id !== id;
          })
        );
      }
    );
  };

  const updateComment = (id) => {
    Axios.put("http://localhost:3001/updateComment", {
      flname: newflname,
      ccourse: newccourse,
      comment: newcomment,
      id: id,
    }).then((response) => {
      setCommentsList(
        commentsList.map((val) => {
          return val.id === id
            ? {
                id: val.id,
                flname: newflname,
                ccourse: newccourse,
                comment: newcomment,
              }
            : val;
        })
      );
    });
  };
  return (
    <div className="maincomment">
      <div className="commentform">
        <label>State your name</label>
        <input
          type="text"
          onChange={(event) => {
            setFlname(event.target.value);
          }}
        />
        <select
          onClick={getCourses}
          onChange={(event) => {
            setCcourse(event.target.value);
          }}
        >
          <label>Select course</label>
          {coursesList.map((val) => {
            return (
              <>
                <option value="" selected disabled hidden>
                  Choose here
                </option>
                <option>{val.course}</option>
              </>
            );
          })}
        </select>

        <label>Review</label>
        <textarea
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <button onClick={addComment}>Submit</button>
      </div>

      <button onClick={getComments}>Show comments</button>

      {commentsList.map((val, key) => {
        return (
          <div className="commentsection">
            <p>Name : {val.flname}</p>
            <p>Course : {val.ccourse}</p>
            <div className="commentsrow">
              {" "}
              <p>Review : {val.comment}</p>{" "}
            </div>
            <button
              className="delBtn"
              onClick={() => {
                deleteComment(val.id);
              }}
            >
              Delete
            </button>

            <div className="Edits">
              <input
                type="text"
                placeholder="Name"
                onChange={(event) => {
                  setNewflname(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Course"
                onChange={(event) => {
                  setNewccourse(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Comment"
                onChange={(event) => {
                  setNewcomment(event.target.value);
                }}
              />
              <button
                className="editBtn"
                onClick={() => {
                  updateComment(val.id);
                }}
              >
                Update
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Commentcourses;
