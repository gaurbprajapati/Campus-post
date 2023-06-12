import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true, default: "" },
    lastName: { type: String, required: true, default: "" },
    email: { type: String, required: true, default: "" },
    mobileNumber: { type: String, required: true, default: "" },

    portfolio: { type: String, default: "" },
    address: { type: String, default: "" },
    carrierObjective: { type: String, default: "" },

    education: { type: Array, default: [] },
    skills: { type: Array, default: [] },
    experience: { type: Array, default: [] },
    projects: { type: Array, default: [] },
    onlineProfile: { type: Array, default: [] },
    Certifications: { type: Array, default: [] },

    isAdmin: { default: false, type: Boolean },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
