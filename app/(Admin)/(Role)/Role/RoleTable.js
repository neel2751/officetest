"use client";
import React, { useState, useEffect, useCallback } from "react";
import Search from "@/components/Search/search";
import {
  TableAction,
  TableBody,
  TableData,
  TableDataStatus,
  TableHead,
  TableHeading,
  TableTH,
} from "@/components/Table";
import { useDebounce } from "@/helper/debounceHelper";
import NewFormModel from "@/components/ModelForm/FormModel";
import {
  addRole,
  roleUpdateStatus,
  searchRoleByKeyword,
  updateRoleById,
} from "@/actions/roleAction/roleAction";
import { ROLEFIELD as fields } from "@/allFormField/field";
import { getAllProjects } from "@/actions/siteProject/siteProjectAction";
import { TableSiteStatus } from "@/components/Table/Table";

const RoleTable = ({ page }) => {
  const [isOpen, setIsOpen] = useState(false); // OPEN MODEL STATE
  const [editId, setEditId] = useState(""); // EDIT ID FOR OPEN MODEL
  const [search, setSearch] = useState(); // Main Search Pass into Debounce
  const searchDebounce = useDebounce(search, 500); // This is Debounce Search
  const [roles, setRoles] = useState([]); // ALL DATA IS HERE
  const [currentPage, setCurrentPage] = useState(1); //  CURRENT PAGE NUMBER
  const [initialValue, setInitialValue] = useState(null); // INITIAL VALUE FROM API
  const [resetFlag, setResetFlag] = useState(false);
  const [siteOptions, setSiteOptions] = useState([]); // FOR SITE OPTION SEARCH FILED
  let i = 1; // FOR ID GENERATION

  // HANDLE PAGINATION
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const pageSize = Math.max(10);
  const lastPage = Math.ceil(roles.length / pageSize);

  const currentData = roles.slice(
    (currentPage - 1) * pageSize,
    currentPage === lastPage ? roles.length : currentPage * pageSize,
  );
  // Handle Add Site Project
  const handleSubmit = async (data) => {
    if (editId) {
      const response = await updateRoleById(editId, data);
      if (response.message) alert(response.message);
      if (response.status) {
        onHandleCloseModal();
      }
    } else {
      const response = await addRole(data);
      if (response.status === 201) {
        onHandleCloseModal();
      } else {
        alert("Somthing  went wrong please try again later");
      }
    }
  };
  // Handle Active /Inactive Status
  const handleActiveStatus = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to Chnage Role Status?",
    );
    if (confirmed) {
      const response = await roleUpdateStatus(id); // Call the onDelete function provided by the parent component
      if (response.status) {
        fetchData();
      }
    }
  };
  // handle Open Model
  const handleOpenModel = async (data) => {
    setEditId(data._id);
    setInitialValue(data);
    // const newData = data.projectSiteID.siteName;
    // setInitialValue({ ...data, projectSiteID: newData });
    setIsOpen(!isOpen);
  };
  // Handle Close Model
  const onHandleCloseModal = () => {
    setIsOpen(false);
    setInitialValue("");
    setResetFlag(!resetFlag);
    setEditId("");
  };
  // FETCH ALL DATA WITH USER SEARCH OR ALL DATA WITH  PAGINATION
  const fetchData = useCallback(async () => {
    try {
      const searchPro = await searchRoleByKeyword(searchDebounce);
      if (searchPro.data) {
        setRoles(JSON.parse(searchPro.data));
      } else {
        console.error("Invalid data structure:", searchPro);
      }
    } catch (error) {
      console.error("Error fetching or searching projects:", error);
    }
  }, [searchDebounce]);
  const getAllSite = async () => {
    try {
      const response = await getAllProjects();
      //change key name like siteName to lable
      if (!response)
        return alert("You have to add first Site Project At least One");
      setSiteOptions(
        JSON.parse(response.data).map((item) => ({
          code: item._id,
          label: item.siteName,
        })),
      );
    } catch (error) {
      console.log("Error fetching options", error);
    }
  };
  const updatedRoleField = fields.map((field) => {
    if (field.name === "projectSiteID") {
      return {
        ...field,
        options: siteOptions,
      };
    }
    return field;
  });
  // Get all projects data
  useEffect(() => {
    getAllSite();
    fetchData(); // Call The Function
  }, [isOpen, resetFlag, fetchData]);
  //   const getRoles = async () => {
  //     try {
  //       let res = await fetch("/api/role?page=" + pageNumber, { method: "GET" });
  //       if (!res.ok) throw new Error("Could not fetch the data");
  //       let json = await res.json();
  //       setroles(json.data);
  //       setPageNumber(json.current_page)
  //     } catch (error) {
  //       console.log(`Error! ${error}`);
  //     }
  //   };

  //   React.useEffect(() => {
  //     getRoles();
  //     }, [searchDebounce]);
  return (
    <div className="h-full w-full mt-16 bg-gray-50 relative overflow-y-auto lg:ml-64">
      {/* Header */}
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
        <div className="mb-1 w-full">
          <TableHeading
            title={`All ${page.split("/")[1]}`}
            slug={`All ${page.split("/")[1]}`}
          />
          <div className="sm:flex">
            <div className="sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0">
              <Search onChange={setSearch} placeholder="Search Role" />
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
              <TableAction
                svg={
                  <svg
                    className="-ml-1 mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                }
                cls={
                  "w-1/2 sm:w-auto text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200"
                }
                btnName={"Add Role"}
                handleClick={() => setIsOpen(!isOpen)}
              />
              <TableAction
                svg={
                  <svg
                    className="-ml-1 mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                }
                btnName={"Export"}
                cls={
                  "w-1/2 sm:w-auto text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200"
                }
                // handleClick={() => exportCSVFile(currentData)}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Table */}
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden">
              <table className="table-fixed min-w-full divide-y divide-gray-200">
                <TableHead>
                  <TableTH title="id" />
                  <TableTH title="role name" />
                  <TableTH title="role type" />
                  <TableTH title="site status" />
                  <TableTH title="site name" />
                  <TableTH title="status" />
                  <TableTH title="action" />
                </TableHead>
                <TableBody>
                  {roles &&
                    currentData.map((item) => (
                      <tr key={item._id}>
                        <TableData title={i++} />
                        <TableData title={item.roleName} />
                        <TableData title={item.roleType} />
                        <TableSiteStatus
                          title={
                            item.projectSiteID.status || item.siteInfo[0].status
                          }
                        />
                        <TableData
                          title={
                            item.projectSiteID.siteName ||
                            item.siteInfo[0].siteName
                          }
                        />

                        <TableDataStatus
                          isActive={item.isActive}
                          handleClick={() => handleActiveStatus(item._id)}
                        />
                        <td className="p-4 whitespace-nowrap space-x-2">
                          <TableAction
                            svg={
                              <svg
                                className="mr-1 h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                                <path
                                  fillRule="evenodd"
                                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            }
                            btnName={`Edit ${page.split("/")[1]}`}
                            cls="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200"
                            handleClick={() => handleOpenModel(item)}
                          />
                          <TableAction
                            svg={
                              <svg
                                className="mr-1 h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            }
                            btnName={`Delete ${page.split("/")[1]}`}
                            cls="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300"
                            handleClick={() => handleOpenModel(item)}
                          />
                        </td>
                      </tr>
                    ))}
                </TableBody>
                <div onClick={onPageChange}></div>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Table End */}
      <NewFormModel
        title={"Add New Role"}
        fields={updatedRoleField}
        initialValues={initialValue}
        onSubmit={handleSubmit}
        isOpen={isOpen}
        btnName={"Create New Role"}
        editBtnName={"Update Role Information"}
        id={editId}
        onHandleCloseModal={onHandleCloseModal}
        resetFlag={resetFlag}
        setResetFlag={setResetFlag}
      />
    </div>
  );
};

export default RoleTable;
