import "./Adduser.css";
import { useState } from "react";
import Axios from "axios";

function Adduser() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");
  const [role, setRole] = useState("");

  const [newfname, setNewfname] = useState(0);
  const [newlname, setNewlname] = useState(0);
  const [newemail, setNewemail] = useState(0);
  const [newaccount, setNewaccount] = useState(0);
  const [newrole, setNewrole] = useState(0);

  const [usersList, setUsersList] = useState([]);

  const addUser = () => {
    Axios.post("http://localhost:3001/create", {
        fname: fname,
        lname: lname,
        email: email,
        account: account,
        role: role,
    }).then(() => {
      setUsersList([
        ...usersList,
        {
            fname: fname,
            lname: lname,
            email: email,
            account: account,
            role: role,
        },
      ]);
    });
  };
  const getUser = () => {
    Axios.get("http://localhost:3001/users").then((response) => {
      setUsersList(response.data);
    });
  };

const updateUser = (id) => {
    Axios.put("http://localhost:3001/update", { fname: newfname, lname: newlname, email: newemail, account: newaccount, role: newrole, id: id }).then(
      (response) => {
        setUsersList(
          usersList.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  fname: newfname, 
                  lname: newlname, 
                  email: newemail, 
                  account: newaccount, 
                  role: newrole,
                }
              : val;
          })
        );
      }
    );
  };
  const deleteUser = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setUsersList(
        usersList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };
  return (
    <div className="Adduser">
      <div className="adding-form">
        <label>Firstname:</label>
        <input
          type="text"
          value={fname}
          onChange={(event) => {
            setFname(event.target.value);
          }}
        />
        <label>Lastname:</label>
        <input
          type="text"
          value={lname}
          onChange={(event) => {
            setLname(event.target.value);
          }}
        />
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label>Account:</label>
        <input
          type="text"
          value={account}
          onChange={(event) => {
            setAccount(event.target.value);
          }}
        />
        <label>Role:</label>
        <select
          type="text"
          value={role}
          onChange={(event) => {
            setRole(event.target.value);
          }}
        >
        <option>Teacher</option>
        <option>Admin</option>
        </select>

        <button className="addBtn" disabled={!fname || !lname || !email || !account || !role} onClick={addUser}>Add a user</button>
        </div>

        <div className="users">
        <button onClick={getUser}>Show Users</button>
        {usersList.map((val, key) => {
          return (
            <div className="user-output">
              <div>
              <h3>Name: {val.fname}</h3>
              <h3>Lastname: {val.lname}</h3>
              <h3>Email: {val.email}</h3>
              <h3>Account: {val.account}</h3>
              <h3>Role: {val.role}</h3>
              </div>
              <div>
              <input
              type="text"
              placeholder="Firstname"
              onChange={(event) => {
                setNewfname(event.target.value);
              }}
            />
            <input
            type="text"
            placeholder="Lastname"
            onChange={(event) => {
              setNewlname(event.target.value);
            }}
          />
          <input
          type="text"
          placeholder="Email"
          onChange={(event) => {
            setNewemail(event.target.value);
          }}
        />
        <input
        type="number"
        placeholder="Account number"
        onChange={(event) => {
          setNewaccount(event.target.value);
        }}
      />
                <button
                  onClick={() => {
                    updateUser(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteUser(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default Adduser