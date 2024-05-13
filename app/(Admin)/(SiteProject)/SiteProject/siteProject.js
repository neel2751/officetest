"use client";
import NewFormModel from "@/components/ModelForm/FormModel";
import React, { Suspense, useEffect, useState } from "react";
import Search from "@/components/Search/search";
import { SITEFIELD as fields } from "@/allFormField/field";
import {
  addSiteProject,
  searchSiteProjectByKeywordNew,
  siteUpdateStatus,
  updateSiteProjectById,
} from "@/actions/siteProject/siteProjectAction";
import { useDebounce } from "@/helper/debounceHelper";
import PaginationHelper from "@/helper/paginationHelper";
import {
  changeDateToString,
  exportCSVFile,
} from "@/actions/commonAction/commonAction";
import {
  TableHeading,
  TableHead,
  TableTH,
  TableBody,
  TableData,
  TableDataStatus,
  TableAction,
  TableSiteStatus,
} from "@/components/Table/Table";

const SiteProject = () => {
  const [isOpen, setIsOpen] = useState(false); // OPEN MODEL STATE
  const [editId, setEditId] = useState(""); // EDIT ID FOR OPEN MODEL
  const [search, setSearch] = useState(); // Main Search Pass into Debounce
  const searchDebounce = useDebounce(search, 500); // This is Debounce Search
  const [siteProjects, setSiteProjects] = useState([]); // ALL DATA IS HERE
  const [currentPage, setCurrentPage] = useState(1); //  CURRENT PAGE NUMBER
  const [initialValue, setInitialValue] = useState(null); // INITIAL VALUE FROM API
  const [resetFlag, setResetFlag] = useState(false);

  let i = 1; // FOR ID GENERATION

  // HANDLE PAGINATION
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const pageSize = Math.max(10);
  const lastPage = Math.ceil(siteProjects.length / pageSize);

  const currentData = siteProjects.slice(
    (currentPage - 1) * pageSize,
    currentPage === lastPage ? siteProjects.length : currentPage * pageSize
  );

  // Handle Add Site Project
  const handleSubmit = async (data) => {
    if (editId) {
      const response = await updateSiteProjectById(editId, data);
      if (response.status) {
        onHandleCloseModal();
      }
    } else {
      const response = await addSiteProject(data);
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
      "Are you sure you want to Chnage Status This Site?"
    );
    if (confirmed) {
      const response = await siteUpdateStatus(id); // Call the onDelete function provided by the parent component
      if (response.status) {
        fetchData();
      }
    }
  };
  const handleResetButtonClick = () => {
    setResetFlag(!resetFlag);
  };
  // handle Open Model
  const handleOpenModel = async (data) => {
    setEditId(data._id);
    setInitialValue(data);
    setIsOpen(!isOpen);
  };
  // Handle Close Model
  const onHandleCloseModal = () => {
    setIsOpen(false);
    setInitialValue("");
    handleResetButtonClick();
    setEditId("");
  };
  // FETCH ALL DATA WITH USER SEARCH OR ALL DATA WITH  PAGINATION
  const fetchData = async () => {
    try {
      const searchPro = await searchSiteProjectByKeywordNew(searchDebounce);
      if (searchPro.data) {
        setSiteProjects(JSON.parse(searchPro.data));
      } else {
        console.error("Invalid data structure:", searchPro);
      }
    } catch (error) {
      console.error("Error fetching or searching projects:", error);
    }
  };
  // Get all projects data
  useEffect(() => {
    fetchData(); // Call The Function
  }, [isOpen, searchDebounce, resetFlag]);

  return (
    <>
      {/* Header */}
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
        <div className="mb-1 w-full">
          <TableHeading title="All Project" slug="SiteProject" />
          <div className="sm:flex">
            <div className="sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0">
              <Search onChange={setSearch} placeholder="Search Projects" />
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
                btnName={"Add Site"}
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
                handleClick={() => exportCSVFile(currentData)}
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
                  <TableTH title="sitename" />
                  <TableTH title="Site Status" />
                  <TableTH title="Site Type" />
                  <TableTH title="date" />
                  <TableTH title="address" />
                  <TableTH title="status" />
                  <TableTH title="action" />
                </TableHead>
                <TableBody>
                  {siteProjects &&
                    currentData.map((item) => (
                      <tr key={item._id}>
                        <TableData title={i++} />
                        <TableData title={item.siteName} />
                        <TableSiteStatus title={item.status} />
                        <TableData title={item.siteType} />
                        <TableData title={changeDateToString(item.createdAt)} />
                        <TableData title={item.siteAddress || "Unavailable"} />
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
                            btnName="Edit Site"
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
                            btnName="Delete Site"
                            cls="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300"
                            handleClick={() => handleOpenModel(item)}
                          />
                        </td>
                      </tr>
                    ))}
                </TableBody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Table End */}

      <NewFormModel
        title={"Add New Site"}
        fields={fields}
        initialValues={initialValue}
        onSubmit={handleSubmit}
        isOpen={isOpen}
        btnName={"Create New Site"}
        editBtnName={"Update Site Information"}
        id={editId}
        onHandleCloseModal={onHandleCloseModal}
        resetFlag={resetFlag}
        setResetFlag={setResetFlag}
      />
    </>
  );
};

export default SiteProject;
