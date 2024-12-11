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

  const [step, setStep] = useState(1); // Start with the first step

  const handleFormDataChange = (newData) => {
    setFormData(newData); // Update form data with each step
  };

  const handleNext = (newData) => {
    setFormData(newData);
    setStep(step + 1); // Move to the next step
  };

  const handleGenerateResume = () => {
    console.log("Final Resume Data:", formData);
    // You can later implement the logic to generate a PDF here
  };

  return (
    <div>
      <h1>Resume Builder</h1>
      <Form
        formData={formData}
        onFormDataChange={handleFormDataChange}
        onNext={handleNext}
        step={step}
      />

      {step === 7 && <Preview formData={formData} />}

      {step === 7 && (
        <div>
          <button onClick={handleGenerateResume}>Generate Resume</button>
        </div>
      )}
    </div>
  );
}
