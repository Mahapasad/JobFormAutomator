"use client";
import React, { ChangeEvent } from "react";
import { usePersonalDataStore } from "@/app/store";

export default function HobbiesSection() {
  const { personalData, updatePersonalData } = usePersonalDataStore();

  const handleHobbyChange = (e: ChangeEvent<HTMLInputElement>) => {
    updatePersonalData("hobbie", e.target.value);
  };

  return (
    <div className="mb-2">
      <div className="my-2">Hobbies</div>
      <input
        name="hobbie"
        onChange={handleHobbyChange}
        type="text"
        placeholder="Separate hobbies by comma"
        value={personalData.hobbie || ""}
      />
    </div>
  );
}
