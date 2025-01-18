
export default function LeftSidebar() {
  const { personalData, updatePersonalData } = usePersonalDataStore();
  const { addProject, updateProject } = useProjectStore();
  const { addEducation, updateEducation } = useEducationStore();
  const [eduForm, seteduForm] = useState({
    name: '',
    details: '',
    startDate: '',
    endDate: '',
    cgpa: '',
  });
  const [editEdId, setEditEdId] = useState<string | null>(null);
  const [projectName, setProjectName] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [editPjId, setEditPjId] = useState<string | null>(null);
  const [eduSections, setEduSections] = useState([{ id: 1 }]);
  const [projectSections, setProjectSections] = useState([{ id: 1 }]);
  const [workSections, setWorkSections] = useState([{ id: 1 }]);
  

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
      seteduForm({ name: '', details: '', startDate: '', endDate: '', cgpa: '' });
    };

    const addNewEduSection = () => {
      setEduSections([...eduSections, { id: eduSections.length + 1 }]);
    };
  
    const addNewProjectSection = () => {
      setProjectSections([...projectSections, { id: projectSections.length + 1 }]);
    };
  
    const addNewWorkSection = () => {
      setWorkSections([...workSections, { id: workSections.length + 1 }]);
    };

  // To Add Work Data to the State

  // To Add Award & Achievement Data to the State
  return (
    <div className="w-1/5 mx-2">
      {/* Personal Details Area */}
      <div className="mb-2">
        <div className="my-2">
          <input
            name="name"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Your Name"
            value={personalData.name}
          />
        </div>
        <div className="my-2">
          <input
            name="summary"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Your Summary"
            value={personalData.summary}
          />
        </div>
        <div className="my-2">
          <input
            name="profile"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Work Profile"
            value={personalData.profile}
          />
        </div>
        <div className="my-2">
          <input
            name="address"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Address"
            value={personalData.address}
          />
        </div>
        <div className="my-2">
          <input
            name="phone"
            onChange={handleChangePersonal}
            type="tel"
            placeholder="Phone number"
            value={personalData.phone}
          />
        </div>
        <div className="my-2">
          <input
            name="email"
            onChange={handleChangePersonal}
            type="email"
            placeholder="Email id"
            value={personalData.email}
          />
        </div>
        <div>
          <h4>Linkedin</h4>
          <div className="my-2">
            <input
              name="linkedin"
              onChange={handleChangePersonal}
              type="text"
              placeholder="Linkedin"
              value={personalData.linkedin}
            />
          </div>
        </div>
        <div>
          <h4>Github</h4>
          <div className="my-2">
            <input
              name="github"
              onChange={handleChangePersonal}
              type="text"
              placeholder="Github"
              value={personalData.github}
            />
          </div>
        </div>
      </div>

      {/* Skills Area */}
      <div className="mb-2">
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
      </div>

      {/* Education Area */}
      <div id="eduForm-education" className="mb-2">
        <h4>Education</h4>
        {eduSections.map((edu) => (
          <div key={edu.id} className="my-2 border p-2 rounded">
            <input
              type="text"
              name={`eduName-${edu.id}`}
              placeholder="Institution Name"
              onChange={(e) => console.log(e.target.value)}
            />
            <input
              type="text"
              name={`eduDetails-${edu.id}`}
              placeholder="Details"
              onChange={(e) => console.log(e.target.value)}
            />
            <input
              type="date"
              name={`eduStart-${edu.id}`}
              placeholder="Start Date"
              onChange={(e) => console.log(e.target.value)}
            />
            <input
              type="date"
              name={`eduEnd-${edu.id}`}
              placeholder="End Date"
              onChange={(e) => console.log(e.target.value)}
            />
            <input
              type="text"
              name={`eduCGPA-${edu.id}`}
              placeholder="CGPA"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        ))}
        <button onClick={addNewEduSection} className="my-3 w-full bg-blue-500 text-white p-2 rounded">
          Add Education
        </button>
      </div>

      {/* Projects Area */}
      <div id="eduForm-projects" className="mb-2">
        <h4>Projects</h4>
        {projectSections.map((project) => (
          <div key={project.id} className="my-2 border p-2 rounded">
            <input
              type="text"
              name={`projectName-${project.id}`}
              placeholder="Project Name"
              onChange={(e) => console.log(e.target.value)}
            />
            <textarea
              name={`projectDetails-${project.id}`}
              placeholder="Project Details"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        ))}
        <button onClick={addNewProjectSection} className="my-3 w-full bg-blue-500 text-white p-2 rounded">
          Add Project
        </button>
      </div>

      {/* Work Experience Area */}
      <div id="eduForm-work" className="mb-2">
        <h4>Work Experience</h4>
        {workSections.map((work) => (
          <div key={work.id} className="my-2 border p-2 rounded">
            <input
              type="text"
              name={`workRole-${work.id}`}
              placeholder="Role"
              onChange={(e) => console.log(e.target.value)}
            />
            <input
              type="text"
              name={`workCompany-${work.id}`}
              placeholder="Company"
              onChange={(e) => console.log(e.target.value)}
            />
            <input
              type="text"
              name={`workDuration-${work.id}`}
              placeholder="Duration"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        ))}
        <button onClick={addNewWorkSection} className="my-3 w-full bg-blue-500 text-white p-2 rounded">
          Add Work Experience
        </button>
      </div>

      {/* Awards & Achievement */}
      <div id="eduForm-awards" className="mb-2">
        <div className="d-flex align-items-center justify-content-between">
          <div className="my-2">Awards & Achievement</div>
        </div>
        <hr />
        <div className="my-2">
          <textarea
            name="awards"
            onChange={handleChangeAwards}
            placeholder="Use comma to separate Achievement"
            value={awardData.awards}
          />
        </div>
      </div>

      {/* Hobbies Area */}
      <div id="eduForm-hobbies" className="mb-2">
        <div className="d-flex align-items-center justify-content-between">
          <div className="my-2">Hobbies</div>
        </div>

        <div className="my-2">
          <input
            name="hobbie"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Separate hobbies by comma"
            value={personalData.hobbie}
          />
        </div>
      </div>

      {/* Languages Area */}
      <div id="eduForm-languages" className="mb-2">


        {/* Certificate Area */}
        <div id="eduForm-certificates" className="mb-2">
          <div className="d-flex align-items-center justify-content-between">
            <div className="my-2">Certificate</div>
          </div>
          <button onClick={handleCertificatesClick} className="my-3 w-100">
            Add Certificate
          </button>
          {certificateCount > 0 &&
            CertificatesArrTemplate.map((element) => (
              <div key={element.key}>{element}</div>
            ))}
        </div>
      </div>
    </div>
  );
}