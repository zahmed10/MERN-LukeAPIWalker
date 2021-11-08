import React, { useState } from  'react';
import { useHistory } from "react-router-dom";

const Home = (props) => {
    const [selection, setSelection] = useState("people");
    const [id, setId] = useState(1);
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        history.push(`/${selection}/${id}`);
    };
    


    return (
        <div>
            <div >
                {/* class="d-flex" can be used to do flex with bootstrap */}

            <form className="d-flex" onSubmit={ search }>
            <div>
            <label>Search for: </label>
            <select  onChange={ (e) => setSelection(e.target.value) } value={selection}> 
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            </div>



            <div>
                <label>ID: </label> 
                <input type="number" min={1} onChange={ (e) => setId(e.target.value) } value={id} />
            </div>
            <input type="submit" value="Search" />
        </form>
            </div>
            
        </div>
    )
}

export default Home
