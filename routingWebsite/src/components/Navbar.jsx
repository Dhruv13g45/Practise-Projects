import React from 'react'
import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <>
            <div className='flex justify-evenly items-center h-10 shadow-xl py-10 font-semibold'>
                <div>
                    <NavLink to="/">
                        <h1 className='font-semibold text-3xl mx-5 text-blue-500'>TravelEra</h1>
                    </NavLink>
                </div>
                <nav className='w-full flex justify-evenly items-center h-10'>
                    <div>
                        <NavLink to="/"
                            className={({ isActive }) => `${isActive ? "text-blue-600" : "text-black"} duration-300`}>Home</NavLink>
                    </div>
                    <div>
                        <NavLink to="about"
                            className={({ isActive }) => `${isActive ? "text-blue-600" : "text-black"} duration-300`}
                        >About</NavLink>
                    </div>
                    <div>
                        <NavLink to="contact"
                            className={({ isActive }) => `${isActive ? "text-blue-600" : "text-black"} duration-300`}
                        >Contact</NavLink>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
