import React from 'react';
import logo from '../../assets/logo.png';
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = ({ links }) => {
    return (
        <div className="navbar">
            <div className='container flex justify-between mx-auto items-center py-3'>
                <div className="flex items-center justify-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <RiMenu2Fill size={30} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg font-medium">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img className='w-10 h-10 hidden lg:block' src={logo} alt="" />
                        <h1 className='font-extrabold text-3xl'>DocTalk</h1>
                    </div>
                </div>
                <div className=" hidden lg:flex">
                    <ul className='flex gap-4 text-lg font-medium'>
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="">
                    <button className='btn rounded-full py-[20px] px-[25px] bg-[#176AE5] text-xl font-semibold text-white'>Emergency</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;