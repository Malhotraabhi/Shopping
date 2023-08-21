import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Addproduct = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
  const [error, seterror] = useState(false);
  const navigate= useNavigate();

  const addproduct = async () => {


    console.log(!name)
    if (!name || !price || !category || !company)
     {
      seterror(true);
      return false;
    }

    const userid = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: 'post',
      body: JSON.stringify({ name, price, category, company, userid }),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json();
    alert("Added Successfully");
    navigate('/');

  }
  return (
    <div className='product'>
      <h1>Add-Product Details</h1>
      <input type="text" placeholder='Enter product name' className='inputbox'
        value={name} onChange={(e) => setname(e.target.value)} 
        />{error && !name && <span className='invalid-input'>Enetr valid name</span>}

      <input type="text" placeholder='Enter product price' className='inputbox'
        value={price} onChange={(e) => setprice(e.target.value)} 
        />{error && !price && <span className='invalid-input'>Enetr valid price</span>}

      <input type="text" placeholder='Enetr product category' className='inputbox'
        value={category} onChange={(e) => setcategory(e.target.value)} 
        />{error && !category && <span className='invalid-input'>Enetr valid category</span>}

      <input type="text" placeholder='Enetr product company' className='inputbox'
        value={company} onChange={(e) => setcompany(e.target.value)}
         />{error && !company && <span className='invalid-input'>Enetr valid company</span>}


      <button onClick={addproduct} className='appbutton'>Add product</button>
    </div>
  )
}

export default Addproduct