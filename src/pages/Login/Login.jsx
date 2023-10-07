import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {


    return (
        <div>
            <div className="hero min-h-screen bg-[url('https://i.ibb.co/RDDjrDp/Login-2.jpg')]">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <NavLink to="/register" >
                            <p className=''> login nai <button className='text-cyan-500' >Registe</button></p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login