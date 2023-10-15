// Report.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const Report = ({ recruits }) => (
  <PDFViewer width={600} height={400}>
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Recruit Report</Text>
          <View>
            {recruits.map((recruit) => (
              <Text key={recruit._id}>
                Name: {recruit.fullName}, Email: {recruit.email}, NIC: {recruit.nic}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default Report;
