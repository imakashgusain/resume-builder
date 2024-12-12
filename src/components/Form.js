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
        </div>
      )}
      {step === 2 && (
        <div>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
        </div>
      )}
      {step === 3 && (
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
      {step === 4 && (
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
      {step === 5 && (
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
      {step === 6 && (
        <div>
          <label>
            Project Details:
            <textarea
              name="projects"
              value={formData.projects}
              onChange={handleChange}
            />
          </label>
        </div>
      )}
      {step === 7 && (
        <div>
          <label>
            Certificates:
            <textarea
              name="certificates"
              value={formData.certificates}
              onChange={handleChange}
            />
          </label>
        </div>
      )}
      <div>
        {step > 1 && (
          <button type="button" onClick={onBack}>
            Back
          </button>
        )}
        {step < 7 ? (
          <button type="submit">Next</button>
        ) : (
          <button type="submit">Generate Resume</button>
        )}
      </div>
    </form>
  );
}
