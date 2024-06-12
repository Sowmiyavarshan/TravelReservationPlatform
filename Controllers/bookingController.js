import Booking from './../models/Booking.js'


// create new booking
// export const createBooking = async(req,res) => {
//    const newBooking = new Booking(req.body)

//    try {
//       const savedBooking = await newBooking.save()

//       res.status(200).json({success:true, message:"Your tour is booked!", data:savedBooking})
//    } catch (error) {
//       res.status(500).json({success:true, message:"Internal server error!"})
//    }
// }

export const createBooking = async (req, res) => {
   const { startDate } = req.body;

   // Check if the provided startDate is today or a future date
   if (!startDate || new Date(startDate) < new Date()) {
      return res.status(400).json({ success: false, message: 'Start date must be today or a future date.' });
   }

   const newBooking = new Booking(req.body);

   try {
      const savedBooking = await newBooking.save();

      res.status(201).json({ success: true, message: "Your tour is booked!", data: savedBooking });
   } catch (error) {
      res.status(500).json({ success: false, message: "Internal server error!" });
   }
};

// get single booking
export const getBooking = async(req,res) => {
   const id = req.params.id
   
   try {
      const book = await Booking.findById(id)

      res.status(200).json({success:true, message:"Successful!", data:book})
   } catch (error) {
      res.status(404).json({success:true, message:"Not Found!"})
   }
} 


// get all booking
export const getAllBooking = async(req,res) => {
   
   try {
      const books = await Booking.find()

      res.status(200).json({success:true, message:"Successful!", data:books})
   } catch (error) {
      res.status(500).json({success:true, message:"Internal server error!"})
   }
} 