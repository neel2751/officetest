import Main from "@/app/(Main)/Main";
import React from "react";
import Employee from "./Employee";
import AddEmployee from "../AddEmployee/addEmployee";

const page = () => {
  return (
    <Main>
      <AddEmployee />
    </Main>
  );
};

export default page;
