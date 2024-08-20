import express from 'express'
import HomeController from '../Controller/index.controller.js'
import BookingRoutes from '../Routes/booking.routes.js'

let router = express.Router();

router.get("/", HomeController.homePage);
router.use("/hall", BookingRoutes);

export default router;