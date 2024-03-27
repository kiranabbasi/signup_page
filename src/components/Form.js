import React, { useState } from 'react';
import signupImg from './signupImg.webp';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Globe } from './globe.svg';
import { ReactComponent as VisibleEye } from './visibleeye.svg';
import { ReactComponent as InvisibleEye } from './invisibleeye.svg';
import PrivacySection from './PrivacyTerms.js';
import { useTranslation } from 'react-i18next';

const Form = () => {
    const { t, i18n } = useTranslation("global");

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        agreeTerms: false
    });

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        setIsOpen(false);
    };

    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: val });
        setErrors({ ...errors, [name]: '' }); // Clear error when input changes
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = t('errors.emailRequired');
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('errors.invalidEmail');
        }
        if (!formData.password.trim()) {
            newErrors.password = t('errors.passwordRequired');
        } else if (formData.password.length < 8) {
            newErrors.password = t('errors.passwordLength');
        }
        if (!formData.agreeTerms) {
            newErrors.agreeTerms = t('errors.agreeTerms');
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // Form submission logic
            console.log('Form submitted:', formData);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="lg:flex lg:h-screen lg:w:screen lg:bg-gray-800  static  lg:relative" style={{ fontFamily: 'Tauri, sans-serif' }}>
            {/* Left half */}
            <div className="hidden lg:flex lg:bg-black lg:text-white lg:py-8 lg:justify-center lg:items-center lg:overflow-hidden lg:scroll-none" style={{ width: '45%', backgroundColor: 'rgb(25,25,25)' }}>
                <div className="max-w-md">
                    <h1 className="text-3xl mb-10  text-center">{t('signup.title1')} <br /> {t('signup.title2')}</h1>
                    <img className="max-w-96 mb-8" src={signupImg} alt="Signup" />
                </div>
                <p className="absolute bottom-0 mb-10 text-center texl-xs font-sans">©Typeform</p>
            </div>

            {/* Right half */}
            <div className="w-full bg-white  lg:rounded-l-2xl mx-auto lg:mx-0 " style={{ width: '55%', color: 'rgb(25,25,25)', '@media (min-width: 1024px)': { width: '1024px' } }}>

                <div className="m-4   flex justify-between items-center lg:static absolute inset-x-0">
                    <div className='relative'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}

                            className="flex flex-row items-center my-2 w-24 h-1 gap-2 font-thin text-xs text-gray-600 hover:text-gray-400">
                            <Globe /> {selectedLanguage}
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
                        {isOpen && (
                            <div className="absolute z-10 top-8 left-0 m-2 py-4 w-full bg-white shadow-3xl rounded-md">
                                <button
                                    onClick={() => handleLanguageChange('en')}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                >
                                    English
                                </button>
                                <button
                                    onClick={() => handleLanguageChange('es')}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                >
                                    Español
                                </button>
                            </div>
                        )}
                    </div>
                    <span className="flex flex-row items-center cursor-pointer text-sm font-normal font-sans text-center gap-2 text-gray-700"><p>{t('signup.confirm')}</p>
                        <a className="cursor-pointer text-xs font-medium font-sans text-center py-1 px-4 text-black border border-gray-700 rounded-md hover:text-gray-500 ">{t('buttons.logIn')}</a></span>
                </div>
                <div className="flex  justify-center  items-center ">
                    <div className='max-w-lg  flex items-center justify-center flex-col mt-16'>
                        <div className='flex items-center justify-center flex-row w-96 sm:mb-10 mt-10 mb-6 sm:mt-0  gap-x-3 '>
                            <span className='w-10'><Logo /> </span>
                            <h1 className='text-xl font-bold ' style={{ fontFamily: 'Tauri, sans-serif' }}>Typeform</h1>
                        </div>
                        <h2 className='text-2xl font-sans text-gray-500 text-center mb-4 sm:h-16 h-28 w-72 sm:w-full '>{t('signup.description')}</h2>
                        <form onSubmit={handleSubmit} className='mb-4 max-w-64'>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t('signup.emailPlaceholder')}
                                    className="w-full px-3 py-2 border rounded-md placeholder-gray-300 hover:border-zinc-500"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="text-red-600 text-xs my-2 font-sans">{errors.email}</p>}
                            </div>
                            <div className="mb-4 relative">
                                <div className="mb-4 relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder={t('signup.passwordPlaceholder')}
                                        className="w-full px-3 py-2 border rounded-md pr-10 placeholder-gray-300 text-sm hover:border-zinc-400"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 inset-x-56  w-4 ">
                                        {showPassword ? <InvisibleEye /> : <VisibleEye />}
                                    </button>
                                    {errors.password && <p className="text-red-600 font-sans text-xs mb-2">{errors.password}</p>}
                                </div>
                                <label className="flex flex-row">
                                    <input
                                        type="checkbox"
                                        name="agreeTerms"
                                        checked={formData.agreeTerms}
                                        onChange={handleChange}
                                        className="accent-black w-12 h-6 rounded-md border-black hover:outline outline-2 outline-offset-1 outline-gray-400 outline-rounded-md"
                                    />
                                    <span className="ml-2 text-sm font-sans">
                                    {t('signup.terms1')}<a href="#" className="underline">{t('signup.terms2')}</a>, <a href="#" className="underline">{t('signup.terms3')}</a> {t('signup.terms4')}<a href="#" className="underline">{t('signup.terms5')}</a>.
                                    </span>
                                </label>
                                {errors.agreeTerms && <p className="text-red-500 text-xs my-4">{errors.agreeTerms}</p>}
                                <PrivacySection />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full text-white py-2 px-4 rounded hover:bg-blue-600" style={{ backgroundColor: 'rgb(25,25,25)' }}
                                    disabled={!formData.agreeTerms}
                                >
                                    {t('signup.createAccount')}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Form;
