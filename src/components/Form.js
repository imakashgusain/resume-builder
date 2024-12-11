export default function Form({
  formData,
  onFormDataChange,
  onNext,
  onBack,
  step,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 6) {
      onNext(formData); // Pass the form data to the parent component and move to next step
    } else {
      // If it's the last step, just finalize the process (Generate Resume)
      onNext(formData);
    }
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
            Experience:
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </label>
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
        {step > 1 && (
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
