// import React, { useState } from "react";
// import axios from "axios";

// function Forms() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [department, setDepartment] = useState("");
//   const [workDays, setWorkDays] = useState("");
//   const [dailyRate, setDailyRate] = useState("");
//   const [loanInterests, setLoanInterests] = useState("");
//   const [bonus, setBonus] = useState("");
//   const [error, setError] = useState("");
//   const [totalSalary, setTotalSalary] = useState("");
//   const [etfReduction, setEtfReduction] = useState("");

//   function isNumeric(value) {
//     return /^\d+$/.test(value);
//   }

//   function sendData(e) {
//     e.preventDefault();

//     if (!name || !department || !workDays || !dailyRate || !age) {
//       setError("Please fill in all required fields");
//       return;
//     }

//     if (
//       !isNumeric(age) ||
//       age < 18 ||
//       age > 55 ||
//       workDays > 31 ||
//       !isNumeric(workDays) ||
//       !isNumeric(dailyRate) ||
//       (loanInterests && !isNumeric(loanInterests)) ||
//       (bonus && !isNumeric(bonus))
//     ) {
//       setError("Age must be a numeric value between 18 and 55. Work Days must be a numeric value between 0 and 31, Daily Rate, Loan Interests, and Bonus must be numeric values.");
//       return;
//     }

//     const workingDays = parseFloat(workDays);
//     const ratePerDay = parseFloat(dailyRate);
//     const bonusAmount = bonus ? parseFloat(bonus) : 0;
//     const loanInterestAmount = loanInterests ? parseFloat(loanInterests) : 0;
//     const etfPercentage = 0.12; // ETF Percentage is 12%

//     const totalSalary1 =
//       (workingDays * ratePerDay)  ;

//       const totalSalary = totalSalary1 - (totalSalary1*etfPercentage) + bonusAmount - loanInterestAmount 
//     const etfReductionAmount = totalSalary1 * etfPercentage;

//     setTotalSalary(totalSalary.toFixed(2));
//     setEtfReduction(etfReductionAmount.toFixed(2));

//     const newEmployee = {
//       name,
//       age,
//       department,
//       workDays: workingDays,
//       dailyRate: ratePerDay,
//       bonus: bonusAmount,
//       loanInterests: loanInterestAmount,
//       totalSalary: totalSalary,
//     };

//     axios
//     .post("http://localhost:8070/Salary_and_Benefits_Management/employee/add", newEmployee)
//     .then(() => {
//         alert("Employee Added");
//         setName("");
//         setAge("");
//         setDepartment("");
//         setWorkDays("");
//         setDailyRate("");
//         setLoanInterests("");
//         setBonus("");
//         setError("");
//       })
//       .catch((error) => {
//         console.error(error); // Log the error to the console
//         alert("Something Wrong, Check Again");
//       });
//   }

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-6">
//           <div className="shadow p-4 rounded">
//             <h2 className="mb-4">Add Paysheet</h2>
//             {error && <p className="text-danger">{error}</p>}
//             <form onSubmit={sendData}>
//               <div className="form-group">
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Age</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   placeholder="Enter Age"
//                   value={age}
//                   onChange={(e) => setAge(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Department</label>
//                 <select
//                   className="form-control"
//                   value={department}
//                   onChange={(e) => setDepartment(e.target.value)}
//                 >
//                   <option value="">Select Department</option>
//                   <option value="IT">IT</option>
//                   <option value="BM">BM</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Work Days</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   placeholder="Enter Work Days"
//                   value={workDays}
//                   onChange={(e) => setWorkDays(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Daily Rate</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   placeholder="Enter Daily Rate"
//                   value={dailyRate}
//                   onChange={(e) => setDailyRate(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Loan Interests (optional)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   placeholder="Enter Loan Interests"
//                   value={loanInterests}
//                   onChange={(e) => setLoanInterests(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Bonus (optional)</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   placeholder="Enter Bonus"
//                   value={bonus}
//                   onChange={(e) => setBonus(e.target.value)}
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
        // <div className="col-md-6">
        //   <div className="shadow p-4 rounded">
        //     <h2 className="mb-4">Summary</h2>
        //     <div className="form-group">
        //       <label>Total Salary</label>
        //       <input type="text" className="form-control" value={totalSalary} readOnly />
        //     </div>
        //     <div className="form-group">
        //       <label>ETF Reduction</label>
        //       <input type="text" className="form-control" value={etfReduction} readOnly />
        //     </div>
        //   </div>
        // </div>
//       </div>
//     </div>
//   );
// }

// export default Forms;

// import React, { useState } from "react";
// import axios from "axios";

// function Forms() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [department, setDepartment] = useState("");
//   const [workDays, setWorkDays] = useState("");
//   const [dailyRate, setDailyRate] = useState("");
//   const [loanInterests, setLoanInterests] = useState("");
//   const [bonus, setBonus] = useState("");
//   const [error, setError] = useState("");
//   const [totalSalary, setTotalSalary] = useState("");
//   const [etfReduction, setEtfReduction] = useState("");
//   const [courseName, setCourseName] = useState(""); // New field for Course Name
//   const [courseFee, setCourseFee] = useState(""); // New field for Course Fee
//   const [monthlyFee, setMonthlyFee] = useState(0);

//   function isNumeric(value) {
//     return /^\d+$/.test(value);
//   }

//   function calculateMonthlyFee(selectedCourse) {
//     // Add a switch statement to calculate the monthly fee based on the selected course
//     switch (selectedCourse) {
//       case "Course A":
//         return 100;
//       case "Course B":
//         return 150;
//       case "Course C":
//         return 200;
//       case "Course D":
//         return 250;
//       case "Course E":
//         return 300;
//       default:
//         return 0;
//     }
//   }

//   function sendData(e) {
//     e.preventDefault();

//     if (!name || !department || !workDays || !dailyRate || !age) {
//       setError("Please fill in all required fields");
//       return;
//     }

//     if (
//       !isNumeric(age) ||
//       age < 18 ||
//       age > 55 ||
//       workDays > 31 ||
//       !isNumeric(workDays) ||
//       !isNumeric(dailyRate) ||
//       (loanInterests && !isNumeric(loanInterests)) ||
//       (bonus && !isNumeric(bonus))
//     ) {
//       setError(
//         "Age must be a numeric value between 18 and 55. Work Days must be a numeric value between 0 and 31, Daily Rate, Loan Interests, and Bonus must be numeric values."
//       );
//       return;
//     }

//     const workingDays = parseFloat(workDays);
//     const ratePerDay = parseFloat(dailyRate);
//     const bonusAmount = bonus ? parseFloat(bonus) : 0;
//     const loanInterestAmount = loanInterests ? parseFloat(loanInterests) : 0;
//     const etfPercentage = 0.12; // ETF Percentage is 12%

//     const totalSalary1 = workingDays * ratePerDay;
//     const totalSalary = totalSalary1 - (totalSalary1 * etfPercentage) + bonusAmount - loanInterestAmount -monthlyCourseFee;

//     // Calculate the monthly fee based on the selected course
//     const monthlyCourseFee = calculateMonthlyFee(courseName);
//     setMonthlyFee(monthlyCourseFee);

//     const newEmployee = {
//       name,
//       age,
//       department,
//       workDays: workingDays,
//       dailyRate: ratePerDay,
//       bonus: bonusAmount,
//       loanInterests: loanInterestAmount,
//       totalSalary,
//       courseName,
//       courseFee: monthlyCourseFee, // Assign the monthly fee to courseFee
//     };

//     axios
//       .post("http://localhost:8070/Salary_and_Benefits_Management/employee/add", newEmployee)
//       .then(() => {
//         alert("Employee Added");
//         setName("");
//         setAge("");
//         setDepartment("");
//         setWorkDays("");
//         setDailyRate("");
//         setLoanInterests("");
//         setBonus("");
//         setError("");
//         setMonthlyFee(0); // Reset monthly fee
//         setCourseName(""); // Reset course name
//         setCourseFee(""); // Reset course fee
//       })
//       .catch((error) => {
//         console.error(error); // Log the error to the console
//         alert("Something Wrong, Check Again");
//       });
//   }

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-6">
        //   <div className="shadow p-4 rounded">
        //     <h2 className="mb-4">Add Paysheet</h2>
        //     {error && <p className="text-danger">{error}</p>}
        //     <form onSubmit={sendData}>
        //       <div className="form-group">
        //         <label>Name</label>
        //         <input
        //           type="text"
        //           className="form-control"
        //           placeholder="Enter Name"
        //           value={name}
        //           onChange={(e) => setName(e.target.value)}
        //         />
        //       </div>
        //       <div className="form-group">
        //         <label>Age</label>
        //         <input
        //           type="number"
        //           className="form-control"
        //           placeholder="Enter Age"
        //           value={age}
        //           onChange={(e) => setAge(e.target.value)}
        //         />
        //       </div>
        //       <div className="form-group">
        //         <label>Department</label>
        //         <select
        //           className="form-control"
        //           value={department}
        //           onChange={(e) => setDepartment(e.target.value)}
        //         >
        //           <option value="">Select Department</option>
        //           <option value="IT">IT</option>
        //           <option value="BM">BM</option>
        //         </select>
        //       </div>
        //       <div className="form-group">
        //         <label>Work Days</label>
        //         <input
        //           type="number"
        //           className="form-control"
        //           placeholder="Enter Work Days"
        //           value={workDays}
        //           onChange={(e) => setWorkDays(e.target.value)}
        //         />
        //       </div>
        //       <div className="form-group">
        //         <label>Daily Rate</label>
        //         <input
        //           type="number"
        //           className="form-control"
        //           placeholder="Enter Daily Rate"
        //           value={dailyRate}
        //           onChange={(e) => setDailyRate(e.target.value)}
        //         />
        //       </div>
        //       <div className="form-group">
        //         <label>Loan Interests (optional)</label>
        //         <input
        //           type="number"
        //           className="form-control"
        //           placeholder="Enter Loan Interests"
        //           value={loanInterests}
        //           onChange={(e) => setLoanInterests(e.target.value)}
        //         />
        //       </div>
        //       <div className="form-group">
        //         <label>Bonus (optional)</label>
        //         <input
        //           type="number"
        //           className="form-control"
        //           placeholder="Enter Bonus"
        //           value={bonus}
        //           onChange={(e) => setBonus(e.target.value)}
        //         />
        //       </div>
        //       <div className="form-group">
        //         <label>Course Name</label>
        //         <select
        //           className="form-control"
        //           value={courseName}
        //           onChange={(e) => setCourseName(e.target.value)}
        //         >
        //           <option value="">Select Course</option>
        //           <option value="Course A">Course A</option>
        //           <option value="Course B">Course B</option>
        //           <option value="Course C">Course C</option>
        //           <option value="Course D">Course D</option>
        //           <option value="Course E">Course E</option>
        //         </select>
        //       </div>
        //       <div className="form-group">
        //         <label>Course Fee</label>
        //         <input
        //           type="text"
        //           className="form-control"
        //           placeholder="Course Fee"
        //           value={courseFee || monthlyFee}
        //           readOnly
        //         />
        //       </div>
        //       <button type="submit" className="btn btn-primary">
        //         Submit
        //       </button>
        //     </form>
        //   </div>
        // </div>
        // <div className="col-md-6">
        //   <div className="shadow p-4 rounded">
        //     <h2 className="mb-4">Summary</h2>
        //     <div className="form-group">
        //       <label>Total Salary</label>
        //       <input type="text" className="form-control" value={totalSalary} readOnly />
        //     </div>
        //     <div className="form-group">
        //       <label>ETF Reduction</label>
        //       <input type="text" className="form-control" value={etfReduction} readOnly />
        //     </div>
        //   </div>
        // </div>
//       </div>
//     </div>
//   );
// }

// export default Forms;

import React, { useState } from "react";
import axios from "axios";

function Forms() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");
  const [workDays, setWorkDays] = useState("");
  const [dailyRate, setDailyRate] = useState("");
  const [loanInterests, setLoanInterests] = useState("");
  const [bonus, setBonus] = useState("");
  const [error, setError] = useState("");
  const [totalSalary, setTotalSalary] = useState("");
  const [etfReduction, setEtfReduction] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseFee, setCourseFee] = useState("");
  const [monthlyFee, setMonthlyFee] = useState(0);

  function isNumeric(value) {
    return /^\d+$/.test(value);
  }

  function calculateMonthlyFee(selectedCourse) {
    switch (selectedCourse) {
      case "Course A":
        return 100;
      case "Course B":
        return 150;
      case "Course C":
        return 200;
      case "Course D":
        return 250;
      case "Course E":
        return 300;
      default:
        return 0;
    }
  }

  function sendData(e) {
    e.preventDefault();

    if (!name || !department || !workDays || !dailyRate || !age) {
      setError("Please fill in all required fields");
      return;
    }

    if (
      !isNumeric(age) ||
      age < 18 ||
      age > 55 ||
      workDays > 31 ||
      !isNumeric(workDays) ||
      !isNumeric(dailyRate) ||
      (loanInterests && !isNumeric(loanInterests)) ||
      (bonus && !isNumeric(bonus))
    ) {
      setError(
        "Age must be a numeric value between 18 and 55. Work Days must be a numeric value between 0 and 31, Daily Rate, Loan Interests, and Bonus must be numeric values."
      );
      return;
    }

    const workingDays = parseFloat(workDays);
    const ratePerDay = parseFloat(dailyRate);
    const bonusAmount = bonus ? parseFloat(bonus) : 0;
    const loanInterestAmount = loanInterests ? parseFloat(loanInterests) : 0;
    const etfPercentage = 0.12; // ETF Percentage is 12%
    const monthlyCourseFee = calculateMonthlyFee(courseName);

    const totalSalary1 = workingDays * ratePerDay * etfPercentage;
    
    const totalSalary = (ratePerDay * workDays) - totalSalary1 + bonusAmount - loanInterestAmount - monthlyCourseFee;
      const etfReduction = totalSalary1 ;

    setMonthlyFee(monthlyCourseFee.toFixed(2));
    setTotalSalary(totalSalary.toFixed(2));
    setEtfReduction(etfReduction.toFixed(2))

    const newEmployee = {
      name,
      age,
      department,
      workDays: workingDays,
      dailyRate: ratePerDay,
      bonus: bonusAmount,
      loanInterests: loanInterestAmount,
      totalSalary,
      courseName,
      courseFee: monthlyCourseFee,
    };

    axios
      .post("http://localhost:8070/Salary_and_Benefits_Management/employee/add", newEmployee)
      .then(() => {
        alert("Employee Added");
        // Reset form fields and states here...
      })
      .catch((error) => {
        console.error(error);
        alert("Something Wrong, Check Again");
      });
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="shadow p-4 rounded">
            <h2 className="mb-4">Add Paysheet</h2>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={sendData}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Department</label>
                <select
                  className="form-control"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="">Select Department</option>
                  <option value="IT">IT</option>
                  <option value="BM">BM</option>
                </select>
              </div>
              <div className="form-group">
                <label>Work Days</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Work Days"
                  value={workDays}
                  onChange={(e) => setWorkDays(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Daily Rate</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Daily Rate"
                  value={dailyRate}
                  onChange={(e) => setDailyRate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Loan Interests (optional)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Loan Interests"
                  value={loanInterests}
                  onChange={(e) => setLoanInterests(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Bonus (optional)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Bonus"
                  value={bonus}
                  onChange={(e) => setBonus(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Course Name</label>
                <select
                  className="form-control"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                >
                  <option value="">Select Course</option>
                  <option value="Course A">Course A</option>
                  <option value="Course B">Course B</option>
                  <option value="Course C">Course C</option>
                  <option value="Course D">Course D</option>
                  <option value="Course E">Course E</option>
                </select>
              </div>
              <div className="form-group">
                <label>Course Fee</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Course Fee"
                  value={courseFee || monthlyFee}
                  readOnly
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="shadow p-4 rounded">
            <h2 className="mb-4">Summary</h2>
            <div className="form-group">
              <label>Total Salary</label>
              <input type="text" className="form-control" value={totalSalary} readOnly />
            </div>
            <div className="form-group">
              <label>ETF Reduction</label>
              <input type="text" className="form-control" value={etfReduction} readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;
