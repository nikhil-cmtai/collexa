import React from "react";
import Header from "@/components/layouts/website/Header";
import Footer from "@/components/layouts/website/Footer";
import FloatingButtons from "@/components/layouts/website/floating-buttons";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="light">
      <Header />
      {children}
      <Footer />  
      <FloatingButtons />
    </div>
  );
};

export default WebsiteLayout;