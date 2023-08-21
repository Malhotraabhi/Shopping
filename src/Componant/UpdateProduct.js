import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState("");
    const [company, setcompany] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(params);
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        console.log(params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setname(result.name);
        setprice(result.price);
        setcategory(result.category);
        setcompany(result.company);


    }

    const updateproduct = async () => {

        console.log(name, price, category, company)
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        navigate("/");
    }

    return (
        <div className='product'>
            <h1>Update Product Details</h1>
            <input type="text" placeholder='Enter product name' className='inputbox'
                value={name} onChange={(e) => setname(e.target.value)}
            />
            <input type="text" placeholder='Enter product price' className='inputbox'
                value={price} onChange={(e) => setprice(e.target.value)}
            />
            <input type="text" placeholder='Enetr product category' className='inputbox'
                value={category} onChange={(e) => setcategory(e.target.value)}
            />
            <input type="text" placeholder='Enetr product company' className='inputbox'
                value={company} onChange={(e) => setcompany(e.target.value)}
            />

            <button onClick={updateproduct} className='appbutton'>Update product</button>
        </div>
    )
}

export default UpdateProduct