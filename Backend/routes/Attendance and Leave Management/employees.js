const router = require("express").Router();
let employee = require("../../models/Attendance and Leave Management/employee"); //import employee.js from MODELS 


//create
router.route("/add").post((req,res)=>{
 
//req data from front end
const empname = req.body.empname;
const empage = Number(req.body.empage);
const empgender = req.body.empgender;
const empId = req.body.empId;
const empEmail = req.body.empEmail;
const empConNum = req.body.empConNum;


const newEmployee = new employee({
    EmployeeName: "",
    id: "",
    subject: "",
    description: "",
    date: "",
    time: "",
    leaveType: "",
})

//pass data to db
newEmployee.save().then(()=>{

    res.json("employee added")  //send this respons to frontend in jason format
   
    //if unsuccess
}).catch((err)=>{ 
   
    console.log(err);

})



})

//display
router.route("/").get((req,res)=>{
  
 employee.find().then((employees)=>{
      res.json(employees)

  }).catch((err)=>{
      
     console.log(err)
  })


})


//update
router.route("/update/:id").put(async (req,res) => {

    // "params" to fetch id comming as a parameter in url
    let emplId = req.params.id;
    
    //d structure
    const {  empname,empage,empgender,empId,empEmail,empConNum} = req.body;

    const updateEmployee = {

        empname,
        empage,
        empgender,
        empId,
        empEmail,
        empConNum
      
    }
   //update student find by "userid", "updateStudent" is the object where the data needed to update are in
    const update = await employee.findByIdAndUpdate(emplId,updateEmployee).then(()=>{

        res.status(200).send({status: "user update"})

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Erorr with updating data"});
    })
     
    
})

//delete
router.route("/delete/:id").delete(async(req,res) =>{
      
    let emplId = req.params.id;
     
    await employee.findByIdAndDelete(emplId).then(()=>{
        res.status(200).send({status:"user delete"})
    }).catch((err)=>{
        console.log(err.massage);
        res.status(500).send({status: "Error with delete user"})
    })
    
})

//fetch data of only one student

router.route("/fetch/:id").get(async(req,res)=>{

    let emplId = req.params.id;

   const emp = await employee.findById(emplId).then((employee)=>{

        res.status(200).send({massage:"user fetched",employee})

    }).catch((err)=>{

        console.log(err.massage);

        res.status(500).send({massage: "Error with get user"})
})

})

module.exports = router;