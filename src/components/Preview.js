export default function Preview({ formData }) {
  return (
    <div className="resume-preview">
      <h2>Resume Preview</h2>
      <p>
        <strong>Name:</strong> {formData.name}
      </p>
      <h4>Address</h4>
      <p>
        <strong>Address:</strong> {formData.address}
      </p>
      <h4>Education</h4>
      <p>{formData.education}</p>
      <h4>Experience</h4>
      <p>{formData.experience}</p>
      <h4>Skills</h4>
      <p>{formData.skills}</p>
      <h4>Interests</h4>
      <p>{formData.interests}</p>
    </div>
  );
}
