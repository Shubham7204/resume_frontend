import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { DataContext } from "../../context/DataContext";
import CurrentPosition from "../../components/CurrentPosition";
import React from "react";

function PersonalDetail() {
  const navigate = useNavigate();
  const { data, updateData } = useContext(DataContext);

  const initialFormData = () => {
    const savedData = localStorage.getItem("personalDetail");
    if (savedData) {
      return JSON.parse(savedData);
    }
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      github: "",
      linkedin: "",
    };
  };

  const [formData, setFormData] = useState(
    data["personalDetail"] || initialFormData()
  );

  useEffect(() => {
    localStorage.setItem("personalDetail", JSON.stringify(formData));
  }, [formData]);

  const nextPage = () => {
    updateData("personalDetail", formData);
    navigate("/app/education");
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        <CurrentPosition value={"personal details"} />
        <div className="flex-1 p-8 dark:bg-gray-900">
          <h1 className="text-5xl text-center text-gray-800 dark:text-white mb-8">Personal Detail</h1>
          <div className="w-full max-w-4xl mx-auto">
            <PersonalDetailInput formData={formData} setFormData={setFormData} />
            <div className="flex justify-end mt-8">
              <button
                onClick={nextPage}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const PersonalDetailInput = ({ formData, setFormData }) => {
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        {[
          { label: "First Name", id: "first_name", name: "firstName", type: "text", placeholder: "John" },
          { label: "Last Name", id: "last_name", name: "lastName", type: "text", placeholder: "Doe" },
          { label: "Email Address", id: "email", name: "email", type: "email", placeholder: "john.doe@company.com" },
          { label: "Phone Number", id: "phone", name: "phoneNo", type: "tel", placeholder: "+91 012-345-6789" },
          { label: "GitHub URL", id: "github", name: "github", type: "url", placeholder: "github.com/id" },
          { label: "LinkedIn URL", id: "linkedin", name: "linkedin", type: "url", placeholder: "linkedin.com/id" }
        ].map(({ label, id, name, type, placeholder }) => (
          <div key={id} className="relative">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
              {label}
            </label>
            <input
              type={type}
              id={id}
              name={name}
              value={formData[name]}
              onChange={handleFormChange}
              className="block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
              placeholder={placeholder}
              required
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalDetail;
