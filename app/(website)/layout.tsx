import React from "react";
import Header from "@/components/layouts/website/Header";
import Footer from "@/components/layouts/website/Footer";
import FloatingButtons from "@/components/layouts/website/floating-buttons";
import Topbar from "@/components/layouts/website/topbar";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="light">
        <Topbar />
        <Header />
        {children}
        <Footer />  
        <FloatingButtons />
    </div>
  );
};

export default WebsiteLayout;