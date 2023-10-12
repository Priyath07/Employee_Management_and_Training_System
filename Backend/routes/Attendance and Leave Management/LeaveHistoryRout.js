const express = require('express');
const router = express.Router();



router.route("/fetch/:id").get(async(req,res)=>{

    let emplId = req.params.id;

   const emp = await employee.findById(emplId).then((employee)=>{

        res.status(200).send({massage:"user fetched",employee})

    }).catch((err)=>{

        console.log(err.massage);

        res.status(500).send({massage: "Error with get user"})
})

});

module.exports = router;
