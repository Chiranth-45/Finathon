import { useState } from 'react';
import axios from 'axios';
import '../App.css';

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = async (e) => {
        e.preventDefault(); 
        await axios.post("http://localhost:3000/api/v1/users/register", 
            { name, username, password },
            { headers: { "Content-Type": "application/json" } }
        )
        .then(() => {
            alert("Registration Successful");
            setName("");
            setUsername("");
            setPassword("");
        })
        .catch((err) => {
            alert("Registration failed");
            console.log(err);
        });
    };

    return (
        <div>
            <form onSubmit={submitForm} className="register">
                <h2>Welcome to the Registration Page!</h2>
                <input 
                    type="text" 
                    placeholder="Full Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}