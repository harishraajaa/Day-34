import { format } from "date-fns";

let rooms = [
  {
    id: 1,
    name: "Classic Hall",
    status: 'true',
    amenities: "TV, Projector",
    seats: 4,
    priceperhr: 2000,
  },
  {
    id: 2,
    name: "Deluxe Hall",
    status: 'true',
    amenities: "TV, Projector, Wi-Fi",
    seats: 10,
    priceperhr: 5000,
  },
  {
    id: 3,
    name: "Suite Business Hall",
    status: 'true',
    amenities: "TV, Projector, Wi-Fi, Zoom Meeting",
    seats: 20,
    priceperhr: 10000,
  },
]

let bookedRoom = [
    {
      customer_name: 'Harish',
      starttime: '10:00 AM',
      endtime: '12:00 PM',
      room_id: 3,
      Date: '20/08/2024',
      booking_id: 1,
      booking_date: '20/08/2024',
      status: 'booked'
    }
  ]

//GET ALL ROOM
const getAllRoom = (req, res) => {
  try {
     res.status(200).json({
      message: "Room Details fetched Succesfully",
      data:rooms
    })
  } catch (error) {
    res.status(500).json({
      message: "Internel server error",
    });
  }
};

//Create Room

const createRoom=(req,res)=>{
    try {
        console.log("Create Room")
        console.log(req.body)
        req.body.id=rooms.length ? rooms[rooms.length-1].id+1 : 1
        rooms.push(req.body)
        res.status(201).json({
            message:"Room Created Successfully"
        })
        
    } catch (error) {
        res.status(500).json({
        message: "Internel server error",
        })
    }
}

//Book a Room
const bookRoom=(req,res)=>{
    try {
        //console.log("Booking Room")
        //console.log(req.body)
        let {customer_name,room_id,date,starttime,endtime}=req.body
        let roomstatus=rooms.filter((e)=>e.status==="true" && e.id===room_id)
        //console.log(roomstatus)
        //console.log(roomstatus)
        if (roomstatus.length>0){
            
            //Check whether hall is already booked with same Date
            //console.log(date)
            let Datechecker= bookedRoom.filter((e)=> (e.Date===date && e.room_id===room_id))
            console.log(Datechecker.length)
            if(Datechecker.length==0){
                console.log("Hall Available")
                let booking = {
                    customer_name,
                    starttime,
                    endtime,
                    room_id,
                    Date: date,
                    booking_id: bookedRoom.length ? bookedRoom[bookedRoom.length-1].booking_id+1 : 1,
                    booking_date: format(new Date,'dd/MM/yyyy'),
                    status: "booked",
                };
              bookedRoom.push(booking);
              res.status(201).json({
                message:"Room Booking Pass",
                data:bookedRoom
            })
            }
            else{
                res.status(201).json({
                    message:"Hall not Available for Booking",
                    data:bookedRoom
                })
            }
            
        }
        else{
            console.log("Hall not found")
            res.status(201).json({
                message:"Hall not Found",
                data:bookedRoom
            })
        }
        
    } catch (error) {
        res.status(500).json({
        message: "Internel server error",
        })
    }
}

// Get Booked Data

const getBookedData=(req,res)=>{
    try {
        let result=[]
        console.log(bookedRoom)
        if (bookedRoom.length>0){
        bookedRoom.map((e)=>{
            let bookedrooms= rooms.map((i)=>{
                if(i.id===e.room_id)
                {
                    return{
                        Room_Name:i.name,
                        Booked_Status:e?"Booked":"Available",
                        Customer_Name:e.customer_name,
                        Date:e.Date,
                        Start_Time:e.starttime,
                        End_Time:e.endtime
                    }
                }
            })
            bookedrooms=bookedrooms.filter((e)=>e!==undefined)
            result.push(bookedrooms)
        })
        res.status(200).json({
            message: "Fetching Booked Data",
            data: result
        })
        }
    else{
        res.status(200).json({
            message: "No Booked Data",
        })
    }
        
    } catch (error) {
        res.status(500).json({
            message: "Internel server error",
            data:error.message
            })
    }
}

const getCustData=(req,res)=>{
    try {
        console.log('Customer Data')
        let result=[]
        console.log(bookedRoom)
        if (bookedRoom.length>0){
        bookedRoom.map((e)=>{
            let bookedrooms= rooms.map((i)=>{
                if(i.id===e.room_id)
                {
                    return{
                        Customer_Name:e.customer_name,
                        Room_Name:i.name,
                        Date:e.Date,
                        Start_Time:e.starttime,
                        End_Time:e.endtime
                    }
                }
            })
            bookedrooms=bookedrooms.filter((e)=>e!==undefined)
            result.push(bookedrooms)
        })

        res.status(200).json({
            message: "Fetching Customer Data",
            data: result
        })
    
    }
    }
     catch (error) {
        res.status(500).json({
            message: "Internel server error",
            data:error.message
            })

        }
    }

const getCustCount=(req,res)=>{
    try {
        console.log('Customer Data')
        let result=[]
        let {customer_name}=req.params
        console.log(customer_name)
        if (bookedRoom.length>0){
            bookedRoom.map((e)=>{
                let bookedrooms= rooms.map((i)=>{
                    if(i.id===e.room_id && e.customer_name===customer_name) 
                    {
                        return{
                            Customer_Name:e.customer_name,
                            Room_Name:i.name,
                            Date:e.Date,
                            Start_Time:e.starttime,
                            End_Time:e.endtime,
                            BookingId:e.booking_id,
                            Booking_Date:e.booking_date,
                            Booking_Status:"Booked"
                        }
                    }
                })
                bookedrooms=bookedrooms.filter((e)=>e!==undefined)
                result.push(bookedrooms)
            })
    
            res.status(200).json({
                message: "Fetching Customer Data",
                data: result
            })
    
    }
    }
     catch (error) {
        res.status(500).json({
            message: "Internel server error",
            data:error.message
            })

        }

}

export default{
    getAllRoom, createRoom, bookRoom, getBookedData, getCustData, getCustCount
}