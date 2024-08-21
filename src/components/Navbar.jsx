import { useContext } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { DataContext } from '../context/DataContext';
import { FileCheck2 } from 'lucide-react';

const Navbar = () => {
  const { setDefault } = useContext(DataContext);
  const navigate = useNavigate();

  const handleReset = () => {
    localStorage.clear();
    setDefault();
    navigate('/');
  };

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <Link to={'/'} className="flex items-center">
          <FileCheck2 className="h-8 mr-3 text-gray-900 dark:text-white" />
          <span className="text-2xl font-semibold text-gray-900 dark:text-white">Resume Builder</span>
        </Link>
        <button
          onClick={handleReset}
          className="inline-flex items-center px-4 py-2 font-medium text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800"
        >
          <FileCheck2 className="h-5 w-5 mr-2 -ml-1" />
          Reset
        </button>
      </div>
    </nav>
  );
};

export default Navbar;