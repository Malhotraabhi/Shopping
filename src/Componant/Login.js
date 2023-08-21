import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate('/')
        }
    }, []);
    const loginHandle = async () => {
        console.log(email, password);
        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'

            }
        });
        result = await result.json();
        console.log(result);
        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.auth));
            navigate('/');

        }
        else {
            alert("Please Enetr Correct Details")
        }










    }

    return (
        <div className='login'>
            <h1>Login</h1>
            <input type="text" value={email} onChange={(e) => setemail(e.target.value)}
                className='inputbox' placeholder="Enter email" />
            <input type="text" value={password} onChange={(e) => setpassword(e.target.value)}
                className='inputbox' placeholder="Enter password" />
            <button onClick={loginHandle} className='appbutton' type='button'>Login</button>
        </div>
    )
}

export default Login