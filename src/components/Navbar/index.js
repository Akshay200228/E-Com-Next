"use client"

import { GlobalContext } from "@/context";
import { adminNavOptions, navOptions } from "@/utils";
import { Fragment, useContext } from "react";
import CommonModal from "../CommonModal";

const isAdminView = false;
const isAuthUser = true;
const user = {
    role: 'admin'
}

const NavItems = ({ isModalView = false }) => {
    return (
        <div
            className={`items-center justify-between w-full md:flex md:w-auto ${isModalView ? "" : "hidden"}`}
            id="nav-items"
        >
            <ul
                className={`flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ${isModalView ? "border-none" : "border border-gray-100"
                    }`}
            >
                {
                    isAdminView ? adminNavOptions.map(item => (
                        <li
                            key={item.id}
                            className="block py-2 pl-3 pr-4 text-gray-900 rounded cursor-pointer md:p-0"
                        >
                            {item.label}
                        </li>
                    )) : navOptions.map(item => (
                        <li
                            key={item.id}
                            className="block py-2 pl-3 pr-4 text-gray-900 rounded cursor-pointer md:p-0"
                        >
                            {item.label}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default function Navbar() {
    const { showNavModel, setShowNavModel } = useContext(GlobalContext);

    return <>
        <nav className="fixed top-0 left-0 z-20 w-full bg-white border-b border-gray-200">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <div className="flex items-center cursor-pointer">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">E-Com</span>
                </div>
                <div className="flex gap-2 md:order-2">
                    {
                        !isAdminView && isAuthUser ?
                            <Fragment>
                                {/* Acc btn */}
                                <button
                                    className={
                                        "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                                    }
                                >
                                    Accout
                                </button>
                                {/* Cart btn */}
                                <button
                                    className={
                                        "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                                    }
                                >
                                    Cart
                                </button>
                            </Fragment> : null
                    }

                    {
                        user?.role === 'admin' ?
                            isAdminView ?
                                <button
                                    className={
                                        "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                                    }
                                >
                                    Client View
                                </button> :
                                <button
                                    className={
                                        "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                                    }
                                >
                                    Admin View
                                </button>
                            : null
                    }

                    {
                        isAuthUser ?
                            <button
                                className={
                                    "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                                }
                            >
                                LogOut
                            </button> :
                            <button
                                className={
                                    "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                                }
                            >
                                LogIn
                            </button>
                    }

                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                        onClick={() => setShowNavModel(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <NavItems />
            </div>
        </nav>
        <CommonModal
            showModalTitle={false}
            mainContent={<NavItems isModalView={true} />}
            show={showNavModel}
            setShow={setShowNavModel}
        />
    </>
}
