const router = require("express").Router()
let Ticket = require("../models/TicketModel")

//  add data
router.route("/add").post((req, res) => {
  const { name, id, subject, description, date, time, email } = req.body;

  const newTicket = new Ticket({
    name,
    id,
    subject,
    description,
    date,
    time,
    email
  });

  newTicket
    .save()
    .then(() => {
      res.json("Ticket Submitted !!!");
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error: "Failed to submit ticket" });
    });
});

//  read data
router.route("/").get((req, res) => {
  Ticket.find()
    .then((tickets) => {
      res.json(tickets);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error: "Failed to retrieve tickets" });
    });
});

// Get tickets by ID
router.route("/get/:id").get(async (req, res) => {
    const id = req.params.id;
    try {
      const ticket = await Ticket.find({ _id :id }); // Assuming "id" is the field used for filtering
      if (!ticket) {
        return res.status(404).json({ status: "Ticket not found" });
      }
      res.status(200).json({ status: "Ticket fetched", ticket });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ status: "Error with getting Tickets", error: error.message });
    }
  });
// Reply to a ticket by ID
router.route("/reply/:id").post(async (req, res) => {
    const id = req.params.id;
    const replyContent = req.body.replyContent; // You can send the reply content in the request body
  
    try {
      const ticket = await Ticket.findById(id);
      if (!ticket) {
        return res.status(404).json({ status: "Ticket not found" });
      }
  
      // Here, you can implement your logic to send a reply, e.g., send an email
      // For simplicity, we'll just update the ticket's "reply" field with the reply content
      ticket.reply = replyContent;
      await ticket.save();
  
      res.status(200).json({ status: "Reply sent successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ status: "Error with sending the reply", error: error.message });
    }
//search
    router.get('/search', async (req, res) => {
      try {
        const { query } = req.query;
        const results = await Ticket.find({ $text: { $search: query } });
        res.json(results);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
    });
  });
  

module.exports = router