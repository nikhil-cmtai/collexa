import React from "react";
import Header from "@/components/layouts/website/Header";
import Footer from "@/components/layouts/website/Footer";
import FloatingButtons from "@/components/layouts/website/floating-buttons";
import ReduxProvider from "@/components/providers/redux-provider";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="light">
      <ReduxProvider>
        <Header />
        {children}
        <Footer />  
        <FloatingButtons />
      </ReduxProvider>
    </div>
  );
};

export default WebsiteLayout;