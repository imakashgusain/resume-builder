import React from "react";

export default function Form({
  formData,
  onFormDataChange,
  onNext,
  onBack,
  step,
  selectedTemplate,
  onTemplateChange,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFormDataChange({ ...formData, [name]: value });
  };

  return (
    <form>
      {step === 0 && (
        <div>
          <h3>Basic Details</h3>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <label>Summary:</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleInputChange}
          ></textarea>
          <label>Template:</label>
          <select value={selectedTemplate} onChange={onTemplateChange}>
            <option value="classic">Classic</option>
            <option value="modern">Modern</option>
            <option value="creative">Creative</option>
            <option value="minimalist">Minimalist</option>
            <option value="premium">Premium</option>
          </select>
        </div>
      )}
      {step === 1 && (
        <div>
          <h3>Education</h3>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleInputChange}
            placeholder="Enter your educational details"
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <h3>Work Experience</h3>
          <textarea
            name="workExperience"
            value={formData.workExperience}
            onChange={handleInputChange}
            placeholder="Enter your work experience details"
          />
        </div>
      )}
      {step === 3 && (
        <div>
          <h3>Projects</h3>
          {formData.projects.map((project, index) => (
            <div key={index}>
              <label>Project Name:</label>
              <input
                type="text"
                value={project.projectName}
                onChange={(e) =>
                  onFormDataChange({
                    ...formData,
                    projects: formData.projects.map((p, i) =>
                      i === index ? { ...p, projectName: e.target.value } : p
                    ),
                  })
                }
              />
              <label>Project Description:</label>
              <textarea
                value={project.projectDescription}
                onChange={(e) =>
                  onFormDataChange({
                    ...formData,
                    projects: formData.projects.map((p, i) =>
                      i === index
                        ? { ...p, projectDescription: e.target.value }
                        : p
                    ),
                  })
                }
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              onFormDataChange({
                ...formData,
                projects: [
                  ...formData.projects,
                  { projectName: "", projectDescription: "" },
                ],
              })
            }
          >
            Add Project
          </button>
        </div>
      )}
      {step === 4 && (
        <div>
          <h3>Skills</h3>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            placeholder="Enter your skills"
          />
        </div>
      )}
      {step === 5 && (
        <div>
          <h3>Interests</h3>
          <textarea
            name="interests"
            value={formData.interests}
            onChange={handleInputChange}
            placeholder="Enter your interests"
          />
        </div>
      )}
      <button type="button" onClick={onBack} disabled={step === 0}>
        Back
      </button>
      <button type="button" onClick={onNext}>
        {step === 5 ? "Preview" : "Next"}
      </button>
    </form>
  );
}
