import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

// Assume we have a logo image for BitString
import bitStringLogo from './layout/BLACK_LOGO_MARK.png';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 0,
    fontFamily: 'Helvetica',
  },
  header: {
    backgroundColor: '#00A86B',
    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeft: {
    width: '30%',
  },
  headerRight: {
    width: '70%',
    paddingLeft: 20,
  },
  logo: {
    width: 80,
    height: 80,
  },
  companyName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  content: {
    flexDirection: 'row',
    padding: 30,
  },
  leftColumn: {
    width: '30%',
    paddingRight: 15,
  },
  rightColumn: {
    width: '70%',
    paddingLeft: 15,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00A86B',
    textTransform: 'uppercase',
    borderBottomWidth: 2,
    borderBottomColor: '#00A86B',
    paddingBottom: 5,
  },
  sectionContent: {
    fontSize: 11,
    lineHeight: 1.4,
  },
  experienceItem: {
    marginBottom: 15,
  },
  companyRole: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
  duration: {
    fontSize: 11,
    fontStyle: 'italic',
    color: '#666666',
    marginBottom: 5,
  },
  skillItem: {
    fontSize: 11,
    marginBottom: 5,
    backgroundColor: '#E8F5E9',
    padding: '3 6',
    borderRadius: 3,
    display: 'inline-block',
    marginRight: 5,
  },
  educationItem: {
    marginBottom: 10,
  },
  projectItem: {
    marginBottom: 15,
  },
  projectName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#00A86B',
    marginBottom: 3,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    color: '#888888',
    fontSize: 10,
    fontStyle: 'italic',
  },
});

const Format1 = ({ resume }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image style={styles.logo} src={bitStringLogo} />
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.companyName}>BITSTRING</Text>
            <Text style={styles.contactInfo}>
              {resume.email} | {resume.phone}
            </Text>
            <Text style={styles.contactInfo}>
              {resume.experience} years of experience
            </Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.leftColumn}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Skills</Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {resume.skills?.map((skill, index) => (
                  <Text key={index} style={styles.skillItem}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              {resume.educations?.map((edu, index) => (
                <View key={index} style={styles.educationItem}>
                  <Text style={styles.companyRole}>{edu.degree}</Text>
                  <Text style={styles.duration}>
                    {edu.college}, {edu.duration}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.rightColumn}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Professional Experience</Text>
              {resume.experiences?.map((exp, index) => (
                <View key={index} style={styles.experienceItem}>
                  <Text style={styles.companyRole}>
                    {exp.role} at {exp.company}
                  </Text>
                  <Text style={styles.duration}>{exp.duration}</Text>
                  <Text style={styles.sectionContent}>{exp.details}</Text>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Projects</Text>
              {resume.projects?.map((project, index) => (
                <View key={index} style={styles.projectItem}>
                  <Text style={styles.projectName}>{project.name}</Text>
                  <Text style={styles.sectionContent}>
                    {project.description}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <Text style={styles.footer}>
          Resume generated for BitString - {new Date().getFullYear()}
        </Text>
      </Page>
    </Document>
  );
};

export default Format1;
