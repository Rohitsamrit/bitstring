import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 12,
    color: '#333333',
    backgroundColor: '#FAFAFA',
  },
  header: {
    marginBottom: 20,
    borderBottom: '2 solid #3D5A80',
    paddingBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3D5A80',
    marginBottom: 5,
  },
  jobRole: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#98C1D9',
    marginBottom: 10,
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 10,
    color: '#293241',
    marginTop: 10,
  },
  section: {
    marginBottom: 15,
    border: '1 solid #98C1D9',
    borderRadius: 5,
    padding: 10,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#98C1D9',
    color: '#293241',
    padding: 5,
    marginBottom: 10,
    borderRadius: 3,
  },
  subHeading: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3D5A80',
    marginBottom: 5,
  },
  text: {
    fontSize: 11,
    lineHeight: 1.4,
    marginBottom: 3,
  },
  bold: {
    fontWeight: 'bold',
    color: '#293241',
  },
  listItem: {
    fontSize: 11,
    marginLeft: 15,
    marginBottom: 8,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  skill: {
    backgroundColor: '#E0FBFC',
    borderRadius: 10,
    padding: '3 8',
    margin: 2,
    fontSize: 10,
    color: '#3D5A80',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 10,
    color: '#EE6C4D',
    fontStyle: 'italic',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  experienceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
});

const ResumeDocument = ({ resume }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{resume.name.toUpperCase()}</Text>
        <Text style={styles.jobRole}>{resume.jobRole}</Text>
        <View style={styles.contactInfo}>
          <Text>{resume.email}</Text>
          <Text>{resume.phone}</Text>
          <Text>{resume.experience} years experience</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Education</Text>
        {resume.educations?.map((edu, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.subHeading}>{edu.degree}</Text>
            <Text style={styles.text}>{edu.college}</Text>
            <Text style={styles.date}>{edu.duration}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Experience/Internships</Text>
        {resume.experiences?.map((exp, index) => (
          <View key={index} style={styles.listItem}>
            <View style={styles.experienceRow}>
              {exp.logo && <Image src={exp.logo} style={styles.logo} />}
              <View>
                <Text style={styles.subHeading}>
                  {exp.role} at <Text style={styles.bold}>{exp.company}</Text>
                </Text>
                <Text style={styles.date}>{exp.duration}</Text>
                <Text style={styles.text}>{exp.details}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Projects</Text>
        {resume.projects?.map((project, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.subHeading}>{project.name}</Text>
            <Text style={styles.text}>{project.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Technical Skills</Text>
        <View style={styles.skillsContainer}>
          {resume.skills?.map((skill, index) => (
            <Text key={index} style={styles.skill}>
              {skill}
            </Text>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumeDocument;
