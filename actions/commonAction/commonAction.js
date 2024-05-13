"use client";

export function changeDateToString(date) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
}

export const convertToCSV = async (data) => {
  const header = Object.keys(data[0]).join(",");
  const rows = data.map((row) => Object.values(row).join(","));
  return [header, ...rows].join("\n");
};

export async function exportCSVFile(currentData) {
  var csv = await convertToCSV(currentData);
  var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  var linkElement = document.createElement("a");
  "download", `${new Date()} Site Projects`;
  linkElement.href = URL.createObjectURL(blob);
  document.body.appendChild(linkElement);
  linkElement.click();
  document.body.removeChild(linkElement);
}
