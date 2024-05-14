export const SITEFIELD = [
  {
    name: "siteName",
    labelText: "Site Name",
    type: "text",
    helperText: "*This Name will appear be on Site Project.",
    placeholder: "Enter your Site Name",
    validationOptions: {
      required: "This Site Name is required",
    },
  },
  // If we add  more fields, they will be added here in the same manner as above. if we chnage a field's name, make sure to change
  {
    name: "siteAddress",
    labelText: "Site Address",
    type: "text",
    placeholder: "Enter Site address",
    validationOptions: {
      required: "Site Address is required",
    },
  },
  {
    name: "status",
    labelText: "Site Status",
    type: "select",
    options: ["Active", "On Hold", "Completed", "No Status"],
    validationOptions: { required: "Site Status is required" },
  },
  {
    name: "siteType",
    labelText: "Site Type",
    type: "select",
    options: ["Residential", "Commercial"],
    validationOptions: { required: "Site Type is required" },
  },
  {
    name: "siteDescription",
    labelText: "Site Description",
    size: true,
    type: "textarea",
    helperText: "*Describe Our Site Project",
    placeholder: "On this site we will be doing like loft conversion...",
  },
];

export const ROLEFIELD = [
  {
    name: "roleName",
    labelText: "Role Name",
    type: "text",
    helperText: "*This Name will appear be on Site Project.",
    placeholder: "Enter Role Name",
    validationOptions: {
      required: "Role Name is required",
    },
  },
  {
    name: "roleEmail",
    labelText: "Role Email",
    type: "email",
    helperText: "*Please enter a valid email address for this role.",
    placeholder: "Enter Role Email",
    inputMode: "email",
    validationOptions: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email format. Please check and try again.",
      },
    },
  },
  {
    name: "rolePhone",
    labelText: "Role Phone Number",
    type: "number",
    inputMode: "numeric",
    placeholder: "Enter Role Phone Number",
    validationOptions: {
      required: "Phone No. is required",
      pattern: {
        value: /^\d{10}$/,
        message: "Invalid phone number. Must be exactly 10 digits.",
      },
    },
  },
  {
    name: "roleType",
    labelText: "Role Type",
    type: "text",
    placeholder: "Enter Role Type",
    validationOptions: {
      required: "Role Type is required",
    },
  },
  {
    name: "projectSiteID",
    labelText: "Site Name",
    options: [],
    isSearch: true,
    size: true,
    selectLable: "Search site",
    validationOptions: { required: "Site Name is required" },
  },
];
