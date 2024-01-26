import React from "react";
import Header from "./_header";
import Footer from "./_footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
