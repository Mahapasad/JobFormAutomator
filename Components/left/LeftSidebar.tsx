// src/components/DataStyleSelection/DataStyleSelection.tsx

"use client";
import React, { ChangeEvent, useState } from "react";
import { usePersonalDataStore } from "@/app/store";
import { GoPerson } from "react-icons/go";
import EducationInput from "./EducationInput";
// import ProjectInput from "./ProjectInput";
// import ExperienceInput from "./ExperienceInput";
// import CertificationInput from "./CertificationInput";
// import AchievementInput from "./AchievementInput";
// import LanguageInput from "./LanguageInput";
import { GiGraduateCap } from "react-icons/gi";

export default function LeftSidebar() {
  const { personalData, updatePersonalData } = usePersonalDataStore();
  // To Add Personal Data to the State
  const handleChangePersonal = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updatePersonalData(name, value); // Update other fields in the store
  };
  const [inputComponents, setInputComponents] = useState<number[]>([]); // Array to track instances

  const handleAddComponent = () => {
    setInputComponents((prev) => [...prev, prev.length + 1]); // Add a new instance
  };

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

      {/* Education Area */}
      <div className="mb-2">
      <div className="flex flex-row space-x-5">
        <span>
          <GiGraduateCap color="grey" size={30} />
        </span>
        <span className="text-white text-2xl">Education</span>
      </div>
      <button
        onClick={handleAddComponent}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Add Input Component
      </button>

      <div>
        {inputComponents.map((id) => (
          <EducationInput key={id} /> // Render each InputComponent with a unique key and id
        ))}
      </div>
        
        
      </div>

      {/* Projects Area */}

      {/* Work Experience Area */}

      {/* Awards & Achievement */}

      {/* Languages Area */}
    </div>
  );
}
