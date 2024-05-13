"use client";
import NavBar from "@/components/navBar/navBar";
import SideBar from "@/components/navBar/sideBar";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

const Main = ({ children }) => {
  const router = usePathname();
  // Pass router.pathname as a prop to children
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { page: router })
  );

  return (
    <>
      <div className="flex bg-white">
        <NavBar />
        <SideBar />
        {childrenWithProps}
      </div>
    </>
  );
};

export default Main;
