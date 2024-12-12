export const templates = {
  classic: {
    name: "Classic",
    render: (formData) => (
      <div>
        <h1>{formData.name}</h1>
        <p>{formData.address}</p>
        <p>{formData.phoneNumber}</p>
        <p>{formData.summary}</p>
        <h3>Education</h3>
        <p>{formData.education}</p>
        <h3>Projects</h3>
        {formData.projects?.map((project, index) => (
          <div key={index}>
            <strong>{project.projectName}</strong>: {project.projectDescription}
          </div>
        ))}
      </div>
    ),
  },
  modern: {
    name: "Modern",
    render: (formData) => (
      <div>
        <h1>{formData.name}</h1>
        <p>{formData.phoneNumber}</p>
        <p>{formData.summary}</p>
        <h3>Education</h3>
        <p>{formData.education}</p>
        <h3>Projects</h3>
        {formData.projects?.map((project, index) => (
          <div key={index}>
            <strong>{project.projectName}</strong>: {project.projectDescription}
          </div>
        ))}
      </div>
    ),
  },
};
