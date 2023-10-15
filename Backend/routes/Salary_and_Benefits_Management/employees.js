// const router = require("express").Router();
// const Employee = require("../../models/Salary_and_Benefits_Management/Employee");

// router.route("/add").post(async (req, res) => {
//   const { name, age, department, workDays, dailyRate, loanInterests, bonus } = req.body;

//   try {
//     const totalSalary = calculateTotalSalary(workDays, dailyRate, loanInterests, bonus);

//     const newEmployee = new Employee({
//       name,
//       age,
//       department,
//       workDays,
//       dailyRate,
//       loanInterests,
//       bonus,
//       totalSalary
//     });

//     await newEmployee.save();
//     res.json("Employee Added");
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ status: "Error with adding employee", error: error.message });
//   }
// });

// router.route("/update/:id").put(async (req, res) => {
//   const employeeId = req.params.id;
//   const { name, age, department, workDays, dailyRate, loanInterests, bonus } = req.body;

//   try {
//     const totalSalary = calculateTotalSalary(workDays, dailyRate, loanInterests, bonus);

//     const updateEmployee = {
//       name,
//       age,
//       department,
//       workDays,
//       dailyRate,
//       loanInterests,
//       bonus,
//       totalSalary
//     };

//     const updatedEmployee = await Employee.findByIdAndUpdate(employeeId, updateEmployee, {
//       new: true
//     });
//     res.status(200).json({ status: "Employee updated", employee: updatedEmployee });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ status: "Error with updating employee", error: err.message });
//   }
// });

// router.route("/").get(async (req, res) => {
//   try {
//     const employees = await Employee.find();
//     res.json(employees);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ status: "Error with fetching employees", error: err.message });
//   }
// });

// router.route("/delete/:id").delete(async (req, res) => {
//   const employeeId = req.params.id;
//   try {
//     await Employee.findByIdAndDelete(employeeId);
//     res.status(200).json({ status: "Employee deleted" });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ status: "Error with deleting employee", error: err.message });
//   }
// });

// router.route("/get/:id").get(async (req, res) => {
//     const id = req.params.id;
//     try {
//         const employee = await Employee.findById(id);
//         if (!employee) {
//             return res.status(404).json({ status: "Employee not found" });
//         }
//         res.status(200).json({ status: "Employee fetched", employee });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ status: "Error with getting employee", error: error.message });
//     }
// });


// function calculateTotalSalary(workDays, dailyRate, loanInterests, bonus) {
//   const workingDays = parseFloat(workDays);
//   const ratePerDay = parseFloat(dailyRate);
//   const bonusAmount = bonus ? parseFloat(bonus) : 0;
//   const loanInterestAmount = loanInterests ? parseFloat(loanInterests) : 0;
//   const totalSalary = ((workingDays * ratePerDay) - ((workingDays * ratePerDay)*0.12)) + bonusAmount - loanInterestAmount;
//   return totalSalary.toFixed(2);
// }

// module.exports = router;

const router = require("express").Router();
const Employee = require("../../models/Salary_and_Benefits_Management/Employee");




router.route("/").get(async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: "Error with fetching employees", error: err.message });
  }
});

router.route("/get/:id").get(async (req, res) => {
  const id = req.params.id;
  try {
      const employee = await Employee.findById(id);
      if (!employee) {
          return res.status(404).json({ status: "Employee not found" });
      }
      res.status(200).json({ status: "Employee fetched", employee });
  } catch (error) {
      console.error(error.message);
      res.status(500).json({ status: "Error with getting employee", error: error.message });
  }
});


router.route("/add").post(async (req, res) => {
  const {
    name,
    age,
    department,
    workDays,
    dailyRate,
    loanInterests,
    bonus,
    courseName, // New field for the course name
  } = req.body;

  try {
    const monthlyCourseFee = calculateMonthlyFee(courseName); // Calculate course fee based on course name
    const totalSalary = calculateTotalSalary(workDays, dailyRate, loanInterests, bonus, monthlyCourseFee);

    const newEmployee = new Employee({
      name,
      age,
      department,
      workDays,
      dailyRate,
      loanInterests,
      bonus,
      courseName, // Store the course name in the database
      courseFee: monthlyCourseFee, // Store the monthly course fee in the database
      totalSalary,
    });

    await newEmployee.save();
    res.json("Employee Added");
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "Error with adding employee", error: error.message });
  }
});

router.route("/delete/:id").delete(async (req, res) => {
  const employeeId = req.params.id;
  try {
    await Employee.findByIdAndDelete(employeeId);
    res.status(200).json({ status: "Employee deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: "Error with deleting employee", error: err.message });
  }
});


router.route("/update/:id").put(async (req, res) => {
  const employeeId = req.params.id;
  const {
    name,
    age,
    department,
    workDays,
    dailyRate,
    loanInterests,
    bonus,
    courseName, // New field for the course name
  } = req.body;

  try {
    const monthlyCourseFee = calculateMonthlyFee(courseName); // Calculate course fee based on course name
    const totalSalary = calculateTotalSalary(workDays, dailyRate, loanInterests, bonus, monthlyCourseFee);

    const updateEmployee = {
      name,
      age,
      department,
      workDays,
      dailyRate,
      loanInterests,
      bonus,
      courseName, // Store the course name in the database
      courseFee: monthlyCourseFee, // Store the monthly course fee in the database
      totalSalary,
    };

    

   

    const updatedEmployee = await Employee.findByIdAndUpdate(employeeId, updateEmployee, {
      new: true
    });
    res.status(200).json({ status: "Employee updated", employee: updatedEmployee });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: "Error with updating employee", error: err.message });
  }
});

// Rest of your code remains unchanged...

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

function calculateTotalSalary(workDays, dailyRate, loanInterests, bonus, monthlyCourseFee) {
  const workingDays = parseFloat(workDays);
  const ratePerDay = parseFloat(dailyRate);
  const bonusAmount = bonus ? parseFloat(bonus) : 0;
  const loanInterestAmount = loanInterests ? parseFloat(loanInterests) : 0;
  const etfPercentage = 0.12; // ETF Percentage is 12%

  const totalSalary = ((workingDays * ratePerDay) - (workingDays * ratePerDay * etfPercentage)) + bonusAmount - loanInterestAmount - monthlyCourseFee;
  
  return totalSalary.toFixed(2);
}

module.exports = router;



