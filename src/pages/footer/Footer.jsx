import React from 'react'

function Footer() {
    return (
        <footer className="footer  p-10 bg-yellow-400 mt-16  text-white-content">

            <nav className='text-white'>
                <header className="footer-title text-pink-700 ">Services</header>
                <a className="link link-hover">Foot ball</a>
                <a className="link link-hover">Basket ball</a>
                <a className="link link-hover">Volley ball</a>
                <a className="link link-hover">Cricket ball</a>
            </nav>
            <nav className='text-white'>
                <header className="footer-title text-pink-700">Information</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <form className='text-white' >
                <header className="footer-title text-pink-700">Join Our Service Center</header>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-white">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none"></button>
                    </div>
                </fieldset>
            </form>
        </footer>
    )
}

export default Footer