import { templates } from "./templates";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Preview({ formData, selectedTemplate }) {
  const Template = templates[selectedTemplate]?.render;

  const downloadResume = async () => {
    if (!Template) {
      alert("Please select a template first.");
      return;
    }

    const content = document.getElementById("resume-content");
    if (!content) {
      alert("Resume content not found.");
      return;
    }

    try {
      const canvas = await html2canvas(content, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${formData.name || "Resume"}.pdf`);
    } catch (error) {
      console.error("Error generating PDF: ", error);
      alert("An error occurred while generating the PDF.");
    }
  };

  return (
    <div
      style={{ border: "1px solid #ddd", padding: "20px", marginTop: "20px" }}
    >
      <h2>Resume Preview</h2>
      <div id="resume-content" style={{ padding: "10px" }}>
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
