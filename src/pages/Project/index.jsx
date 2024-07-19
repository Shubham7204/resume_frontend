import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { DataContext } from "../../context/DataContext";
import CurrentPosition from "../../components/CurrentPosition";

const Project = () => {
  const navigate = useNavigate();
  const { data, updateData } = useContext(DataContext);

  const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem("projects");
    return savedData ? JSON.parse(savedData) : data.projects ?? [{ projectName: "", tech: "", link: "", points: [""] }];
  };

  const [formData, setFormData] = useState(loadFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(formData));
  }, [formData]);

  const addField = () => {
    const newProject = { projectName: "", tech: "", link: "", points: [""] };
    setFormData([...formData, newProject]);
  };

  const nextPage = () => {
    updateData("projects", formData);
    navigate("/app/achievement");
  };

  const removeField = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  return (
    <>
      <Navbar />
      <CurrentPosition value="projects" />
      <h1 className="text-5xl text-center text-white">Projects</h1>

      <div className="flex justify-end mx-[20%] mt-6">
        <button
          type="button"
          onClick={addField}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Add Field
        </button>
      </div>

      <div className="dark:bg-gray-900 py-[4%]">
        {formData.map((project, index) => (
          <div key={index}>
            <ProjectInput
              project={project}
              index={index}
              formData={formData}
              setFormData={setFormData}
              removeField={removeField}
            />
            <hr className="border border-gray-300 my-4 mx-[20%]" />
          </div>
        ))}
      </div>

      <div className="flex justify-between mx-[20%] mt-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
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
};

const ProjectInput = ({ project, index, formData, setFormData, removeField }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormData = [...formData];
    updatedFormData[index][name] = value;
    setFormData(updatedFormData);
  };

  const handlePointChange = (event, pointIndex) => {
    const updatedFormData = [...formData];
    updatedFormData[index].points[pointIndex] = event.target.value;
    setFormData(updatedFormData);
  };

  const addPoint = () => {
    const updatedFormData = [...formData];
    updatedFormData[index].points.push("");
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
          onClick={() => removeField(index)}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Project Name
          </label>
          <input
            type="text"
            name="projectName"
            placeholder="Project Name"
            value={project.projectName}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tech
          </label>
          <input
            type="text"
            name="tech"
            placeholder="Tech Used"
            value={project.tech}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Link
          </label>
          <input
            type="text"
            name="link"
            placeholder="Link"
            value={project.link}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        {project.points.map((point, pointIndex) => (
          <div key={pointIndex} className="flex flex-row space-x-5 w-full">
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
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add Point
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;