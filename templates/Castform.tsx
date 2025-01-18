import React from 'react';
import AwardsA from './blocks/Awards/AwardsA';
import CertificationsA from './blocks/Certifications/CertificationsA';
import ContactC from './blocks/PersonalDetail/ContactC';
import EducationA from './blocks/Education/EducationA';
import HeadingD from './blocks/Heading/HeadingD';
import HobbiesA from './blocks/Hobbies/HobbiesA';
import LanguagesA from './blocks/Languages/LanguagesA';
import ObjectiveA from './blocks/Objective/ObjectiveA';
import ProjectsA from './blocks/Projects/ProjectsA';
import ReferencesA from './blocks/References/ReferencesA';
import SkillsA from './blocks/Skills/SkillsA';
import WorkA from './blocks/Work/WorkA';
import Image from 'next/image';


export default function Castform () {
 
  return (

      <div
        id="page"
        className="rounded"
        style={{
          fontFamily: data.metadata.font,
          color: data.metadata.colors.text,
          backgroundColor: data.metadata.colors.background,
        }}
      >
        <div className="grid grid-cols-12">
          <div
            className="col-span-4 py-8 pl-5 pr-8"
            style={{
              color: data.metadata.colors.background,
              backgroundColor: data.metadata.colors.primary,
            }}
          >
            <div className="grid gap-4">
              <Photo />
              <Profile />
              <div>
                <HeadingD>{data.profile.heading}</HeadingD>
                <ContactC />
              </div>

              {layout[0] &&
                layout[0].map((x, index) => {
                  const Component = Blocks[x];
                  if (!Component) {
                    console.error(`No component found for key: "${x}" in layout[0].`);
                    return null;
                  }
                  return <Component key={index} />;
                })}
            </div>
          </div>
          <div className="col-span-8 py-8 pl-5 pr-8">
            <div className="grid gap-4">
              {layout[1] &&
                layout[1].map((x, index) => {
                  const Component = Blocks[x];
                  if (!Component) {
                    console.error(`No component found for key: "${x}" in layout[1].`);
                    return null;
                  }
                  return <Component key={index} />;
                })}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Castform;
