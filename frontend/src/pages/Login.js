import React, { useState } from 'react'
import axios from 'axios'
import bg from '../components/backdrop.jpg';
import Logo from "../components/Logo.png"

const logInHandler = async (email, password) => {
    if (email === '' || password === '') {
        alert("Please fill the empty fields and try again!")
    }
    else {
        let user
        const userDeatils = {
            email,
            password
        }

        console.log({
            email,
            password
        })
        let data = JSON.stringify({
            "email": "raunak12@connect.hku.hk",
            "password": "snubble1234"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:8080/v1/access/login',
            headers: {
                'Content-Type': 'text/plain'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });


        localStorage.setItem('user', JSON.stringify(user))
        // window.location.reload()
        // window.location.href = '/dashboard'
    }
}

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='bg-cover bg-center  p-20' style={{ backgroundImage: `url(${bg})` }}>
            <div classNameName="flex h-screen" >
                <div className='flex m-5 justify-center '>
                    <p className='text-white font-sans text-center p-5 bg-pink-700 w-1/5 rounded text-xl' >LogIn</p>
                </div>

                <div className="w-full max-w-xs m-auto bg-indigo-100  rounded p-5">
                    <header>
                        <img className="w-28 mx-auto mb-5" src={Logo} />
                    </header>
                    <form>
                        <div>
                            <label className="block mb-2 text-indigo-500" for="username">Username</label>
                            <input onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="email" />
                        </div>
                        <div>
                            <label className="block mb-2 text-indigo-500" for="password">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password" />
                        </div>
                        <div>
                            <input onClick={(e) => {
                                e.preventDefault()
                                logInHandler(email, password)
                            }} className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" />
                        </div>
                    </form>
                    <footer>
                        <a className="text-indigo-700 hover:text-pink-700 text-sm float-left" href="#">Forgot Password?</a>
                        <a className="text-indigo-700 hover:text-pink-700 text-sm float-right" href="#">Create Account</a>
                    </footer>
                </div>
            </div>

        </div>
    )
}

export default Login


// /company/aapl/related_stocks