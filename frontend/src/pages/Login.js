import React, { useState } from 'react'
import axios from 'axios'
import bg from '../components/backdrop.jpg';
import Logo from "../components/Logo.png"
import { Helmet } from 'react-helmet';

const logInHandler = async (email, password) => {
    if (email === '' || password === '') {
        alert("Please fill the empty fields and try again!")
    }
    else {
        // let user
        // const userDeatils = {
        //     email,
        //     password
        // }

        // console.log({
        //     email,
        //     password
        // })
        // let data = JSON.stringify({
        //     "email": "raunak12@connect.hku.hk",
        //     "password": "snubble1234"
        // });

        // let config = {
        //     method: 'post',
        //     maxBodyLength: Infinity,
        //     url: 'http://localhost:8080/v1/access/login',
        //     headers: {
        //         'Content-Type': 'text/plain'
        //     },
        //     data: data
        // };

        // axios.request(config)
        //     .then((response) => {
        //         console.log(JSON.stringify(response.data));
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });


        // localStorage.setItem('user', JSON.stringify(user))
        // window.location.reload()
        window.location.href = '/dashboard'
    }
}

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className=' p-20 bg-gradient-to-b from-blue-900 to-transparent'>
            <Helmet>
                <style>{'body { background-color: black; }'}</style>
            </Helmet>
            <div classNameName="flex h-screen" >
                <div className='flex m-5 justify-center '>
                    <p className='text-white font-sans text-center p-5 bg-blue-800 border-yellow-600 border-b-2 border-r-2 w-1/5 rounded-xl text-xl' >LogIn</p>
                </div>

                <div className="w-full max-w-xs m-auto bg-black rounded-xl border-yellow-600 border-2  p-5 shadow-lg shadow-yellow-900">
                    <header>
                        <img className="w-20 mx-auto mb-5" src={Logo} />
                    </header>
                    <form>
                        <div>
                            <label className="block mb-2 text-yellow-600" for="username">Username</label>
                            <input onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-6 text-white border-b-2 border-yellow-600 outline-none bg-black focus:border-2" type="text" name="email" />
                        </div>
                        <div>
                            <label className="block mb-2 text-yellow-600" for="password">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-6 text-white border-b-2 border-yellow-600 bg-black outline-none focus:border-2 " type="password" name="password" />
                        </div>
                        <div>
                            <input onClick={(e) => {
                                e.preventDefault()
                                logInHandler(email, password)
                            }} className="w-full bg-blue-800 hover:bg-yellow-700 hover:text-black text-white font-bold py-2 px-4 mb-6 rounded" type="submit" />
                        </div>
                    </form>
                    <footer>
                        <a className="text-blue-700 hover:text-pink-700 text-sm float-left " href="#">Forgot Password?</a>
                        <a className="text-blue-700 hover:text-pink-700 text-sm float-right" href="#">Create Account</a>
                    </footer>
                </div>
            </div>

        </div>
    )
}

export default Login


// /company/aapl/related_stocks