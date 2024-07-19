import React from 'react';

const NextPrev = ({ navigate, nextPage }) => {
  return (
    <div className='flex justify-between mx-[20%] my-4'>
      <button type="button" onClick={() => navigate(-1)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Previous
      </button>
      <button type="button" onClick={nextPage} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Next
      </button>
    </div>
  );
};

export default NextPrev;
