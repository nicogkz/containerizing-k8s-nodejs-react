

import './App.css'
import { Link } from "react-router-dom"

import { useCallback, useState, useEffect } from "react";
import axios from "axios";


const home = (props) => {
    
    //const [count, setCount] = useState(0)
    const [values, setValues] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [value, setValue] = useState("");

    const getData = useCallback(async () => {
        //  nginx role to redirect to the proper URL
        const data = await axios.get("/api/getvalues/all");
        setValues(data.data.rows.map(row => row.number));
        setStatuses(data.data.rows.map(row => row.status));
      }, []);
    
    const saveData = useCallback(
        async event => {
            event.preventDefault();

            await axios.post("/api/addvalues", {
            value
            });

            setValue("");
            getData();
        },[value, getData]);

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
        <div>
                <h1>This is a demo App</h1>
                <p><Link to="/newpage" >Go to another page</Link></p>
                <button onClick={getData}>Get all data</button>
                <p><span className="title">Values</span></p>
                <div className="cont">
                {values.map((value,index) => (
                    <div key={index} className="row">{value}: {statuses[index]}!</div>
                ))}
                </div>
                <form className="form" onSubmit={saveData}>
                    <label>Enter a number: </label>
                    <input
                        value={value}
                        onChange={event => {
                        setValue(event.target.value);
                        }}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </>

        
    )
}

export default home