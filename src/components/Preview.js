import { templates } from "./templates";
import jsPDF from "jspdf";

export default function Preview({ formData, selectedTemplate }) {
  const Template = templates[selectedTemplate]?.render;

  // Function to handle PDF download
  const downloadResume = () => {
    if (!Template) {
      alert("Please select a template first.");
      return;
    }

    const doc = new jsPDF();
    // Generate the content using the selected template
    const element = document.getElementById("resume-content");
    if (element) {
      doc.html(element, {
        callback: (doc) => {
          doc.save(`${formData.name || "Resume"}.pdf`);
        },
        x: 10,
        y: 10,
        autoPaging: true,
        html2canvas: { scale: 0.5 },
      });
    }
  };

  return (
    <div
      style={{ border: "1px solid #ddd", padding: "20px", marginTop: "20px" }}
    >
      <h2>Resume Preview</h2>
      <div id="resume-content">
        {Template ? (
          <div>{Template(formData)}</div>
        ) : (
          <p>No template selected</p>
        )}
      </div>
      {/* Download Button */}
      <button
        onClick={downloadResume}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Download Resume
      </button>
    </div>
  );
}
