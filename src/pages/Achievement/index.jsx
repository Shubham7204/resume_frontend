import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar';
import { DataContext } from '../../context/DataContext';
import CurrentPosition from '../../components/CurrentPosition';

function Achievement() {
  const navigation = useNavigate();
  const { data, updateData } = useContext(DataContext);

  const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem('achievements');
    return savedData ? JSON.parse(savedData) : data.achievements ?? [{ name: '', points: [''] }];
  };

  const [formData, setFormData] = useState(loadFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('achievements', JSON.stringify(formData));
  }, [formData]);

  const addInput = () => {
    const newAchievement = { name: '', points: [''] };
    setFormData([...formData, newAchievement]);
  };

  const nextPage = () => {
    updateData('achievements', formData);
    navigation('/app/skills');
  };

  return (
    <>
      <Navbar />
      <CurrentPosition value="achievements" />
      <h1 className="text-5xl text-center text-white">Achievements</h1>

      <div className="flex justify-end mx-[20%] mt-6">
        <button
          type="button"
          onClick={addInput}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Add Field
        </button>
      </div>

      <div className="dark:bg-gray-900 py-[4%]">
        {formData.map((value, index) => (
          <div key={index}>
            <AchievementInput
              value={value}
              index={index}
              formData={formData}
              setFormData={setFormData}
            />
            <hr className="border border-gray-300 my-4 mx-[20%]" />
          </div>
        ))}
      </div>

      <div className="flex justify-between mx-[20%] mt-8">
        <button
          type="button"
          onClick={() => navigation(-1)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={nextPage}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Next
        </button>
      </div>

      <div className="md:text-2xl sm:text-lg text-center text-white mt-6">
        <p>If you don't want this section you can delete it</p>
      </div>
    </>
  );
}

const AchievementInput = ({ value, formData, setFormData, index }) => {
  const handleFormChange = (index, event) => {
    const updatedFormData = [...formData];
    updatedFormData[index][event.target.name] = event.target.value;
    setFormData(updatedFormData);
  };

  const handlePointChange = (event, pointIndex) => {
    const updatedFormData = [...formData];
    updatedFormData[index].points[pointIndex] = event.target.value;
    setFormData(updatedFormData);
  };

  const addPoint = () => {
    const updatedFormData = [...formData];
    updatedFormData[index].points.push('');
    setFormData(updatedFormData);
  };

  const removeItem = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  const removePoint = (pointIndex) => {
    const updatedFormData = [...formData];
    updatedFormData[index].points.splice(pointIndex, 1);
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
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Achievement</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={value.name}
            onChange={(e) => handleFormChange(index, e)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        {value.points.map((point, pointIndex) => (
          <div className="flex flex-row space-x-5 w-full" key={pointIndex}>
            <div className="w-[90%]">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Point</label>
              <input
                type="text"
                placeholder="Point"
                value={point}
                onChange={(e) => handlePointChange(e, pointIndex)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button
              type="button"
              onClick={() => removePoint(pointIndex)}
              className="focus:outline-none text-white mt-7 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 h-10 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Delete
            </button>
          </div>
        ))}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={addPoint}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add Point
          </button>
        </div>
      </div>
    </div>
  );
};

export default Achievement;