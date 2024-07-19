import { useState, useContext } from 'react';
import { useNavigate, Link, useLocation } from "react-router-dom";
import { DataContext } from '../context/DataContext';

const CurrentPosition = ({ value }) => {
  const pages = [
    { name: "Personal Details", path: "/app/personal-detail" },
    { name: "Education", path: "/app/education" },
    { name: "Experience", path: "/app/experience" },
    { name: "Projects", path: "/app/projects" },
    { name: "Achievements", path: "/app/achievement" },
    { name: "Tech stack", path: "/app/skills" }
  ];

  const { data, updateData, setDefault } = useContext(DataContext);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='flex flex-row justify-center font-bold space-x-4 my-3'>
      {pages.map((val, index) => (
        <p
          key={index}
          className={`cursor-pointer sm:text-md md:text-2xl px-4 py-2 rounded transition-all duration-300 ease-in-out
                      ${val.name.toLowerCase() === value?.toLowerCase() ? "text-blue-600 " : "text-gray-400 hover:text-blue-400 hover:bg-gray-100"}`}
          onClick={() => handleNavigation(val.path)}
        >
          {val.name}
        </p>
      ))}
    </div>
  );
};

export default CurrentPosition;
