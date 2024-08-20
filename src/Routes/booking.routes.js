import express from 'express'
import BookingController from '../Controller/booking.controller.js'

let router = express.Router();
try {
    router.get("/getAllRoom", BookingController.getAllRoom);
    router.post("/createRoom", BookingController.createRoom);
    router.post("/bookRoom", BookingController.bookRoom);
    router.get("/getBookedData", BookingController.getBookedData);
    router.get("/getCustData", BookingController.getCustData);
    router.get("/getCustCount/:customer_name", BookingController.getCustCount);
} catch (error) {
    console.log(error);
}


export default router;