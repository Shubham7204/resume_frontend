import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { DataContext } from '../context/DataContext';
import { ChevronLeft, ChevronRight, House, Briefcase, GraduationCap, Medal, Code } from 'lucide-react';

const CurrentPosition = ({ value }) => {
  const pages = [
    { name: "Personal Details", path: "/app/personal-detail", icon: House },
    { name: "Education", path: "/app/education", icon: GraduationCap },
    { name: "Experience", path: "/app/experience", icon: Briefcase },
    { name: "Achievements", path: "/app/achievement", icon: Medal },
    { name: "Tech stack", path: "/app/skills", icon: Code }
  ];

  const { data, updateData, setDefault } = useContext(DataContext);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`bg-white shadow-md rounded-md p-4 sticky top-0 h-screen transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-16'}`}>
      <div className="flex justify-between items-center mb-4">
        <button
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          ) : (
            <ChevronRight className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>
      <div className={`flex flex-col space-y-2 ${isSidebarOpen ? 'visible' : 'invisible'}`}>
        {pages.map((val, index) => (
          <div
            key={index}
            className={`cursor-pointer px-4 py-2 rounded transition-all duration-300 ease-in-out flex items-center space-x-4
                        ${val.name.toLowerCase() === value?.toLowerCase() ? "text-blue-600 font-bold" : "text-gray-400 hover:text-blue-400 hover:bg-gray-100"}`}
            onClick={() => handleNavigation(val.path)}
          >
            <val.icon className="h-6 w-6" />
            <p className={`${!isSidebarOpen ? 'hidden' : 'block'}`}>{val.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentPosition;
