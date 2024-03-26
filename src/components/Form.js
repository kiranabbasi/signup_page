// Form.js
import React, { useState } from 'react';
import signupImg from './signupImg.webp';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Globe } from './globe.svg'
import { ReactComponent as VisibleEye } from './visibleeye.svg'
import { ReactComponent as InvisibleEye } from './invisibleeye.svg'


const Form = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        agreeTerms: false
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: val });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="lg:flex lg:h-screen lg:w:screen" style={{ backgroundColor: 'rgb(25,25,25)', fontFamily: 'Tauri, sans-serif', '@media (min-width: 1024px)': { backgroundColor: 'white' , } }}>
            {/* Left half */}
            <div className="hidden lg:flex lg:bg-black lg:text-white lg:py-8 lg:justify-center lg:items-center lg:overflow-hidden lg:scroll-none" style={{ width: '45%', backgroundColor: 'rgb(25,25,25)' , '@media (min-width: 1024px)': { display: 'none' } }}>
                <div className="max-w-md">
                    <h1 className="text-3xl mb-10  text-center">Sign up <br /> and come on in</h1>
                    <img className="max-w-96 mb-8" src={signupImg} alt="Signup" />
                </div>
                <p className="absolute bottom-0 mb-10 text-center texl-xs font-sans">© Typeform</p>
            </div>

            {/* Right half */}
            <div className="w- bg-white  lg:rounded-l-2xl" style={{ width: '55%', color: 'rgb(25,25,25)', '@media (min-width: 1024px)': {width: '1024px' }}}>
                <div className="w-full">
                    <div className="m-4  flex justify-between items-center">
                        <button className="flex flex-row items-center my-2 w-24 h-1 gap-2 font-thin text-xs text-gray-600 hover:text-gray-400"><Globe /> English
                            <svg
                                className={`w-20 h-4`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <span className="flex flex-row items-center cursor-pointer text-sm font-normal font-sans text-center gap-2 text-gray-700"><p>Already have an account?</p> 
                        <a className="cursor-pointer text-xs font-medium font-sans text-center py-1 px-4 text-black border border-gray-700 rounded-md hover:text-gray-500 ">Log in</a></span>
                    </div>
                    <div className="flex  justify-center  items-center ">
                        <div className='max-w-lg  flex items-center justify-center flex-col mt-16'>
                            <div className='flex items-center justify-center flex-row w-96 mb-10 gap-x-3 '>
                                <span className='w-10'><Logo /> </span>
                                <h1 className='text-xl font-bold' style={{ fontFamily: 'Tauri, sans-serif' }}>Typeform </h1>
                            </div>
                            <h2 className='text-2xl font-sans font- text-gray-600 text-center mb-4'>Get better data with conversational forms, surveys, quizzes & more.</h2>
                            <form className='mb-4 max-w-64'>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="w-full px-3 py-2 border rounded-md hover:border-zinc-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4 relative">
                                    <div className="mb-4 relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            placeholder="Password"
                                            className="w-full px-3 py-2 border rounded-md pr-10 hover:border-zinc-400"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute inset-y-0 inset-x-56  w-4"

                                        >
                                            {showPassword ? <InvisibleEye /> : <VisibleEye />}
                                        </button>
                                    </div>

                                </div>

                                <div className="mb-4">
                                    <label className="flex flex-row justify-start items-start">
                                        <input
                                            type="checkbox"
                                            class="accent-black size-12 mb-10 rounded checked border-black justify-start items-start place-self-start"

                                        />
                                        <span className="ml-2 text-sm font-sans">
                                            I agree to Typeform’s <a href="#" className='underline'>Terms of Service</a>, <a href="#" className='underline'>Privacy Policy</a> and <a href="#" className='underline'
                                            >Data Processing Agreement</a>.
                                        </span>
                                    </label>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-sm ">See Options</h2>
                                    <button
                                        className="text-gray-600 focus:outline-none"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <svg
                                            className={`w-4 h-4`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full text-white py-2 px-4 rounded hover:bg-blue-600" style={{ backgroundColor: 'rgb(25,25,25)' }}
                                        disabled={!formData.agreeTerms}
                                    >
                                        Create my free account
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
