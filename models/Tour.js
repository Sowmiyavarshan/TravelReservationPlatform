import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxGroupSize: {
      type: Number,
      required: true,
    },

    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
      
    ],
    transportation: {
      train: {
        available: {
          type: Boolean,
          default: false,
        },
        details: {
          type: String,
        },
      },
      bus: {
        available: {
          type: Boolean,
          default: false,
        },
        details: {
          type: String,
        },
      },
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },

  
{ timestamps: true }
);


export default mongoose.model("Tour", tourSchema);