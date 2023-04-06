import React from 'react'
import bg from '../components/backdrop.jpg';
import Logo from "../components/Logo.png"

function Login() {
    return (
        <div className='bg-cover bg-center  p-20' style={{ backgroundImage: `url(${bg})`}}>


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
                        <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" name="username" />
                    </div>
                    <div>
                        <label className="block mb-2 text-indigo-500" for="password">Password</label>
                        <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" name="password" />
                    </div>
                    <div>
                        <input className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" />
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