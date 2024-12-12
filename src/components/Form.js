export default function Form({
  formData,
  onFormDataChange,
  onNext,
  onBack,
  step,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData); // Pass the form data to the parent component
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormDataChange({
      ...formData,
      [name]: value,
    });
  };

  const handleAddProject = () => {
    onFormDataChange({
      ...formData,
      projects: [
        ...formData.projects,
        { projectName: "", projectDescription: "" },
      ],
    });
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = formData.projects.map((project, i) =>
      i === index ? { ...project, [field]: value } : project
    );
    onFormDataChange({ ...formData, projects: updatedProjects });
  };

  const handleRemoveProject = (index) => {
    const updatedProjects = formData.projects.filter((_, i) => i !== index);
    onFormDataChange({ ...formData, projects: updatedProjects });
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <label>
            Summary:
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
            />
          </label>
        </div>
      )}

      {step === 2 && (
        <div>
          <label>
            Education:
            <textarea
              name="education"
              value={formData.education}
              onChange={handleChange}
            />
          </label>
        </div>
      )}

      {step === 3 && (
        <div>
          <label>
            Work Experience:
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </label>
        </div>
      )}

      {step === 4 && (
        <div>
          <h4>Projects</h4>
          {formData.projects.map((project, index) => (
            <div key={index}>
              <label>
                Project Name:
                <input
                  type="text"
                  value={project.projectName}
                  onChange={(e) =>
                    handleProjectChange(index, "projectName", e.target.value)
                  }
                />
              </label>
              <label>
                Project Description:
                <textarea
                  value={project.projectDescription}
                  onChange={(e) =>
                    handleProjectChange(
                      index,
                      "projectDescription",
                      e.target.value
                    )
                  }
                />
              </label>
              <button type="button" onClick={() => handleRemoveProject(index)}>
                Remove Project
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddProject}>
            Add Project
          </button>
        </div>
      )}

      {step === 5 && (
        <div>
          <label>
            Skills:
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </label>
        </div>
      )}

      {step === 6 && (
        <div>
          <label>
            Interests:
            <textarea
              name="interests"
              value={formData.interests}
              onChange={handleChange}
            />
          </label>
        </div>
      )}

      <div>
        {step > 1 && step < 6 && (
          <button type="button" onClick={onBack}>
            Back
          </button>
        )}
        {step < 6 ? (
          <button type="submit">Next</button>
        ) : (
          <button type="submit">Generate Resume</button>
        )}
      </div>
    </form>
  );
}
