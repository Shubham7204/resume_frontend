import { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar';
import { DataContext } from '../../context/DataContext';
import CurrentPosition from '../../components/CurrentPosition';
import NextPrev from '../../components/nextprev';
import React from 'react';

function Education() {
  const navigate = useNavigate();
  const { data, updateData } = useContext(DataContext);

  const initialFormData = () => {
    const savedData = localStorage.getItem('educationData');
    return savedData ? JSON.parse(savedData) : (data['education'] == null ? [{ cllgName: '', course: '', location: '', year: '' }] : data['education']);
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    localStorage.setItem('educationData', JSON.stringify(formData));
  }, [formData]);

  const addInput = () => {
    const newData = { cllgName: '', course: '', location: '', year: '' };
    setFormData([...formData, newData]);
  };

  const nextPage = () => {
    updateData('education', formData);
    navigate('/app/experience');
  };

  return (
    <>
      <Navbar />
      <CurrentPosition value={"education"} />
      <h1 className='text-5xl text-center text-white'>Education</h1>
      <div className='flex justify-end mx-[20%]'>
        <button type="button" onClick={addInput} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Add Field
        </button>
      </div>
      <div className='md:text-2xl sm:text-lg text-center text-white mb-4'>
        <p>If you don't want this section you can delete it</p>
      </div>
      <div className='dark:bg-gray-900 py-[1%]'>
        {formData.map((value, index) => (
          <div key={index}>
            <EducationInput value={value} index={index} formData={formData} setFormData={setFormData} />
            <hr className="border border-gray-300 my-4 mx-[20%]" />
          </div>
        ))}
      </div>
      <NextPrev navigate={navigate} nextPage={nextPage} />
    </>
  );
}

const EducationInput = ({ value, formData, setFormData, index }) => {
  const handleFormChange = (index, event) => {
    let data = [...formData];
    data[index][event.target.name] = event.target.value;
    setFormData(data);
  };

  const removeItem = (index) => {
    let data = [...formData];
    data.splice(index, 1);
    setFormData(data);
  };

  return (
    <div className='xl:mx-[20%] md:mx-[10%] sm:mx-[4%]'>
      <div className='flex justify-end'>
        <button type="button" onClick={() => { removeItem(index) }} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          Delete
        </button>
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">College Name</label>
          <input type="text" value={value.cllgName} onChange={(e) => { handleFormChange(index, e) }} id="college_name" name="cllgName" placeholder='College Name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course</label>
          <input type="text" value={value.course} onChange={(e) => { handleFormChange(index, e) }} id="course" name="course" placeholder='B.Tech' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
          <input type="text" value={value.location} onChange={(e) => { handleFormChange(index, e) }} id="location" name="location" placeholder='Bangalore, India' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
          <input type="text" value={value.year} onChange={(e) => { handleFormChange(index, e) }} id="year" name="year" placeholder='2019 - 2023' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
      </div>
    </div>
  );
}

export default Education;
