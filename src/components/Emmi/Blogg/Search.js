import React, {useState} from 'react'
import Axios from 'axios'
import './Search.css'
function Search() {
    const [tagsList, setTagsList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getTags = () => {
      Axios.get("http://localhost:3001/posts").then((response) => {
        setTagsList(response.data);
      });
    };

  return (
    <div className='Search'>
    <input type="text" placeholder="Search.." onChange={event => setSearchTerm(event.target.value)}/>
    <button onClick={getTags}>Search</button>

    {tagsList.filter((val) => {
        if (searchTerm === "") {
            return val
        } else if (val.tags.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val 
        }
    }).map((val, key) => {
        return <div className='Filtered-tags'> {val.tags} - {val.post} </div>
    })}
    </div>
  )
}

export default Search