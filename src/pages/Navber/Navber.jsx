import React, { useContext } from 'react'
import { Link, NavLink, } from 'react-router-dom'

import Logo from '../../assets/logo.avif'
import { AuthContext } from '../../Providers/AuthProvider'

function Navber() {

    const { user, logOut } = useContext(AuthContext);


    const handleSingOut = () => {
        logOut()
            .then()
            .catch()
    }


    const navberLink = <>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">register</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/allservices">All Services</NavLink></li>
        {/* <img src={user.photoURL} alt="" /> */}
    </>

    return (
        <div className="navbar bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-t-lg ">
            < div className="navbar-start" >
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navberLink}
                    </ul>
                </div>
                <img className='rounded-full w-12 h-12' src={Logo} alt="" />
                <a className="text-lime-300 font-dancing text-xl ml-2 ">SPORTS</a>

            </div >
            <div className="navbar-center text-white hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navberLink}
                </ul>
            </div>
            {
                user ?
                    <button onClick={handleSingOut} className='btn'>Sign Out</button>
                    :
                    <Link to="/login">
                        <button className='Navber-end  btn '>Login</button>
                    </Link>

            }




        </div >
    )
}

export default Navber