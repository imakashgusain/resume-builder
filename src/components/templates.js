import React from "react";

export const templates = {
  premium: {
    name: "Premium",
    render: (formData) => {
      if (!formData) {
        return <p>No data available. Please fill out the form.</p>;
      }

      return (
        <div style={styles.container}>
          <header style={styles.header}>
            <h1 style={styles.name}>{formData.name || "Your Name"}</h1>
            <p style={styles.contact}>
              {formData.address || "Your Address"} |{" "}
              {formData.phoneNumber || "Your Phone Number"}
            </p>
            <p style={styles.summary}>
              {formData.summary || "A brief summary about you."}
            </p>
          </header>
          <main style={styles.main}>
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Education</h2>
              <p>{formData.education || "Your education details here."}</p>
            </section>
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Work Experience</h2>
              <p>{formData.experience || "Your work experience here."}</p>
            </section>
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Projects</h2>
              {formData.projects?.length > 0 ? (
                formData.projects.map((project, index) => (
                  <div key={index} style={styles.project}>
                    <strong>{project.projectName || "Project Name"}</strong>
                    <p>
                      {project.projectDescription || "Project description."}
                    </p>
                  </div>
                ))
              ) : (
                <p>No projects added.</p>
              )}
            </section>
            <section style={styles.skillsAndInterests}>
              <div style={styles.halfColumn}>
                <h2 style={styles.sectionTitle}>Skills</h2>
                <p>{formData.skills || "List your skills here."}</p>
              </div>
              <div style={styles.halfColumn}>
                <h2 style={styles.sectionTitle}>Interests</h2>
                <p>{formData.interests || "List your interests here."}</p>
              </div>
            </section>
          </main>
        </div>
      );
    },
  },
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    width: "800px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#f9f9f9",
    color: "#333",
    lineHeight: "1.6",
  },
  header: {
    textAlign: "center",
    borderBottom: "2px solid #007BFF",
    marginBottom: "20px",
    paddingBottom: "10px",
  },
  name: {
    fontSize: "2em",
    margin: "0",
  },
  contact: {
    fontSize: "1em",
    margin: "10px 0",
    color: "#555",
  },
  summary: {
    fontStyle: "italic",
    color: "#777",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  section: {
    paddingBottom: "15px",
    borderBottom: "1px solid #ddd",
  },
  sectionTitle: {
    fontSize: "1.2em",
    marginBottom: "10px",
    color: "#007BFF",
  },
  project: {
    marginBottom: "10px",
  },
  skillsAndInterests: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
  halfColumn: {
    flex: "1",
  },
};
