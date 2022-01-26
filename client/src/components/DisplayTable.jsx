import React, {useEffect, useState} from 'react';  
import axios from 'axios';
// grab info from backend (axios)
// display when loaded.(useEffect)


const DisplayTable = ( ) => {

const [products, setProducts] = useState(null)

useEffect(()=>{
    axios.get('http://localhost:8000/api/products')
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err))
},[])

    return (
        <fieldset>
            <legend>DisplayTable.jsx</legend>
            {
                products?(
                    <table>
                        <thead>
                            <tr>
                                <td>Title</td>
                                <td>Price</td>
                                <td>Description</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, i)=>{
                                    return (
                                            <tr key={i}>
                                                <td>{product.title}</td>
                                                <td>{product.price}</td>
                                                <td>{product.description}</td>
                                            </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                ):
                <h2>Loading...</h2>
            }
        </fieldset>
    )
}

export default DisplayTable;