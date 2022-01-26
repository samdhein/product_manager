import React, { useState } from 'react';
import axios from 'axios';

const CreateForm = ( ) => {
// input with onChange - state
// submitHandler with onSubmit - axios
// send info to backend
// if successful: redirect
// if failed: validation

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/products', {title, price, description})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }


    return (
        <fieldset>
            <legend>CreateForm.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Title</label>
                    <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Price</label>
                    <input type="number" name="price" value={price} onChange={e=>setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" name="title" value={description} onChange={e=>setDescription(e.target.value)} />
                </p>
                <button>Submit</button>
            </form>
        </fieldset>
    )
}

export default CreateForm;