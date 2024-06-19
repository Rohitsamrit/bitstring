import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
  },
  bold: {
    fontWeight: "bold",
  },
  listItem: {
    fontSize: 12,
    marginLeft: 10,
  },
});

const ResumeDocument = ({ resume }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        {/* <Text style={[styles.heading, styles.bold]}>{resume.name}</Text> */}
        <Text style={styles.bold}>Resume:</Text>
        {/* {/* <Text> {resume.experience} years</Text>
        <Text style={styles.bold}>Job Role:</Text>
        <Text> {resume.jobRole}</Text>
        <Text style={styles.bold}>DOB:</Text>
        <Text> {resume.dob}</Text>
        <Text style={styles.bold}>Contact:</Text>
        <Text>
          {" "}
          {resume.contact.email}, {resume.contact.phone}
        </Text>
        <Text style={styles.bold}>Status:</Text>
        <Text> {resume.status}</Text> */}
      </View>

      {/* <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        {resume.education.map((edu, index) => (
          <View key={index} style={styles.listItem}>
            <Text>
              {edu.degree} - {edu.institution}, {edu.duration}
            </Text>
          </View>
        ))}
      </View> */}

      {/* <View style={styles.section}>
        <Text style={styles.heading}>Experience/Internships</Text>
        {resume.workExperience.map((exp, index) => (
          <View key={index} style={styles.listItem}>
            <Text>
              {exp.title} at {exp.company} ({exp.duration}) - {exp.description}
            </Text>
          </View>
        ))}
      </View> */}

      {/* <View style={styles.section}>
        <Text style={styles.heading}>Projects</Text>
        {resume.projects.map((project, index) => (
          <View key={index} style={styles.listItem}>
            <Text>
              {project.name} - {project.description}
            </Text>
          </View>
        ))}
      </View> */}

      {/* <View style={styles.section}>
        <Text style={styles.heading}>Technical Skills</Text>
        {resume.skills.map((skill, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{skill}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Certifications</Text>
        {resume.certifications.map((certification, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{certification}</Text>
          </View>
        ))}
      </View> */}
    </Page>
  </Document>
);

export default ResumeDocument;
