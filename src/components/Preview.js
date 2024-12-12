export default function Preview({ formData }) {
  return (
    <div
      style={{ border: "1px solid #ddd", padding: "20px", marginTop: "20px" }}
    >
      <h2>Resume Preview</h2>
      <p>
        <strong>Name:</strong> {formData.name}
      </p>
      <p>
        <strong>Address:</strong> {formData.address}
      </p>
      <h4>Education</h4>
      <p>{formData.education}</p>
      <h4>Skills</h4>
      <p>{formData.skills}</p>
      <h4>Interests</h4>
      <p>{formData.interests}</p>
      <h4>Project Details</h4>
      <p>{formData.projects}</p>
      <h4>Certificates</h4>
      <p>{formData.certificates}</p>
    </div>
  );
}
