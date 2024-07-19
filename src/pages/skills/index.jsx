import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar';
import { DataContext } from '../../context/DataContext';
import CurrentPosition from '../../components/CurrentPosition';

function Skills() {
  const navigation = useNavigate();
  const { data, updateData } = useContext(DataContext);
  
  const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem('skills');
    return savedData ? JSON.parse(savedData) : data.skills ?? [{ skillName: '', skillValue: '' }];
  };

  const [formData, setFormData] = useState(loadFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(formData));
  }, [formData]);

  const addInput = () => {
    const newSkill = { skillName: '', skillValue: '' };
    setFormData([...formData, newSkill]);
  };

  const finish = () => {
    updateData('skills', formData);
    navigation('/app/review');
  };

  return (
    <>
      <Navbar />
      <CurrentPosition value="tech stack" />
      <h1 className="text-5xl text-center text-white">Skills</h1>

      <div className="flex justify-end mx-[20%]">
        <button
          type="button"
          onClick={addInput}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Add Field
        </button>
      </div>

      <div className="md:text-2xl sm:text-lg text-center">
        <p>If you don't want this section you can delete it</p>
      </div>

      <div className="dark:bg-gray-900 py-[4%]">
        {formData.map((value, index) => (
          <div key={index}>
            <SkillsInput
              value={value}
              index={index}
              formData={formData}
              setFormData={setFormData}
            />
            <hr className="border border-gray-300 my-4 mx-[20%]" />
          </div>
        ))}
      </div>

      <div className="flex justify-between mx-[20%] mt-4">
        <button
          type="button"
          onClick={() => navigation(-1)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={finish}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Finish
        </button>
      </div>
    </>
  );
}

const SkillsInput = ({ value, formData, setFormData, index }) => {
  const handleFormChange = (index, event) => {
    const updatedFormData = [...formData];
    updatedFormData[index][event.target.name] = event.target.value;
    setFormData(updatedFormData);
  };

  const removeItem = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  return (
    <div className="xl:mx-[20%] md:mx-[10%] sm:mx-[4%]">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => removeItem(index)}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skill</label>
          <input
            type="text"
            name="skillName"
            placeholder="Skill name"
            value={value.skillName}
            onChange={(e) => handleFormChange(index, e)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skill Value</label>
          <input
            type="text"
            name="skillValue"
            placeholder="Skill value"
            value={value.skillValue}
            onChange={(e) => handleFormChange(index, e)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;