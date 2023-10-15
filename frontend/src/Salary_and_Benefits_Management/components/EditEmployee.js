// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import logoImage from 'C:/SLIIT/ITP/Employee_Management_and_Training_System/frontend/src/1233.png';
// import { useParams } from 'react-router-dom';

// const EditEmployee = () => {
//   const { id } = useParams();
//   const [employee, setEmployee] = useState({
//     name: '',
//     age: '',
//     department: '',
//     workDays: '',
//     dailyRate: '',
//     loanInterests: '',
//     bonus: '',
//     totalSalary: '',
//   });
//   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // useEffect(() => {
  //   // Fetch the employee details using the ID from the URL
  //   axios
  //     .get(`http://localhost:8070/Salary_and_Benefits_Management/employee/get/${id}`)
  //     .then((res) => {
  //       const employeeData = res.data.employee;
  //       setEmployee(employeeData);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEmployee({
//       ...employee,
//       [name]: value,
//     });
//   };

//   const calculateTotalSalary = () => {
//     const { workDays, dailyRate, loanInterests, bonus } = employee;
//     const workingDays = parseFloat(workDays);
//     const ratePerDay = parseFloat(dailyRate);
//     const bonusAmount = bonus ? parseFloat(bonus) : 0;
//     const loanInterestAmount = loanInterests ? parseFloat(loanInterests) : 0;
//     const etfPercentage = 0.12; // ETF Percentage is 12%

//     const totalSalary = (workingDays * ratePerDay) + bonusAmount - loanInterestAmount;
//     const etfReductionAmount = totalSalary * etfPercentage;
//     const finalTotalSalary = totalSalary - etfReductionAmount;

//     setEmployee({
//       ...employee,
//       totalSalary: finalTotalSalary.toFixed(2),
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     calculateTotalSalary();

//     // Update the employee data in the database
//     axios
//       .put(`http://localhost:8070/Salary_and_Benefits_Management/employee/update/${id}`, employee)
//       .then(() => {
//         alert('Employee updated successfully');
//       })
//       .catch((error) => {
//         console.error(error);
//         alert('Error updating employee');
//       });
//   };

//   const generatePDF = () => {
//     setIsGeneratingPDF(true);
  
//     const { name, age, department, workDays, dailyRate, loanInterests, bonus, totalSalary } = employee;
//     const etfPercentage = 0.12; // ETF Percentage is 12%
  
//     const data = [
//       ['Name', name],
//       ['Age', age],
//       ['Department', department],
//       ['Work Days', workDays],
//       ['Daily Rate (LKR)', `LKR ${dailyRate}`],
//       ['Loan Interests (LKR)', `LKR ${loanInterests || 0}`],
//       ['Bonus (LKR)', `LKR ${bonus || 0}`],
//     ];
  
//     const totalSalaryValue = parseFloat(totalSalary);
//     const etfDeduction = totalSalaryValue * etfPercentage;
//     const etfReductionPercentage = etfPercentage * 100;
//     const etfReduction = `${etfReductionPercentage.toFixed(2)}%`;
  
//     const totalSalaryWithEtf = totalSalaryValue - etfDeduction;
  
//     const tableOptions = {
//       margin: { top: 50 }, // Set top margin for the table
//       addPageContent: function(data) {
//         // Add page content before the table
//         pdf.addImage(logoImage, 'PNG', 10, 10, 70, 60);
//         pdf.text('ENTERPRISE PRO', 70, 30);
//         pdf.text('Paysheet', 70, 50);
//       }
//     };
  
//     const pdf = new jsPDF();
//     pdf.autoTable({
//       head: data,
//       body: [
//         ['ETF Deduction (LKR)', `LKR ${etfDeduction.toFixed(2)}`],
//         ['ETF Percentage', etfReduction],
//         ['Total Salary (LKR)', `LKR ${totalSalaryWithEtf.toFixed(2)}`]
//       ],
//       startY: 100, // Set Y position for the table
//       ...tableOptions
//     });
  
//     pdf.save('employee_details.pdf');
//     setIsGeneratingPDF(false);
//   };
  
  
  

//   return (
//     <div className="container">
//       <h2>Edit Employee Paysheet</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             name="name"
//             placeholder="Enter Name"
//             value={employee.name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Age:</label>
//           <input
//             type="number"
//             className="form-control"
//             name="age"
//             placeholder="Enter Age"
//             value={employee.age}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Department:</label>
//           <input
//             type="text"
//             className="form-control"
//             name="department"
//             placeholder="Enter Department"
//             value={employee.department}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Work Days:</label>
//           <input
//             type="number"
//             className="form-control"
//             name="workDays"
//             placeholder="Enter Work Days"
//             value={employee.workDays}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Daily Rate:</label>
//           <input
//             type="number"
//             className="form-control"
//             name="dailyRate"
//             placeholder="Enter Daily Rate"
//             value={employee.dailyRate}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Loan Interests:</label>
//           <input
//             type="number"
//             className="form-control"
//             name="loanInterests"
//             placeholder="Enter Loan Interests"
//             value={employee.loanInterests}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Bonus:</label>
//           <input
//             type="number"
//             className="form-control"
//             name="bonus"
//             placeholder="Enter Bonus"
//             value={employee.bonus}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Total Salary:</label>
//           <input
//             type="text"
//             className="form-control"
//             name="totalSalary"
//             value={employee.totalSalary}
//             readOnly
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Save
//         </button>
//         <button
//           type="button"
//           className="btn btn-success"
//           onClick={generatePDF}
//           disabled={isGeneratingPDF}
//         >
//           {isGeneratingPDF ? 'Generating PDF...' : 'Generate PDF'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditEmployee;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logoImage from 'C:/SLIIT/ITP/Employee_Management_and_Training_System/frontend/src/1233.png';
import { useParams } from 'react-router-dom';

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: '',
    age: '',
    department: '',
    workDays: '',
    dailyRate: '',
    loanInterests: '',
    bonus: '',
    totalSalary: '',
    courseName: '', // New field: Course Name
    courseFee: '',  // New field: Course Fee
    etfReduction: '',  // New field: ETF Reduction
  });
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  useEffect(() => {
    // Fetch the employee details using the ID from the URL
    axios
      .get(`http://localhost:8070/Salary_and_Benefits_Management/employee/get/${id}`)
      .then((res) => {
        const employeeData = res.data.employee;
        setEmployee(employeeData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const calculateTotalSalary = () => {
    const { workDays, dailyRate, loanInterests, bonus, courseFee } = employee;
    const workingDays = parseFloat(workDays);
    const ratePerDay = parseFloat(dailyRate);
    const bonusAmount = bonus ? parseFloat(bonus) : 0;
    const loanInterestAmount = loanInterests ? parseFloat(loanInterests) : 0;
    const etfPercentage = 0.12; // ETF Percentage is 12%

    const etfDeduction = (workingDays * ratePerDay )* etfPercentage;
    const totalSalary = (workingDays * ratePerDay) - etfDeduction + bonusAmount - loanInterestAmount - parseFloat(courseFee);

    setEmployee({
      ...employee,
      totalSalary: totalSalary.toFixed(2),
      etfReduction: etfDeduction.toFixed(2),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateTotalSalary();

    // Update the employee data in the database
    axios
      .put(`http://localhost:8070/Salary_and_Benefits_Management/employee/update/${id}`, employee)
      .then(() => {
        alert('Employee updated successfully');
      })
      .catch((error) => {
        console.error(error);
        alert('Error updating employee');
      });
  };

  const generatePDF = () => {
    setIsGeneratingPDF(true);
  
    const { name, age, department, workDays, dailyRate, loanInterests, bonus, totalSalary, etfReduction, courseName, courseFee } = employee;
    const etfPercentage = 0.12; // ETF Percentage is 12%
  
    const data = [
      ['Name', name],
      ['Age', age],
      ['Department', department],
      ['Work Days', workDays],
      ['Daily Rate (LKR)', `LKR ${dailyRate}`],
      ['Loan Interests (LKR)', `LKR ${loanInterests || 0}`],
      ['Bonus (LKR)', `LKR ${bonus || 0}`],
      ['Course Name', courseName],  // New field: Course Name
      ['Course Fee (LKR)', `LKR ${courseFee || 0}`],  // New field: Course Fee
    ];
  
    const totalSalaryValue = parseFloat(totalSalary);
    const etfDeduction = parseFloat(etfReduction);
    const etfReductionPercentage = etfPercentage * 100;
  
    const totalSalaryWithEtf = totalSalaryValue ;
  
    const tableOptions = {
      margin: { top: 50 }, // Set top margin for the table
      addPageContent: function(data) {
        // Add page content before the table
        pdf.addImage(logoImage, 'PNG', 10, 10, 70, 60);
        pdf.text('ENTERPRISE PRO', 70, 30);
        pdf.text('Paysheet', 70, 50);
      }
    };
  
    const pdf = new jsPDF();
    pdf.autoTable({
      head: data,
      body: [
        ['ETF Deduction (LKR)', `LKR ${etfDeduction.toFixed(2)}`],
        ['ETF Percentage', `${etfReductionPercentage.toFixed(2)}%`],
        ['Total Salary (LKR)', `LKR ${totalSalaryWithEtf.toFixed(2)}`]
      ],
      startY: 100, // Set Y position for the table
      ...tableOptions
    });
  
    pdf.save('employee_details.pdf');
    setIsGeneratingPDF(false);
  };

  return (
    <div className="container">
      <h2>Edit Employee Paysheet</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter Name"
            value={employee.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            className="form-control"
            name="age"
            placeholder="Enter Age"
            value={employee.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            className="form-control"
            name="department"
            placeholder="Enter Department"
            value={employee.department}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Work Days:</label>
          <input
            type="number"
            className="form-control"
            name="workDays"
            placeholder="Enter Work Days"
            value={employee.workDays}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Daily Rate (LKR):</label>
          <input
            type="number"
            className="form-control"
            name="dailyRate"
            placeholder="Enter Daily Rate"
            value={employee.dailyRate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Loan Interests (LKR):</label>
          <input
            type="number"
            className="form-control"
            name="loanInterests"
            placeholder="Enter Loan Interests"
            value={employee.loanInterests}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Bonus (LKR):</label>
          <input
            type="number"
            className="form-control"
            name="bonus"
            placeholder="Enter Bonus"
            value={employee.bonus}
            onChange={handleInputChange}
          />
        </div>
        {/* New fields */}
        <div className="form-group">
          <label>Course Name:</label>
          <input
            type="text"
            className="form-control"
            name="courseName"
            placeholder="Enter Course Name"
            value={employee.courseName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Course Fee (LKR):</label>
          <input
            type="number"
            className="form-control"
            name="courseFee"
            placeholder="Enter Course Fee"
            value={employee.courseFee}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>ETF Reduction (LKR):</label>
          <input
            type="text"
            className="form-control"
            name="etfReduction"
            value={employee.etfReduction}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Total Salary (LKR):</label>
          <input
            type="text"
            className="form-control"
            name="totalSalary"
            value={employee.totalSalary}
            readOnly
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={generatePDF}
          disabled={isGeneratingPDF}
        >
          {isGeneratingPDF ? 'Generating PDF...' : 'Generate PDF'}
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
