"use client";
// import { addEmploye } from "@/actions/employeAction/employeAction";
import { handleEmploye } from "@/actions/employeAction/employeAction";
import { getAllProjects } from "@/actions/siteProject/siteProjectAction";
import Button from "@/components/Button/button";
import SearchableSelect from "@/components/SearchSelect/Select";
import {
  DatePicker,
  Label,
  RadioSection,
  TextFormInput,
} from "@/components/fromInput/FormInput";
import { COUNTRIES } from "@/data/data";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const AddEmployee = () => {
  const {
    control,
    getValues,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { paymentType: "Monthly" },
  });
  const [siteProjects, setSiteProjects] = useState([]);

  // const create = (data) => console.log(data);
  const create = async (data) => {
    console.log(data);
    try {
      const response = await handleEmploye(data);
      console.log("main data response ...", response);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSelect = (selectedOption) => {
    // Set the selected option to the form field
    setValue("country", selectedOption.label, { shouldValidate: true });
  };
  const onOptionChange = (e) => {
    setValue("employeType", e.target.value, { shouldValidate: true });
    if (e.target.value === "Payroll") {
      setValue("paymentType", "Monthly", { shouldValidate: true });
    } else {
      setValue("paymentType", "Weekly", { shouldValidate: true });
    }
  };

  // Get all Site Project s for the project select input
  useEffect(() => {
    const fetchSiteProject = async () => {
      const response = await getAllProjects();
      //change key name like siteName to lable
      if (!response)
        return alert("You have to add first Site Project At least One");
      setSiteProjects(
        JSON.parse(response.data).map((item) => ({
          code: item._id,
          label: item.siteName,
        })),
      );
    };
    fetchSiteProject();
  }, []);

  return (
    <div className="h-full w-full mt-8 bg-gray-50 relative overflow-y-auto lg:ml-64">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-left">
            <h1 className="text-xl font-bold text-gray-800">
              New Employe Form
            </h1>
            <p className="text-sm text-gray-500">
              Create a new employe account for our system
            </p>
          </div>
        </div>

        <div className="mt-4 mx-auto bg-white">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit(create)}>
              <div className="grid gap-4 lg:gap-6">
                {/* First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <TextFormInput
                    {...register("firstName", {
                      required: "First Name is Required",
                    })}
                    cls={`${errors.firstName ? "border-red-500" : ""}`}
                    errorMsg={errors.firstName?.message}
                    type="name"
                    labelText="First Name"
                    placeholder="Jhone"
                    helperText="*This Name will appear be on Site Project."
                  />

                  <TextFormInput
                    {...register("lastName", {
                      required: "Last Name is Required",
                    })}
                    cls={`${errors.lastName ? "border-red-500" : ""}`}
                    errorMsg={errors.lastName?.message}
                    type="name"
                    labelText="Last Name"
                    placeholder="Doe"
                  />
                </div>
                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <TextFormInput
                    type="email"
                    // {...register("email", emailValidation())}
                    {...register("email", {
                      pattern: {
                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Email address must be a valid address",
                      },
                    })}
                    errorMsg={errors.email?.message}
                    labelText="Email"
                    placeholder="example@mail.com"
                    inputMode="email"
                  />
                  <TextFormInput
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\d{10}$/i,
                        message: "Phone Number exactly 10 digits",
                      },
                    })}
                    cls={`${
                      errors.phone?.type === "required" ? "border-red-500" : ""
                    }`}
                    type="tel"
                    errorMsg={errors.phone?.message}
                    pattern="[0-9]*"
                    inputMode="numeric"
                    maxLength={10}
                    labelText="Phone Number"
                    placeholder="1234567890"
                    tooltiptext="This field is optional and can be left empty."
                  />
                </div>
                {/* <!-- Address Section --> */}
                <div className="py-6 first:pt-0 last:pb-0  border-t first:border-transparent border-gray-200">
                  <span className="inline-block text-sm text-gray-700 font-medium">
                    Billing address
                  </span>

                  <div className="mt-2 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <TextFormInput
                        type="address"
                        // {...register("email", emailValidation())}
                        cls={`${
                          errors.address?.type === "required"
                            ? "border-red-500"
                            : ""
                        }`}
                        {...register("address", {
                          required: true,
                        })}
                        placeholder="Apt, Syuite, Building"
                      />
                      <TextFormInput
                        type="street"
                        // {...register("email", emailValidation())}
                        {...register("streetAddress")}
                        placeholder="Street Address (Optional)"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                      <TextFormInput
                        type="city"
                        // {...register("email", emailValidation())}
                        cls={`w-full ${
                          errors.city?.type === "required"
                            ? "border-red-500"
                            : ""
                        }`}
                        {...register("city", {
                          required: true,
                        })}
                        placeholder="City"
                      />
                      <TextFormInput
                        type="text"
                        // {...register("email", emailValidation())}
                        cls={`w-full ${
                          errors.zipCode?.type === "required"
                            ? "border-red-500"
                            : ""
                        }`}
                        {...register("zipCode", {
                          required: true,
                        })}
                        placeholder="Zip/Postal Code"
                      />
                      {/* Searchable Select is working for production */}

                      <SearchableSelect
                        {...register("country", {
                          required: "Country is required",
                        })}
                        cls={`${errors.country ? "border-red-500" : " "}`}
                        options={COUNTRIES}
                        selectLable="Country"
                        errorMsg={errors.country?.message}
                        onSelect={handleSelect}
                      />
                    </div>
                  </div>
                </div>
                {/* <!-- Address Section --> */}
                {/* Radio Section for Employe Type & Payment Type  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <div className="sm:col-span-3">
                      <Label labelText={"Employe Type"} />
                    </div>
                    <div className="col-span-6 sm:col-span-9">
                      <div className="sm:flex">
                        <RadioSection
                          {...register("employeType", {
                            required: true,
                          })}
                          type="radio"
                          value="CIS"
                          name="employeType"
                          onChange={onOptionChange}
                        />
                        <RadioSection
                          {...register("employeType", {
                            required: true,
                          })}
                          name="employeType"
                          checked={true}
                          value="Payroll"
                          type="radio"
                          onChange={onOptionChange}
                        />
                        {/* <RadioSection
                          type="radio"
                          {...register("employeType", {
                            required: true,
                          })}
                          name="employeType"
                          value="Cash"
                          onChange={onOptionChange}
                        /> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <TextFormInput
                      {...register("paymentType")}
                      type="name"
                      labelText="Payment Type"
                      value={getValues("paymentType")}
                      placeholder={getValues("paymentType")}
                      disabled={true}
                    />
                  </div>
                </div>
                {/* Radio Section End */}
                {/* if CIS OR PAYROLL for required  fields show else hide them */}
                {getValues("employeType") !== "Cash" && (
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 lg:gap-6">
                    <div className="sm:col-span-2">
                      <TextFormInput
                        {...register("accountName", {
                          required: "Account Name is Required",
                        })}
                        cls={`${errors.accountName ? "border-red-500" : ""}`}
                        type="name"
                        errorMsg={errors.accountName?.message}
                        placeholder="Account Name"
                        labelText="Bank Account Name"
                      />
                    </div>
                    <TextFormInput
                      {...register("accountNumber", {
                        required: "Account Number is Required",
                        pattern: {
                          value: /^\d{8}$/i,
                          message: "Must be exactly  8 digits",
                        },
                        // pattern: {
                        //   value: /^[0-9]{5}-[0-9]{5}$/i,
                        //   message: "Should match the format like : xxxx-xxxxxx",
                        // },
                      })}
                      cls={`${errors.accountNumber ? "border-red-500" : ""}`}
                      errorMsg={errors.accountNumber?.message}
                      type="number"
                      inputMode="numeric"
                      maxLength={8}
                      placeholder="Account Number"
                      labelText="Bank Account Number"
                    />

                    <TextFormInput
                      {...register("sortCode", {
                        required: "Sort Code is Required",
                        // extact 6  digits only
                        pattern: {
                          value: /^\d{6}$/,
                          message: "Must be exactly 6 digits.",
                        },
                        // minLength: { value: 6, message: "Must be 6 digits" },
                      })}
                      cls={`${errors.sortCode ? "border-red-500" : ""}`}
                      errorMsg={errors.sortCode?.message}
                      type="number"
                      inputMode="numeric"
                      placeholder="Sort Code"
                      labelText="Sort Code"
                    />
                  </div>
                )}
                {/* Project Site & PayRate */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <SearchableSelect
                    {...register("projectSite", {
                      required: "Project Site is required",
                    })}
                    cls={`${errors.projectSite ? "border-red-500" : " "}`}
                    options={siteProjects}
                    selectLable="ProjectSite"
                    onSelect={(op) =>
                      setValue("projectSite", op.code, {
                        shouldValidate: true,
                      })
                    }
                    errorMsg={errors.projectSite?.message}
                    labelText={"Project Site"}
                  />

                  <TextFormInput
                    {...register("payRate", {
                      required: "Pay Rate is required",
                    })}
                    cls={`${
                      errors.payRate?.type === "required"
                        ? "border-red-500"
                        : ""
                    }`}
                    errorMsg={errors.payRate?.message}
                    type="number"
                    step="any"
                    inputMode="decimal"
                    labelText="Pay Rate (£)"
                    placeholder="enter Payrate per hours "
                  />
                </div>
                {/* Start Date & Employe Role & EmployeNI */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 lg:gap-6">
                  <div className="sm:col-span-2">
                    <TextFormInput
                      {...register("employeNI", {
                        required: "NI Number is required",
                      })}
                      errorMsg={errors.employeNI?.message}
                      cls={`${errors.employeNI ? "border-red-500" : ""}`}
                      type="text"
                      labelText="Employe NI Number"
                      placeholder="Enter employe NI number here..."
                    />
                  </div>

                  <Controller
                    control={control}
                    name="startDate"
                    render={({ field }) => (
                      <DatePicker
                        cls={`${errors.startDate ? "border-red-500" : ""}`}
                        name="startDate"
                        control={control}
                        labelText={"Start Date"}
                        placeholder={"Select a Start Date"}
                        errorMsg={errors.startDate?.message}
                        {...field}
                      />
                    )}
                  />
                  <TextFormInput
                    {...register("employeRole", {
                      required: "Employee Role is required",
                    })}
                    errorMsg={errors.employeRole?.message}
                    cls={`${errors.employeRole ? "border-red-500" : ""}`}
                    type="text"
                    labelText="Employe Type"
                    placeholder="electric, mechanical..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 grid place-items-center">
                <Button
                  type="submit"
                  cls={
                    "xl:w-96 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-cyan-600 text-white hover:bg-cyan-700 disabled:opacity-50 disabled:pointer-events-none"
                  }
                  text={"Add Employee"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
