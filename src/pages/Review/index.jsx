import { useState, useContext } from "react";
import Navbar from "../../components/Navbar";
import { DataContext } from "../../context/DataContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL_PROD } from "../../constants/constant";
import React from "react";

const Review = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="bg-white h-screen text-gray-900">
      <ToastContainer />
      <Navbar />
      <p className="text-2xl text-center">Review your Details</p>

      <div className="flex justify-between mx-[20%]">
        <DownloadModal data={data} />
      </div>

      <div className="xl:mx-[20%] md:mx-[10%] sm:mx-[4%] h-[90%]">
        <Section
          title="Personal Details"
          data={data["personalDetail"]}
          Component={PersonalDetailSection}
        />
        <Section
          title="Education"
          data={data["education"]}
          Component={EducationSection}
        />
        <Section
          title="Experience"
          data={data["experience"]}
          Component={ExperienceSection}
        />
        <Section
          title="Projects"
          data={data["projects"]}
          Component={ProjectSection}
        />
        <Section
          title="Achievement"
          data={data["achievements"]}
          Component={AchievementSection}
        />
        <Section
          title="Skills"
          data={data["skills"]}
          Component={SkillsSection}
        />

        <div className="h-20"></div>
      </div>
    </div>
  );
};

const Section = ({ title, data, Component }) => (
  <>
    <div className="text-gray-900">
      <h2 className="text-center text-2xl">{title}</h2>
      {data == null ? (
        <h2 className="text-center text-2xl">EMPTY</h2>
      ) : (
        <Component data={data} />
      )}
    </div>
    <hr className="border border-gray-300 my-4 " />
  </>
);

const DownloadModal = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pdfId, setPdfId] = useState("");

  const initiateProcess = async () => {
    try {
      const response = await axios.post(`${BASE_URL_PROD}/api/createpdf`, {
        data,
      });
      console.log(response.data);
      if (response?.data?.status === "failure") {
        toast(response?.data?.msg);
        return;
      }
      setPdfId(response?.data?.id);
      setIsOpen(true);
    } catch (error) {
      console.error("Error initiating PDF creation:", error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setPdfId("");
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={initiateProcess}
      >
        Download
      </button>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-sm w-full">
              <div className="bg-white px-4 py-5">
                <div className="mt-3 text-center sm:mt-5">
                  <div className="mt-2">
                    {isOpen && (
                      <a
                        href={`${BASE_URL_LOCAL}/api/getpdf?id=${pdfId}`}
                        download={`${pdfId}.pdf`}
                      >
                        <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          Download PDF
                        </button>
                      </a>
                    )}
                    <button
                      type="button"
                      className="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const PersonalDetailSection = ({ data }) => (
  <div className="bg-white my-2 p-4 rounded-md shadow-md">
    <div className="text-gray-900">
      <DetailItem label="First Name" value={data?.firstName} />
      <DetailItem label="Last Name" value={data?.lastName} />
      <DetailItem label="Email" value={data?.email} />
      <DetailItem label="Phone Number" value={data?.phoneNo} />
      <DetailItem label="Github" value={data?.github} />
      <DetailItem label="LinkedIn" value={data?.linkedin} />
    </div>
  </div>
);

const EducationSection = ({ data }) => (
  <>
    {data.map((val, index) => (
      <div className="bg-white my-2 p-4 rounded-md shadow-md" key={index}>
        <DetailItem label="College Name" value={val.cllgName} />
        <DetailItem label="Course" value={val.course} />
        <DetailItem label="Location" value={val.location} />
        <DetailItem label="Year" value={val.year} />
      </div>
    ))}
  </>
);

const ExperienceSection = ({ data }) => (
  <>
    {data.map((val, index) => (
      <div className="bg-white my-2 p-4 rounded-md shadow-md" key={index}>
        <DetailItem label="Company" value={val.company} />
        <DetailItem label="Role" value={val.role} />
        <DetailItem label="Location" value={val.location} />
        <DetailItem label="Date" value={val.date} />
        <DetailItem label="Points" value={val.points.join(", ")} />
      </div>
    ))}
  </>
);

const ProjectSection = ({ data }) => (
  <>
    {data.map((val, index) => (
      <div className="bg-white my-2 p-4 rounded-md shadow-md" key={index}>
        <DetailItem label="Project Name" value={val.projectName} />
        <DetailItem label="Course" value={val.tech} />
        <DetailItem label="Link" value={val.link} />
        <DetailItem label="Points" value={val.points.join(", ")} />
      </div>
    ))}
  </>
);

const AchievementSection = ({ data }) => (
  <>
    {data.map((val, index) => (
      <div className="bg-white my-2 p-4 rounded-md shadow-md" key={index}>
        <DetailItem label="Company" value={val.name} />
        <DetailItem label="Points" value={val.points.join(", ")} />
      </div>
    ))}
  </>
);

const SkillsSection = ({ data }) => (
  <>
    {data.map((val, index) => (
      <div className="bg-white my-2 p-4 rounded-md shadow-md" key={index}>
        <DetailItem label="Skill" value={val.skillName} />
        <DetailItem label="Skill Value" value={val.skillValue} />
      </div>
    ))}
  </>
);

const DetailItem = ({ label, value }) => (
  <div className="flex justify-between py-2">
    <span>{label}:</span>
    <span>{value}</span>
  </div>
);

export default Review;
