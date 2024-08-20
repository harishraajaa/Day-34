const homePage = (req, res) => {
    try {
      res.status(200).send(`
          <div style="padding:10px;"><h1 style = "text-align:center">Hall Booking API</h1>
          <ul><li><h3>https://hall-booking-mcgh.onrender.com/hall-booking/get-all-room - To GET All Room Details.</h3></li>
          <li><h3>https://hall-booking-mcgh.onrender.com/hall-booking/create-room - To POST the Room Details in the API.</h3></li>
          <li><h3>https://hall-booking-mcgh.onrender.com/hall-booking/booking-room - To POST the booked Room Details in the API.</h3></li>
          <li><h3>https://hall-booking-mcgh.onrender.com/hall-booking/booked-data - To GET all rooms with Booked Details.</h3></li>
          <li><h3>https://hall-booking-mcgh.onrender.com/hall-booking/customer-data - To GET all Customer with Booked Details</h3></li>
          <li><h3>https://hall-booking-mcgh.onrender.com/hall-booking/bookedCount/:customer_name - To GET Customer Details with number of times the room booked.</h3></li>
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
  