import React, {useState} from 'react'
import Axios from 'axios'
import './Getusers.css'

function Fetching() {
  
  const [newfname, setNewfname] = useState(0);
  const [newlname, setNewlname] = useState(0);
  const [newemail, setNewemail] = useState(0);
  const [newaccount, setNewaccount] = useState(0);
  const [newrole, setNewrole] = useState(0);

    const [usersList, setUsersList] = useState([]);
    // sqlget = "SELECT `title`, `text`, `name` FROM `table` WHERE `title` = `text`";
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

        <div className="users">
        <button onClick={getUser}>Show Users</button>
        {usersList.map((val) => {
          return (
            <div className="user-output">
              <div className='Data'>
              <p><strong>Name: </strong>{val.fname}</p>
              <p><strong>Lastname: </strong>{val.lname}</p>
              <p><strong>Email: </strong>{val.email}</p>
              <p><strong>Account: </strong>{val.account}</p>
              <p><strong>Role: </strong>{val.role}</p>
              <button className='updateBtn'
              onClick={() => {
                updateUser(val.id);
              }}
            >
              {" "}
              Update
            </button>
          
            <button className='delBtn'
              onClick={() => {
                deleteUser(val.id);
              }}
            >
              Delete
            </button>
            </div>


        
            <div className='Edits'>
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
      <select
      type="number"
      placeholder="Account number"
      onChange={(event) => {
        setNewrole(event.target.value);
      }}
    >
    <option>Teacher</option>
    <option>Admin</option>
    </select>


  </div>
    </div>

      
          );


        })}

      </div>


  );
}
export default Fetching