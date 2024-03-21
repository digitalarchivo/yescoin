// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header";

const MainLayout = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col" style={{ height: height }}>
        <Header />
        <main className="h-full">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
