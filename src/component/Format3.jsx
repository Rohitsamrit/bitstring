// import React from "react";
// import {
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   Font,
// } from "@react-pdf/renderer";

// // Assume we have a logo image for BitString
// import bitStringLogo from "./layout/BLACK_LOGO_MARK.png";

// // Register custom fonts
// Font.register({
//   family: "Montserrat",
//   fonts: [
//     {
//       src: "https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gnD-w.ttf",
//       fontWeight: 400,
//     },
//     {
//       src: "https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gnD-w.ttf",
//       fontWeight: 700,
//     },
//   ],
// });

// const styles = StyleSheet.create({
//   page: {
//     backgroundColor: "#ffffff",
//     padding: 30,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   logoContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   logo: {
//     width: 50,
//     height: 50,
//     marginRight: 10,
//   },
//   companyName: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333333",
//   },
//   contactInfo: {
//     textAlign: "right",
//     fontSize: 10,
//     color: "#666666",
//   },
//   section: {
//     marginBottom: 20,
//     padding: 10,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: "#dddddd",
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 700,
//     marginBottom: 10,
//     color: "#333333",
//     borderBottomWidth: 1,
//     borderBottomColor: "#00A86B",
//     paddingBottom: 5,
//   },
//   listItem: {
//     fontSize: 12,
//     marginBottom: 5,
//     color: "#333333",
//   },
//   footer: {
//     position: "absolute",
//     bottom: 30,
//     left: 30,
//     right: 30,
//     textAlign: "center",
//     color: "#666666",
//     fontSize: 10,
//   },
// });

// const Format3 = ({ resume }) => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.header}>
//         <View style={styles.logoContainer}>
//           <Image style={styles.logo} src={bitStringLogo} />
//           <Text style={styles.companyName}>BITSTRING</Text>
//         </View>
//         <View style={styles.contactInfo}>
//           <Text>{resume.email}</Text>
//           <Text>{resume.phone}</Text>
//           <Text>{resume.experience} years experience</Text>
//         </View>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Skills</Text>
//         {resume.skills?.map((skill, index) => (
//           <Text key={index} style={styles.listItem}>
//             • {skill}
//           </Text>
//         ))}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Professional Experience</Text>
//         {resume.experiences?.map((exp, index) => (
//           <View key={index} style={{ marginBottom: 10 }}>
//             <Text style={styles.listItem}>
//               {exp.role} at {exp.company}
//             </Text>
//             <Text style={styles.listItem}>{exp.duration}</Text>
//             <Text style={styles.listItem}>{exp.details}</Text>
//           </View>
//         ))}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Education</Text>
//         {resume.educations?.map((edu, index) => (
//           <View key={index} style={{ marginBottom: 10 }}>
//             <Text style={styles.listItem}>{edu.degree}</Text>
//             <Text style={styles.listItem}>
//               {edu.college}, {edu.duration}
//             </Text>
//           </View>
//         ))}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Projects</Text>
//         {resume.projects?.map((project, index) => (
//           <View key={index} style={{ marginBottom: 10 }}>
//             <Text style={styles.listItem}>{project.name}</Text>
//             <Text style={styles.listItem}>{project.description}</Text>
//           </View>
//         ))}
//       </View>

//       <View style={styles.footer}>
//         <Text>Resume generated for BitString - {new Date().getFullYear()}</Text>
//       </View>
//     </Page>
//   </Document>
// );

// export default Format3;

import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';
import bitStringLogo from './layout/BLACK_LOGO_MARK.png'; // Import the logo

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 12,
    color: '#333',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #4a90e2',
    paddingBottom: 10,
    marginBottom: 20,
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a90e2',
  },
  contactInfo: {
    textAlign: 'right',
    color: '#4a90e2',
  },
  section: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    border: '1px solid #e2e2e2',
    backgroundColor: '#f9f9f9',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a90e2',
    marginBottom: 10,
    paddingBottom: 5,
    borderBottom: '1px solid #e2e2e2',
  },
  listItem: {
    marginBottom: 5,
    lineHeight: 1.5,
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 10,
    color: '#aaa',
  },
  breakableSection: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    border: '1px solid #e2e2e2',
    backgroundColor: '#f9f9f9',
    pageBreakInside: 'avoid',
  },
});

const Format3 = ({ resume }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} src={bitStringLogo} />
          <Text style={styles.companyName}>BITSTRING</Text>
        </View>
        <View style={styles.contactInfo}>
          <Text>{resume.email}</Text>
          <Text>{resume.phone}</Text>
          <Text>{resume.experience} years experience</Text>
        </View>
      </View>

      <View style={styles.breakableSection}>
        <Text style={styles.sectionTitle}>Skills</Text>
        {resume.skills?.map((skill, index) => (
          <Text key={index} style={styles.listItem}>
            • {skill}
          </Text>
        ))}
      </View>

      <View style={styles.breakableSection}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {resume.experiences?.map((exp, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text style={styles.listItem}>
              {exp.role} at {exp.company}
            </Text>
            <Text style={styles.listItem}>{exp.duration}</Text>
            <Text style={styles.listItem}>{exp.details}</Text>
          </View>
        ))}
      </View>

      <View style={styles.breakableSection}>
        <Text style={styles.sectionTitle}>Education</Text>
        {resume.educations?.map((edu, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text style={styles.listItem}>{edu.degree}</Text>
            <Text style={styles.listItem}>
              {edu.college}, {edu.duration}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.breakableSection}>
        <Text style={styles.sectionTitle}>Projects</Text>
        {resume.projects?.map((project, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text style={styles.listItem}>{project.name}</Text>
            <Text style={styles.listItem}>{project.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text>Resume generated for BitString - {new Date().getFullYear()}</Text>
      </View>
    </Page>
  </Document>
);

export default Format3;
