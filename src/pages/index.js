import Form from "@/components/Form";
import Preview from "@/components/Preview";
import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    summary: "",
    education: "",
    projects: [],
    skills: "",
    interests: "",
  });
  const [step, setStep] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState("classic");

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
  const handleTemplateChange = (e) => setSelectedTemplate(e.target.value);

  return (
    <div>
      {step < 6 ? (
        <Form
          formData={formData}
          onFormDataChange={setFormData}
          onNext={handleNext}
          onBack={handleBack}
          step={step}
          selectedTemplate={selectedTemplate}
          onTemplateChange={handleTemplateChange}
        />
      ) : (
        <Preview formData={formData} selectedTemplate={selectedTemplate} />
      )}
    </div>
  );
}
