import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Productlist = () => {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])


    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/products", {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });

        result = await result.json();
        setproducts(result);
    }
    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete",
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }

        });
        result = await result.json()
        if (result) {
            getProducts();
        }
    };
    const serachHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`, {
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            result = await result.json();
            if (result) {
                setproducts(result)
            }
        }
        else {
            getProducts();
        }

    }

    return (
        <div className='product-item'>

            <h1>Product-List</h1>
            <input type="text" placeholder='Search Product' className='search-product-box'
                onChange={serachHandle}
            />
            <ul>
                <li>S.no. </li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Opration</li>
            </ul>
            {
                products.length > 0 ? products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1} </li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li><button onClick={() => deleteProduct(item._id)}>Delete</button>
                            <Link to={"/update/" + item._id}>Update</Link></li>
                    </ul>
                )
                    : <h1>No result found</h1>
            }

        </div>
    )
}

export default Productlist