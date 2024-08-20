const homePage = (req, res) => {
    try {
      res.status(200).send(`
          <div style="padding:10px;font-family: Arial"><h1 style = "text-align:center">Hall Booking API</h1>
          <ul><li><h3><a href="https://hall-booking-harishcorp.onrender.com/hall/getAllRoom">getAllRoom</a> - To GET All Room Details.</h3></li>
          <li><h3><a href="https://hall-booking-harishcorp.onrender.com/hall/createRoom">createRoom</a> - To POST the Room Details in the API.</h3></li>
          <li><h3><a href="https://hall-booking-harishcorp.onrender.com/hall/bookRoom">bookRoom</a> - To POST the booked Room Details in the API.</h3></li>
          <li><h3><a href="https://hall-booking-harishcorp.onrender.com/hall/getBookedData">getBookedData</a> - To GET all rooms with Booked Details.</h3></li>
          <li><h3><a href="https://hall-booking-harishcorp.onrender.com/hall/getCustData">getCustData</a> - To GET all Customer with Booked Details</h3></li>
          <li><h3><a href="https://hall-booking-harishcorp.onrender.com/hall/getCustCount/:customer_name">getCustCount</a> - To GET Customer Details with number of times the room booked.</h3></li>
          </ul></div>
          `);
    } catch (error) {
      res.status(500).send({
        comment: "Internal Server Error",
      });
    }
  };
  
  export default {
    homePage
  };
  