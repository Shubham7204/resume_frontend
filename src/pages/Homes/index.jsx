import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const features = [
  {
    name: "Create Your Resume Quickly",
    description:
      "Build a professional resume in just a few minutes with our easy-to-use platform.",
    icon: "📄", // Replace with appropriate icons or SVGs
  },
  {
    name: "User-Friendly Interface",
    description:
      "Our intuitive interface ensures a seamless and hassle-free resume-building experience.",
    icon: "🖥️",
  },
  {
    name: "Professional Templates",
    description:
      "Choose from a variety of well-designed templates to make your resume stand out.",
    icon: "🖌️",
  },
  {
    name: "No Signup Required",
    description:
      "Start building your resume immediately without the need for any account or signup.",
    icon: "🚫",
  },
];

const Homes = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 min-h-screen font-inter">
      <Navbar />
      <main className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
                BUILD YOUR RESUME
              </span>
              <span className="block text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200 mt-2">
                IMPRESS EMPLOYERS
              </span>
              <span className="block text-2xl lg:text-3xl font-light text-gray-700 dark:text-gray-300 mt-2">
                LAND THE JOB
              </span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-400 mb-8">
              Create a standout resume that makes an impact. Our platform
              simplifies the process with modern templates and an easy-to-use
              interface.
            </p>
            <Link to="/app/personal-detail">
              <button className="bg-gradient-to-br from-indigo-500 to-blue-600 text-white text-xl font-medium rounded-lg px-8 py-4 transition-transform transform hover:scale-105">
                Start Now
              </button>
            </Link>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="relative p-6 bg-white rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800">{feature.name}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-16">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDF8ZCVO5k-t7ZbKAeBPrzWqCcyxldvxuZ-kmF9J7BhT-wRvxRenHBtY5iLORoBrkXKvuRL2wHJRJ3yiYx0GdbPtX_1T6QQL3uwf5QPEWae8y6X2nN3aI6JgJL4t-1gng9-AbiuQRA3RiChWP0yyhwo3AX2GYCbYK8OBEtCIGcvgKgxIQ2ucTWp9t_NdZp/w945-h600-p-k-no-nu/jakesresume.jpg"
              alt="Resume Template"
              className="w-full h-auto object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-lg font-semibold">Ready-to-use Template</p>
              <p className="text-sm">Fill in your details and download</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homes;