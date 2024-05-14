import mongoose from "mongoose";

const employeAddressSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    requied: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const bankDetailSchema = new mongoose.Schema({
  accountName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: Number,
    required: true,
  },
  sortCode: {
    type: Number,
    required: true,
  },
});

const employeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: true,
  },
  eAddress: {
    type: employeAddressSchema,
    required: true,
  },
  employeType: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String, // Monthly & Weekly
    required: true,
  },
  bankDetails: {
    type: bankDetailSchema,
    required: true,
  },
  payRate: {
    type: Number,
    required: true,
  },
  employeNI: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  employeRole: {
    type: String,
    required: true,
  },
});

const EmployeModel =
  mongoose.models.Employe || mongoose.model("Employe", employeSchema);
export default EmployeModel;
