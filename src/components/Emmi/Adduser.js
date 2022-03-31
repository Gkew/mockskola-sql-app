import "./Adduser.css";
import { useState } from "react";
import Axios from "axios";


const Adduser = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");
  const [role, setRole] = useState("");

  // const [newfname, setNewfname] = useState(0);
  // const [newlname, setNewlname] = useState(0);
  // const [newemail, setNewemail] = useState(0);
  // const [newaccount, setNewaccount] = useState(0);
  // const [newrole, setNewrole] = useState(0);

  const [usersList, setUsersList] = useState([]);

  const addUser = () => {
    Axios.post("http://localhost:3001/createUser", {
        fname: fname,
        lname: lname,
        email: email,
        account: account,
        role: role,
    }).then(() => {
      setUsersList([
        ...usersList,
        setFname(""),
        setLname(""),
        setEmail(""),
        setAccount(""),
        setRole(""),
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
        required
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
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
        </select>

        <button className="addBtn" disabled={!fname || !lname || !email || !account || !role} onClick={addUser}>Add a user</button>
        </div>
          
    </div>
  )
}


export default Adduser