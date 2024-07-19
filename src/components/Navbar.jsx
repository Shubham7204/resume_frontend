import { useContext } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { DataContext } from '../context/DataContext';

const Navbar = () => {
    const { setDefault } = useContext(DataContext);
    const navigate = useNavigate();

    const handleReset = () => {
        // Clear local storage
        localStorage.clear();
        // Reset context data
        setDefault();
        // Navigate to the home page or another appropriate page
        navigate('/');
    };

    return (
        <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
                <Link to={'/'} className="flex items-center">
                    <span className="text-2xl font-semibold text-gray-900 dark:text-white">Resume Builder</span>
                </Link>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col mt-4 space-y-2 md:flex-row md:space-y-0 md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link to={'/'} className="block py-2 px-4 text-gray-700 bg-gray-100 rounded md:bg-transparent md:text-gray-900 md:hover:text-blue-700 md:px-0 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 md:dark:bg-transparent md:dark:hover:text-blue-500">
                                Home
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleReset}
                                className="block w-full py-2 px-4 text-gray-700 bg-gray-100 rounded md:bg-transparent md:text-gray-900 md:hover:text-blue-700 md:px-0 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 md:dark:bg-transparent md:dark:hover:text-blue-500"
                            >
                                Reset
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
