import { useState } from "react";
import { jsPDF } from "jspdf";
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

  const handleBack = () => {
    setStep(step - 1); // Move to the previous step
  };

  const handleGenerateResume = () => {
    console.log("Final Resume Data:", formData);
    // You can later implement the logic to generate a PDF here
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "normal");

    doc.text("Resume", 14, 20);
    doc.text(`Name: ${formData.name}`, 14, 30);
    doc.text(`Address: ${formData.address}`, 14, 40);
    doc.text(`Education: ${formData.education}`, 14, 50);
    doc.text(`Experience: ${formData.experience}`, 14, 60);
    doc.text(`Skills: ${formData.skills}`, 14, 70);
    doc.text(`Interests: ${formData.interests}`, 14, 80);

    // Save the generated PDF
    doc.save(`${formData.name}_Resume.pdf`);
  };

  return (
    <div>
      <h1>Resume Builder</h1>
      <Form
        formData={formData}
        onFormDataChange={handleFormDataChange}
        onNext={handleNext}
        onBack={handleBack}
        step={step}
      />

      {step === 7 && <Preview formData={formData} />}

      {step === 7 && (
        <div>
          <button onClick={handleGenerateResume}>Generate Resume</button>
          <button onClick={generatePDF}>Download Resume</button>
        </div>
      )}
    </div>
  );
}
