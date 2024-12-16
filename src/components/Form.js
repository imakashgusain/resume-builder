import React from "react";
import "../styles/form.css";
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
    <form className="form-container">
      {step === 0 && (
        <div className="form-section">
          <h3>Basic Details</h3>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-group">
            <label>Summary:</label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleInputChange}
              placeholder="Write a brief summary"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Template:</label>
            <select value={selectedTemplate} onChange={onTemplateChange}>
              <option value="classic">Classic</option>
              <option value="modern">Modern</option>
              <option value="creative">Creative</option>
              <option value="minimalist">Minimalist</option>
              <option value="premium">Premium</option>
            </select>
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="form-section">
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
        <div className="form-section">
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
        <div className="form-section">
          <h3>Projects</h3>
          {formData.projects.map((project, index) => (
            <div key={index} className="project-group">
              <div className="form-group">
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
                  placeholder="Enter project name"
                />
              </div>
              <div className="form-group">
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
                  placeholder="Enter project description"
                ></textarea>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="add-button"
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
        <div className="form-section">
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
        <div className="form-section">
          <h3>Interests</h3>
          <textarea
            name="interests"
            value={formData.interests}
            onChange={handleInputChange}
            placeholder="Enter your interests"
          />
        </div>
      )}
      <div className="form-navigation">
        <button
          type="button"
          onClick={onBack}
          disabled={step === 0}
          className="nav-button"
        >
          Back
        </button>
        <button type="button" onClick={onNext} className="nav-button">
          {step === 5 ? "Preview" : "Next"}
        </button>
      </div>
    </form>
  );
}
