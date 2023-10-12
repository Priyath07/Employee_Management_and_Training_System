const router = require("express").Router()
let Apply = require("../../models/TransportationManagement/Applymodel")

//  add data
router.route("/add").post((req,res) => {
    
  const Name = req.body.Name   
  const Id = req.body.Id      
  const PhoneNo = req.body.PhoneNo                     
  const Route = req.body.Route
  const selectedRoute = req.body.selectedRoute
  const PickupLocation = req.body.PickupLocation   
  
  const newApply = new Apply({
     
       Name,
       Id   ,   
       PhoneNo,                    
       Route ,
       selectedRoute,
       PickupLocation
      })

  newApply.save().then(()=> {
      res.json("Apply Submitted !!!")
  }).catch((error)=>{
      console.log(error)
  }) 
})


//  read data
router.route("/").get((req,res)=>{
  Apply.find().then((applys)=>{
      res.json(applys)
  }).catch((error)=>{
      console.log(error)
  })
})
//  (put=post)
router.route("/update/:applyId").put(async(req,res)=>{
  let ApplyId=req.params.ApplyId //get the parameter value(id) from the req

  //destructure method
  const  {Name,Id,PhoneNo,Route,selectedRoute,PickupLocation}= req.body
  const updateApply = {
      Name,
      Id   ,   
      PhoneNo,                    
      Route ,
      selectedRoute,
      PickupLocation
  }
  try {
      const updatedApply = await Apply.findByIdAndUpdate(applyId, updateApply);
      if (!updatedApply) {
        return res.status(404).json({ error: " not found" });
      }
      res.status(200).json({ status: "Apply updated" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error with updating Apply data" });
    }
  });


//delete a feedback
router.route("/delete/:id").delete(async(req,res)=>{
  let applyId = req.params.id;

  await Apply.findByIdAndDelete(applyId).then(()=>{
      res.status(200).send({status:"Apply Deleted"})
  }).catch((error)=>{
      console.log(error.message)
      res.status(500).send({status:"Error with delete Apply",error: error.message})
  })

//get a details of a single feedback
router.route("/get/:applyId").get(async(req,res)=>{
  let applyId = req.params.applyId
  const apply = await Apply.findById(applyId).then((apply)=>{
      res.status(200).send({status:"Apply fetched",apply})
  }).catch((error)=>{
      console.log(error.message)
      res.status(500).send({status:"Error with getting apply",error:error.message})
  })
})



})
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    const results = await Apply.find({ $text: { $search: query } });
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Add the following route to handle form submissions with live location link
router.route('/submit').post(async (req, res) => {
  try {
    const { Name, Id, PhoneNo, Route, PickupLocation, liveLocationLink } = req.body;

    const newApply = new Apply({
      Name,
      Id,
      PhoneNo,
      Route,
      PickupLocation,
      liveLocationLink,
    });

    await newApply.save();
    res.status(201).json('Application Submitted');
  } catch (error) {
    console.error(error);
    res.status(500).json('Error submitting application');
  }
});

// Rest of your routes (e.g., get, update, delete) go here...



module.exports = router