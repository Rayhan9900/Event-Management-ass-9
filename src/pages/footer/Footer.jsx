import React from 'react'

function Footer() {
    return (
        <footer className="footer  p-10 bg-orange-500-400 mt-16  text-white-content">
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Foot ball</a>
                <a className="link link-hover">Basket ball</a>
                <a className="link link-hover">Volley ball</a>
                <a className="link link-hover">Cricket ball</a>
            </nav>
            <nav>
                <header className="footer-title">Information</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <form>
                <header className="footer-title">Join Our Service Center</header>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
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