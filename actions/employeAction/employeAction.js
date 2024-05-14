"use server";
// import { connect } from "@/dbConfig/dbConfig";

import EmployeModel from "../../models/employeModel";

// // import EmployeModel from "@/models/addEmployeModel";

// export const addEmploye = async (data) => {
//   try {
//     await connect(); //connect to the database
//     console.log("connected");
//     // const {
//     //   address,
//     //   streetAddress,
//     //   city,
//     //   zipCode,
//     //   country,
//     //   accountName,
//     //   accountNumber,
//     //   sortCode,
//     // } = data;
//     // const eAddress = {
//     //   address: address || "",
//     //   streetAddress: streetAddress || "",
//     //   city: city || "",
//     //   zipCode: zipCode || "",
//     //   country: country || "",
//     // };
//     // const bankDetail = {
//     //   accountName: accountName || "",
//     //   accountNumber: accountNumber || "",
//     //   sortCode: sortCode || "",
//     // };
//     // const addEmploye = await EmployeModel.create({
//     //   ...data,
//     //   eAddress: eAddress,
//     //   bankDetail: bankDetail,
//     // });
//     // console.log(addEmploye);
//     // return await res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

export const handleEmploye = async (data) => {
  console.log(data);
};
