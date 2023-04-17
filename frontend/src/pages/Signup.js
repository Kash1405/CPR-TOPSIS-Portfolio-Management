import React, { useState } from 'react'
import axios from 'axios'
import bg from '../components/backdrop.jpg';
import Logo from "../components/Logo.png"
import {Helmet} from 'react-helmet';
const signUpHandler = async (username, password) => {
    if (username === '' || password === '') {
        alert("Please fill the empty fields and try again!")
    }
    else {
        let email = username
        const userDeatils = {
            email,
            password
        };

        await axios.post('http://localhost:8080/v1/user/signup', userDeatils)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            .then(alert('Account Successfully Created'))

        // logInHandler(email, password)
    }
}

function Signup() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className=' p-20 bg-gradient-to-b from-blue-900 to-transparent'>
            <Helmet>
        <style>{'body { background-color: black; }'}</style>
    </Helmet>
            <div classNameName="flex h-screen" >
                <div className='flex m-5 justify-center '>
                    <p className='text-white font-sans text-center p-5 bg-blue-800 border-yellow-600 border-b-2 border-r-2 w-1/5 rounded-xl text-xl' >SignUp</p>
                </div>

                <div className="w-full max-w-xs m-auto bg-black rounded-xl border-yellow-600 border-2  p-5 shadow-lg shadow-yellow-900">
                    <header>
                        <img className="w-28 mx-auto mb-5" src={Logo} />
                    </header>
                    <form>
                        <div>
                            <label className="block mb-2 text-yellow-600" for="username">Username</label>
                            <input onChange={(e) => setUsername(e.target.value)} className="w-full p-2 mb-6 text-white border-b-2 border-yellow-600 outline-none bg-black focus:border-2" type="text" name="username" />
                        </div>
                        <div>
                            <label className="block mb-2 text-yellow-600" for="password">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-6 text-white border-b-2 border-yellow-600 outline-none bg-black focus:border-2" type="password" name="password" />
                        </div>
                        <div>
                            <input onClick={() => signUpHandler(username, password)} className="w-full bg-blue-800 hover:bg-yellow-700 hover:text-black text-white font-bold py-2 px-4 mb-6 rounded" type="submit" />
                        </div>
                    </form>
                    <footer>
                        <a className="text-blue-700 hover:text-pink-700 text-sm float-left" href="#">Forgot Password?</a>
                        <a className="text-blue-700 hover:text-pink-700 text-sm float-right" href="#">Create Account</a>
                    </footer>
                </div>
            </div>

        </div>
    )
}

export default Signup