import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Homes = () => {
  return (
    <div className="dark:bg-gray-900 min-h-screen font-inter">
      <Navbar />
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h1 className="font-poppins text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="block mb-2">BUILD YOUR RESUME</span>
              <span className="block mb-2">IMPRESS EMPLOYERS</span>
              <span className="block">LAND THE JOB</span>
            </h1>
            <ul className="text-lg space-y-4 text-gray-700 dark:text-gray-300 mb-10">
              <li className="font-semibold">
                Create your resume in minutes
              </li>
              <li>
                User-friendly interface
              </li>
              <li>
                Professional template
              </li>
              <li>
                No sign-up required
              </li>
            </ul>
            <Link to="/app/personal-detail">
              <button className="font-poppins relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 transition-all duration-300">
                <span className="relative px-8 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Start Now
                </span>
              </button>
            </Link>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDF8ZCVO5k-t7ZbKAeBPrzWqCcyxldvxuZ-kmF9J7BhT-wRvxRenHBtY5iLORoBrkXKvuRL2wHJRJ3yiYx0GdbPtX_1T6QQL3uwf5QPEWae8y6X2nN3aI6JgJL4t-1gng9-AbiuQRA3RiChWP0yyhwo3AX2GYCbYK8OBEtCIGcvgKgxIQ2ucTWp9t_NdZp/w945-h600-p-k-no-nu/jakesresume.jpg"
                alt="Resume Template"
                className="w-full h-auto object-cover transition-all duration-300 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-poppins text-lg font-semibold">Ready-to-use Template</p>
                <p className="text-sm">Fill in your details and download</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;