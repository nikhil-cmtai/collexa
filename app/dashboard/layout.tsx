import React from "react";
import Sidebar from "@/components/layouts/dashboard/Sidebar";
import Header from "@/components/layouts/dashboard/Header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <Header />
      {children}
    </div>
  );
};

export default DashboardLayout;