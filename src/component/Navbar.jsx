import React from 'react';
import NavLink from './NavLink';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar sticky top-0 z-10 bg-slate-200 shadow-lg dark:bg-slate-900 lg:pr-3">
            <div className="flex-1">
                <Link href="/" className="btn-ghost btn text-2xl normal-case">
                    Easy Shop
                </Link>
            </div>
            <div
                className={`absolute  "left-0" : "left-[-120%]"
                    } top-[4.5rem] flex w-full flex-col bg-slate-200 pb-3 pt-2 transition-all duration-300 dark:bg-slate-900 lg:static lg:w-[unset] lg:flex-row lg:bg-transparent lg:pb-0 lg:pt-0 dark:lg:bg-transparent`}
            >
                <ul className="menu menu-horizontal flex-col px-1 lg:flex-row">
                    {[].map(({ path, title }) => (
                        <li key={path} className="mx-auto">
                            <NavLink
                                onClick={() => setNavToggle(false)}
                                href={path}
                                activeClassName="text-blue-500"
                                exact={path === "/"}
                            >
                                {title} 
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="dropdown-end dropdown lg:mr-2">
                    <label tabIndex={0} className="btn-ghost btn-circle btn">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {/* <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                /> */}
                            </svg>
                            {/* <span className="badge badge-sm indicator-item bg-primary text-white dark:text-gray-300">
                                {cart.length}
                            </span> */}
                        </div>
                    </label>
                    <div
                        tabIndex={0}
                        className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow"
                    >
                        <div className="card-body">
                            {/* <span className="text-lg font-bold">{cart.length} Items</span> */}
                            {/* <span className="text-info">Total: ${total.toFixed(2)}</span> */}
                            <div className="card-actions">
                                <Link href="/checkout" className="block w-full">
                                    <button className="btn-primary btn-block btn">
                                        View cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                { (
                    <div className="dropdown-end dropdown">
                        <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                            <div className="w-10 rounded-full">
                                <Image
                                    alt="user-logo"
                                    // title={displayName}
                                    // src={
                                    //     photoURL ||
                                    //     "https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
                                    // }
                                    width={40}
                                    height={40}
                                    className="h-10 w-10 rounded-full"
                                />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu-compact dropdown-content menu rounded-box mt-3 w-52 bg-base-100 p-2 shadow"
                        >
                            {/* <li className="mb-2 mt-1 text-center font-semibold">
                                {displayName}
                            </li> */}
                            <div className="divider my-0"></div>
                            <li className="mb-2">
                                <NavLink
                                    href="/profile"
                                    className="text-lg"
                                    activeClassName="text-blue-500"
                                >
                                    Profile
                                </NavLink>
                            </li>
                            <li className="">
                                {/* <button
                                    onClick={handleLogout}
                                    className="btn-warning btn content-center text-white"
                                >
                                    Logout
                                </button> */}
                            </li>
                        </ul>
                    </div>
                )}
                <label className="swap swap-rotate lg:ml-2">
                    {/* <input
                        onChange={toggleTheme}
                        type="checkbox"
                        checked={theme === "dark"}
                    /> */}
                    <svg
                        className="swap-on h-9 w-9 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                       
                    </svg>
                    <svg
                        className="swap-off h-9 w-9 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        
                    </svg>
                </label>
            </div>
            <label className="swap-rotate swap btn-ghost btn-circle btn ml-2 bg-white dark:bg-slate-800 lg:hidden">
                {/* <input
                    checked={navToggle}
                    onChange={() => setNavToggle((pre) => !pre)}
                    type="checkbox"
                /> */}
                <svg
                    className="swap-off fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
                <svg
                    className="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
            </label>
        </nav>
    );
};

export default Navbar;