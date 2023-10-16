
// //  add data

//  router.route("/add").post(upload.single("VehicleImage"), (req, res) => {

//      const VehicleNumber = req.body.VehicleNumber                        
//     const Route = req.body.Route
//     const selectedRoute = req.body.selectedRoute
//     const VehicleType = req.body.VehicleType
//     const selectedType = req.body.selectedRoute
//     const DriverName = req.body.DriverName
//      // Check if a file was uploaded
//   if (!req.file) {
//     return res.status(400).json({ error: "Image file is required." });
//   }

//   const VehicleImage = "uploads/" + req.file.filename; // Get the uploaded image path

//     const newShuttle = new Shuttle({
       
//         VehicleNumber,
//         Route,
//         VehicleImage,
//         VehicleType,
//         DriverName
//     })
//     newShuttle.save().then(()=> {
//         res.json("Shuttle Submitted !!!")
//     }).catch((error)=>{
//         console.log(error)
//     }) 
// })

// //  read data
// router.route("/").get((req,res)=>{
//     Shuttle.find().then((shuttles)=>{
//         res.json(shuttles)
//     }).catch((error)=>{
//         console.log(error)
//     })
// })
// //  (put=post)
// // Update a shuttle record
// router
//   .route("/update/:shuttleId")
//   .put(upload.single("VehicleImage"), async (req, res) => {
//     const shuttleId = req.params.shuttleId;
//     const { VehicleID, VehicleNumber, Route,VehicleType,DriverName } = req.body;

//     // Check if a new image file was uploaded
//     const newImageFile = req.file;
//     let updatedImage = "";

//     if (newImageFile) {
//       updatedImage = "uploads/" + newImageFile.filename;
//     }

//     const updateShuttle = {
     
//       VehicleNumber,
//       Route,
//       VehicleType,DriverName
//     };

//     // Only update the image if a new one was uploaded
//     if (newImageFile) {
//       updateShuttle.VehicleImage = updatedImage;
//     }

//     try {
//       const updatedShuttle = await Shuttle.findByIdAndUpdate(
//         shuttleId,
//         updateShuttle
//       );
//       if (!updatedShuttle) {
//         return res.status(404).json({ error: "Shuttle not found" });
//       }
//       res.status(200).json({ status: "Shuttle updated" });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Error with updating Shuttle data" });
//     }
//   });

// //delete a feedback
// router.route("/delete/:id").delete(async(req,res)=>{
//     let shuttleId = req.params.id;

//     await Shuttle.findByIdAndDelete(shuttleId).then(()=>{
//         res.status(200).send({status:"Shuttle Deleted"})
//     }).catch((error)=>{
//         console.log(error.message)
//         res.status(500).send({status:"Error with delete Shuttle",error: error.message})
//     })
    

// //get a details of a single feedback
// router.route("/get/:shuttleId").get(async(req,res)=>{
//     let shuttleId = req.params.shuttleId
//     const shuttle = await Shuttle.findById(shuttleId).then((shuttle)=>{
//         res.status(200).send({status:"Shuttle fetched",shuttle})
//     }).catch((error)=>{
//         console.log(error.message)
//         res.status(500).send({status:"Error with getting Shuttle",error:error.message})
//     })
// })

// })
// router.get('/search', async (req, res) => {
//     try {
//       const { query } = req.query;
//       const results = await Shuttle.find({ $text: { $search: query } });
//       res.json(results);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   });

// module.exports = router
const router = require("express").Router()
const Shuttle = require("../../models/TransportationManagement/ShuttleModel");

router.route("/shuttleadd").post(async (req, res) => {
  try {
    // Get the data from the request body
    const { VehicleNumber, Route,  VehicleType, DriverName} = req.body;

    // Create a new Shuttle instance with the data
    const newShuttle = new Shuttle({
      VehicleNumber,
      Route,
      VehicleType,
      DriverName,
      
    });

    // Save the new Shuttle instance to the database
    await newShuttle.save();

    res.status(201).json("Shuttle Added");
  } catch (error) {
    console.error(error);
    res.status(500).json("Error adding shuttle");
  }
});

router.route("/shuttles/:id").get(async (req, res) => {
  const shuttleId = req.params.id;
  try {
    const shuttle = await Shuttle.findById(shuttleId);
    if (!shuttle) {
      res.status(404).json("Shuttle not found");
    } else {
      res.status(200).json(shuttle);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Error fetching shuttle data by ID");
  }
});

// Add a route to update shuttle data by ID
router.route("/shuttles/:id").put(async (req, res) => {
  const shuttleId = req.params.id;
  try {
    const updatedShuttle = await Shuttle.findByIdAndUpdate(
      shuttleId,
      req.body,
      { new: true } // Return the updated shuttle
    );
    if (!updatedShuttle) {
      res.status(404).json("Shuttle not found");
    } else {
      res.status(200).json("Shuttle updated");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Error updating shuttle data");
  }
});

// Add a route to delete shuttle data by ID
router.route("/shuttles/:id").delete(async (req, res) => {
  const shuttleId = req.params.id;
  try {
    const deletedShuttle = await Shuttle.findByIdAndDelete(shuttleId);
    if (!deletedShuttle) {
      res.status(404).json("Shuttle not found");
    } else {
      res.status(200).json("Shuttle deleted");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Error deleting shuttle data");
  }
});

router.route("/shuttles").get(async (req, res) => {
  try {
    const shuttles = await Shuttle.find(); // Assuming Shuttle is your Mongoose model
    res.status(200).json(shuttles);
  } catch (error) {
    console.error(error);
    res.status(500).json("Error fetching shuttle data");
  }
});

module.exports = router