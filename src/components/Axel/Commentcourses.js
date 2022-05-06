import "./Commentcourses.css";
import { useState } from "react";
import Axios from "axios";

function Commentcourses() {
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
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setCommentsList(
        commentsList.filter((val) => {
          return val.id !== id;
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
        <button onClick={addComment}>add blabla</button>
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
          </div>
        );
      })}
    </div>
  );
}

export default Commentcourses;
