import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Document, Page, Text, View, PDFViewer, StyleSheet } from "@react-pdf/renderer";

// Define a custom stylesheet for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  label: {
    width: "45%",
    fontWeight: "bold",
  },
  value: {
    width: "55%",
  },
});

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8050/Course_Creation_and_Management/course/get/${id}`)
      .then((res) => {
        setCourse(res.data.course);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  const generatePDF = () => {
    // Create a PDF document
    const pdfDoc = (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.header}>Course Details</Text>
            {course && (
              <View>
                <View style={styles.row}>
                  <Text style={styles.label}>Course Name:</Text>
                  <Text style={styles.value}>{course.courseName}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Course ID:</Text>
                  <Text style={styles.value}>{course.courseID}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Description:</Text>
                  <Text style={styles.value}>{course.description}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Duration:</Text>
                  <Text style={styles.value}>{course.duration}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Price:</Text>
                  <Text style={styles.value}>${course.price}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Lecture Name:</Text>
                  <Text style={styles.value}>{course.lectureName}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.label}>Category:</Text>
                  <Text style={styles.value}>{course.category}</Text>
                </View>
              </View>
            )}
          </View>
        </Page>
      </Document>
    );

    // Generate the PDF in a new window
    const blob = pdf(pdfDoc).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url);
  };

  return (
    <div>
      {course ? (
        <div>
          <button onClick={generatePDF}>Generate PDF</button>
          <Link to={`/`} className="btn btn-primary">
            Back
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
