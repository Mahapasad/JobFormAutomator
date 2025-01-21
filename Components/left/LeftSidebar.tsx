// src/components/DataStyleSelection/DataStyleSelection.tsx

"use client";
import React, { ChangeEvent, useState } from "react";

import {
  usePersonalDataStore,
  useProjectStore,
  useEducationStore,
} from "@/app/store";
import { GoPerson } from "react-icons/go";
import { PiCertificateLight } from "react-icons/pi";
import { GiGraduateCap } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { BsJournals } from "react-icons/bs";
import { GiAchievement } from "react-icons/gi";
import { LiaLanguageSolid } from "react-icons/lia";
export default function LeftSidebar() {
  const { personalData, updatePersonalData } = usePersonalDataStore();
  const { addProject, updateProject } = useProjectStore();
  const { addEducation, updateEducation } = useEducationStore();
  const [eduForm, seteduForm] = useState({
    name: "",
    details: "",
    startDate: "",
    endDate: "",
    cgpa: "",
  });
  const [editEdId, setEditEdId] = useState<string | null>(null);
  const [projectName, setProjectName] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [editPjId, setEditPjId] = useState<string | null>(null);

  // To Add Personal Data to the State
  const handleChangePersonal = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updatePersonalData(name, value); // Update other fields in the store
  };

  // To Add Project Data to the State
  const handleChangeProject = () => {
    if (editPjId) {
      updateProject(editPjId, projectName, projectDetails);
      setEditPjId(null);
    } else {
      addProject(projectName, projectDetails);
    }
    setProjectName("");
    setProjectDetails("");
  };

  // To Add Education Data to the State
  const handleEdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    seteduForm((preveduForm) => ({ ...preveduForm, [name]: value }));
  };

  const handleEdSubmit = () => {
    const { name, details, startDate, endDate, cgpa } = eduForm;
    if (editEdId) {
      updateEducation(editEdId, name, details, startDate, endDate, cgpa);
      setEditEdId(null);
    } else {
      addEducation(name, details, startDate, endDate, cgpa);
    }
    seteduForm({ name: "", details: "", startDate: "", endDate: "", cgpa: "" });
  };

  // To Add Work Data to the State

  // To Add Award & Achievement Data to the State
  return (
    <div className="w-full bg-black p-4">
      {/* Personal Details Area */}
      <div className="flex flex-row space-x-5">
        <span>
          <GoPerson color="grey" size={30} />
        </span>
        <span className="text-white text-2xl">Personal Details</span>
      </div>
      <div className="mb-2">
        <div className="my-2">
          <input
            name="name"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Your Name"
            value={personalData.name}
            className="rounded-md w-72 h-8 bg-gray-700 text-white"
          />
        </div>
        <div className="my-2">
          <input
            name="summary"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Your Summary"
            value={personalData.summary}
            className="rounded-md w-72 h-8 bg-gray-700 text-white"
          />
        </div>
        <div className="my-2">
          <input
            name="profile"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Work Profile"
            value={personalData.profile}
            className="rounded-md w-72 h-8 bg-gray-700 text-white"
          />
        </div>
        <div className="my-2">
          <input
            name="address"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Address"
            value={personalData.address}
            className="rounded-md w-72 h-8 bg-gray-700 text-white"
          />
        </div>
        <div className="my-2">
          <input
            name="phone"
            onChange={handleChangePersonal}
            type="tel"
            placeholder="Phone number"
            value={personalData.phone}
            className="rounded-md w-72 h-8 bg-gray-700 text-white"
          />
        </div>
        <div className="my-2">
          <input
            name="email"
            onChange={handleChangePersonal}
            type="email"
            placeholder="Email id"
            value={personalData.email}
            className="rounded-md w-72 h-8 bg-gray-700 text-white"
          />
        </div>
        <div>
          <div className="my-2">
            <input
              name="linkedin"
              onChange={handleChangePersonal}
              type="text"
              placeholder="Linkedin"
              value={personalData.linkedin}
              className="rounded-md w-72 h-8 bg-gray-700 text-white"
            />
          </div>
        </div>
        <div>
          <div className="my-2">
            <input
              name="github"
              onChange={handleChangePersonal}
              type="text"
              placeholder="Github"
              value={personalData.github}
              className="rounded-md w-72 h-8 bg-gray-700 text-white"
            />
          </div>
        </div>
      </div>

      {/* Skills Area */}
      {/* <div className="mb-2">
        <div className="text-lg font-medium my-2">Technical Skills</div>
        <div className="my-2">
          <input
            name="skill"
            onChange={handleInputChange}
            type="text"
            placeholder="Separate skills by comma"
            value={personalData.skill}
          />
        </div>
      </div> */}

      {/* Education Area */}
      <div className="mb-2">
        <div className="flex flex-row space-x-5">
          <span>
            <GiGraduateCap color="grey" size={30} />
          </span>
          <span className="text-white text-2xl">Education</span>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Institution Name"
            value={eduForm.name}
            onChange={handleEdChange}
            className="rounded-md w-72 h-8 mb-2"
          />
          <input
            type="text"
            name="details"
            placeholder="Details"
            value={eduForm.details}
            onChange={handleEdChange}
            className="rounded-md w-72 h-8 mb-2"
          />
          <span className="text-white">Start Date</span>
          <input
            type="date"
            name="startDate"
            placeholder="Start Date"
            value={eduForm.startDate}
            onChange={handleEdChange}
            className="rounded-md w-72 h-8 mb-2"
          />
          <span className="text-white">End Date</span>
          <input
            type="date"
            name="endDate"
            placeholder="End Date"
            value={eduForm.endDate}
            onChange={handleEdChange}
            className="rounded-md w-72 h-8 mb-2"
          />
          <input
            type="text"
            name="cgpa"
            placeholder="CGPA"
            value={eduForm.cgpa}
            onChange={handleEdChange}
            className="rounded-md w-72 h-8 mb-2"
          />
        </div>
        <button onClick={handleEdSubmit}>
          {editEdId ? "Update Education" : "Add Education"}
        </button>
      </div>

      {/* Projects Area */}
      <div id="eduForm-projects" className="mb-2">
        <div className="flex flex-row space-x-5">
          <span>
            <BsJournals color="grey" size={30} />
          </span>
          <span className="text-white text-2xl">Projects</span>
        </div>
        <div className="my-2 flex flex-col">
          <input
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="rounded-md w-72 h-8 mb-2"
          />
          <textarea
            placeholder="Project Details"
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
            className="rounded-md w-72 h-16 mb-2"
          />
        </div>
        <button onClick={handleChangeProject}>
          {editPjId ? "Update Project" : "Add Project"}
        </button>
      </div>

      {/* Work Experience Area */}
      <div id="eduForm-work" className="mb-2">
        <div className="flex flex-row space-x-5">
          <span>
            <MdWork color="grey" size={30} />
          </span>
          <span className="text-white text-2xl">Work Experience</span>
        </div>
        <div className="my-2 flex flex-col">
          <input
            type="text"
            placeholder="Company Name"
            className="rounded-md w-72 h-8 mb-2"
          />
          <input
            type="text"
            placeholder="Role"
            className="rounded-md w-72 h-8 mb-2"
          />
          <span className="text-white">Start Date</span>
          <input
            type="date"
            name="startDate"
            placeholder="Start Date"
            className="rounded-md w-72 h-8 mb-2"
          />
          <span className="text-white">End Date</span>
          <input
            type="date"
            name="endDate"
            placeholder="End Date"
            className="rounded-md w-72 h-8 mb-2"
          />
          <textarea
            placeholder="mention details comma separated"
            className="rounded-md w-72 h-16 mb-2"
          />
        </div>
      </div>

      {/* Awards & Achievement */}
      <div id="eduForm-awards" className="mb-2">
        <div className="flex flex-row space-x-5">
          <span>
            <GiAchievement color="grey" size={30} />
          </span>
          <span className="text-white text-2xl">Achievements</span>
        </div>
        <div className="my-2 flex flex-col">
          <input
            type="text"
            placeholder="Name of the achievement"
            className="rounded-md w-72 h-8 mb-2"
          />
          <input
            type="text"
            placeholder="Awarding Organisation"
            className="rounded-md w-72 h-8 mb-2"
          />
          <span className="text-white"> Date</span>
          <input
            type="date"
            name="startDate"
            placeholder="Date"
            className="rounded-md w-72 h-8 mb-2"
          />
        </div>
      </div>
      {/* Languages Area */}
      <div className="mb-2">
        <div className="flex flex-row space-x-5">
          <span>
            <LiaLanguageSolid color="grey" size={30} />
          </span>
          <span className="text-white text-2xl">Languages</span>
        </div>
        <div className="my-2 flex flex-col">
          <input
            type="text"
            placeholder="Name"
            className="rounded-md w-72 h-8 mb-2"
          />
          <input
            type="text"
            placeholder="Fluency Level"
            className="rounded-md w-72 h-8 mb-2"
          />
        </div>
        {/* Certificate Area */}
        <div id="eduForm-certificates" className="mb-2">
          <div className="flex flex-row space-x-5">
            <span>
              <PiCertificateLight color="grey" size={30} />
            </span>
            <span className="text-white text-2xl">Certificates</span>
          </div>
          <div className="my-2 flex flex-col">
            <input
              type="text"
              placeholder="Name of the Certificate"
              className="rounded-md w-72 h-8 mb-2"
            />
            <input
              type="text"
              placeholder="Awarding Organisation"
              className="rounded-md w-72 h-8 mb-2"
            />
            <span className="text-white"> Date</span>
            <input
              type="date"
              name="startDate"
              placeholder="Date"
              className="rounded-md w-72 h-8 mb-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
