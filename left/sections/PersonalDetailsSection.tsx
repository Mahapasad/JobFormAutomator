"use client";
import React, { ChangeEvent } from "react";
import { usePersonalDataStore } from "@/app/store";

export default function PersonalDetailsSection() {
  const { personalData, updatePersonalData } = usePersonalDataStore();

  const handleChangePersonal = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updatePersonalData(name, value);
  };

  return (
    <div className="mb-2">
      <input
        name="name"
        onChange={handleChangePersonal}
        type="text"
        placeholder="Your Name"
        value={personalData.name}
      />
      <input
        name="summary"
        onChange={handleChangePersonal}
        type="text"
        placeholder="Your Summary"
        value={personalData.summary}
      />
      {/* Add additional inputs for other personal details */}
    </div>
  );
}
