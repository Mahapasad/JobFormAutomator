"use client";
import React, { ChangeEvent } from "react";
import { usePersonalDataStore } from "@/app/store";

export default function LanguagesSection() {
  const { personalData, updatePersonalData } = usePersonalDataStore();

  const handleLanguageChange = (e: ChangeEvent<HTMLInputElement>) => {
    updatePersonalData("language", e.target.value);
  };

  return (
    <div className="mb-2">
      <div className="my-2">Languages</div>
      <input
        name="language"
        onChange={handleLanguageChange}
        type="text"
        placeholder="Separate languages by comma"
        value={personalData.language || ""}
      />
    </div>
  );
}
