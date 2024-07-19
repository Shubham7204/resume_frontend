import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { DataContext } from "../../context/DataContext";
import CurrentPosition from "../../components/CurrentPosition";
import NextPrev from "../../components/nextprev";
import React from "react";

function Experience() {
  const navigate = useNavigate();
  const { data, updateData } = useContext(DataContext);

  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("experience")) ||
    data["experience"] || 
    [{ company: "", role: "", location: "", date: "", points: [""] }]
  );

  useEffect(() => {
    localStorage.setItem("experience", JSON.stringify(formData));
  }, [formData]);

  const addExperienceField = () => {
    const newExperience = {
      company: "",
      role: "",
      location: "",
      date: "",
      points: [""],
    };
    setFormData([...formData, newExperience]);
  };

  const nextPage = () => {
    updateData("experience", formData);
    navigate("/app/projects");
  };

  return (
    <>
      <Navbar />
      <CurrentPosition value={"experience"} />
      <h1 className="text-5xl text-center text-white my-6">Experience</h1>
      <div className="flex justify-end mx-[20%]">
        <button
          type="button"
          onClick={addExperienceField}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Add Field
        </button>
      </div>

      <div className="dark:bg-gray-900 py-[4%]">
        {formData.map((experience, index) => (
          <div key={index}>
            <ExperienceInput
              experience={experience}
              index={index}
              formData={formData}
              setFormData={setFormData}
            />
            <hr className="border border-gray-300 my-4 mx-[20%]" />
          </div>
        ))}
      </div>

      <NextPrev navigate={navigate} nextPage={nextPage} />

      <div className="md:text-2xl sm:text-lg text-center text-white mb-4">
        <p>If you don't want this section you can delete it</p>
      </div>
    </>
  );
}

const ExperienceInput = ({ experience, formData, setFormData, index }) => {
  const handleFormChange = (event) => {
    let updatedData = [...formData];
    updatedData[index][event.target.name] = event.target.value;
    setFormData(updatedData);
  };

  const handlePointChange = (event, pointIndex) => {
    let updatedData = [...formData];
    updatedData[index].points[pointIndex] = event.target.value;
    setFormData(updatedData);
  };

  const addPoint = () => {
    let updatedData = [...formData];
    updatedData[index].points = [...updatedData[index].points, ""];
    setFormData(updatedData);
  };

  const removeExperienceField = () => {
    let updatedData = [...formData];
    updatedData.splice(index, 1);
    setFormData(updatedData);
  };

  const removePoint = (pointIndex) => {
    let updatedData = [...formData];
    updatedData[index].points.splice(pointIndex, 1);
    setFormData(updatedData);
  };

  return (
    <div className="xl:mx-[20%] md:mx-[10%] sm:mx-[4%]">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={removeExperienceField}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Company
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={experience.company}
            onChange={handleFormChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Role
          </label>
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={experience.role}
            onChange={handleFormChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={experience.location}
            onChange={handleFormChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Date
          </label>
          <input
            type="text"
            name="date"
            placeholder="Date"
            value={experience.date}
            onChange={handleFormChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        {experience.points.map((point, pointIndex) => (
          <div className="flex flex-row space-x-5 w-full" key={pointIndex}>
            <div className="w-[90%]">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Point
              </label>
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
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add Point
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
