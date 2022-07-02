import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <Header />

      {/* mainbody */}
      <main className="main container">{children}</main>

      {/* footer */}
      <Footer />
    </div>
  );
};
