import { useState } from "react";

export default function Form({ formData, onFormDataChange, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    onSubmit(formData); // Pass the form data to the parent (Home component)
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
        Education:
        <textarea
          name="education"
          value={formData.education}
          onChange={handleChange}
        />
      </label>
      <label>
        Experience:
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        />
      </label>
      <label>
        Skills:
        <textarea
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        />
      </label>
      <label>
        Interests:
        <textarea
          name="interests"
          value={formData.interests}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Generate Resume</button>
    </form>
  );
}
