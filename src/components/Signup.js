import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const Navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if (auth) Navigate("/")
    }) 

//     const Collectdata = async () => {
//         console.warn(name, email, password);
//        let result = await fetch('http://localhost:5000/register',{
//             method:'post', 
//             body: JSON.stringify({name, email, password}),
//             headers:{
//                   'Content-Type':'application/json',
//                   'Accept':'application/json'
//                 }
//         })
//    result =await result.json();                                  
//     console.warn(result);
//     localStorage.setItem('user', JSON.stringify(result));
//     if(result)
//     {Navigate('/')}
// }
    return (
        <div>
            <h1> Register Here</h1>
            <input type='text' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit' onClick={Collectdata}>Signup</button>
        </div>
    )
}
export default Signup;