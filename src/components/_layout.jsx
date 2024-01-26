import React from "react";
import Navbar from "./_navbar";
import Footer from "./_footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
