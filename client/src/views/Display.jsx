import React, {useState, useEffect} from 'react';
import axios from "axios";
import CreateForm from '../components/CreateForm';
import DisplayTable from '../components/DisplayTable';


const Display = ( ) => {

    const [message, setMessage] = useState("Loading...")

// get info from backend (axios)
// get info when loading (useEffect)
// variable will change when we get the data from backend (state)

useEffect(()=>{
    axios.get('http://localhost:8000/api')
        .then(res=>setMessage(res.data.message))
        .catch(err=>console.log(err))
},[])

    return (
        <div>
            <fieldset>
                <legend>Display.jsx</legend>
                <h2>Message from backend: {message} </h2>
            <CreateForm />
            <DisplayTable />
            </fieldset>
        </div>
    );
}

export default Display;