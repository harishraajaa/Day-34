console.log("Hotel Room Booking Application using Express")
import express from 'express'

import AppRoutes from "./src/Routes/index.routes.js";

let PORT = 8000
let app = express()

app.use(express.json());
app.use("/", AppRoutes);

app.listen(PORT, () => console.log(`App is listening to ${PORT}`));