import Footer from "components/common/Footer";
import Header from "components/common/Header";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header/>
        <div className="main-container">
          {children}
        </div>
      <Footer/>
    </div>
  );
};
export default MainLayout;
