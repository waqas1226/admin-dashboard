import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
/* Adapt the colors based on primary prop */
background: "white";
color:  ${props => props.inputColor || "palevioletred"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem("user");
    })
    const handleLogin = async () => {
        // console.log(email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }

        })
        result = await result.json();
        console.warn(result);

        if (result.user.name) {
            localStorage.setItem("user", JSON.stringify(result));
            Navigate('/FileHandle')
            console.warn('result');
        }
    }
    return (
        <div>
            <h1> Login </h1>
            <input type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button inputColor="black" type='submit' onClick={handleLogin}>Login</Button>
        </div>

    )
}

export default Login;



