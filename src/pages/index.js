import { useState } from "react";
import Form from "../components/Form";
import Preview from "../components/Preview";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    education: "",
    experience: "",
    skills: "",
    interests: "",
  });

  const handleFormDataChange = (newData) => {
    setFormData(newData);
  };

  const handleFormSubmit = (newData) => {
    setFormData(newData); // Update form data when the form is submitted
  };

  return (
    <div>
      <h1>Resume Builder</h1>
      <Form
        formData={formData}
        onFormDataChange={handleFormDataChange}
        onSubmit={handleFormSubmit}
      />
      <Preview formData={formData} /> {/* Pass form data to Preview */}
    </div>
  );
}
