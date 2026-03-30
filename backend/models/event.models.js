import mongoose from "mongoose";

const speakerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    image: { type: String, default: null },
  },
  { _id: false }
);

const agendaItemSchema = new mongoose.Schema(
  {
    time:  { type: String, required: true },
    title: { type: String, required: true },
    desc:  { type: String, default: "" },
  },
  { _id: false }
);

const imageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    fileId: { type: String, default: null },
  },
  { _id: false }
);


const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      enum: ["technology", "business", "health", "education", "entertainment", "other"],
      required: [true, "Category is required"],
    },
    image: {
      type: imageSchema,
      default: null,
    },
    location: { 
      type: String,
      required: [true, "Location is required"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
    time: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: 0,
    },
    totalTickets: {
      type: Number,
      required: [true, "Total tickets required"],
      min: 1,
    },
    ticketsSold: {
      type: Number,
      default: 0,
      min: 0,
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "completed", "cancelled"],
      default: "active",
    },
    paymentDetails: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
    speakers: [speakerSchema],
    agenda:   [agendaItemSchema],
  },
  { timestamps: true }
);


/** Tickets still available */
eventSchema.virtual("ticketsRemaining").get(function () {
  return this.totalTickets - this.ticketsSold;
});

/** Total revenue for organizer dashboard */
eventSchema.virtual("totalRevenue").get(function () {
  return this.price * this.ticketsSold;
});

eventSchema.set("toJSON",   { virtuals: true });
eventSchema.set("toObject", { virtuals: true });

eventSchema.index({ organizer: 1, status: 1 }); // organizer events list
eventSchema.index({ date: 1 });                  // upcoming events sort
eventSchema.index({ category: 1 });              // category filter

export default mongoose.model("Event", eventSchema);