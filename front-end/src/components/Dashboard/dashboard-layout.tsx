import { Outlet } from "react-router";
import { useState } from "react";

import { DashboardHeader } from "@/components/Dashboard/dasbhoard-header";
import { DashboardSidebar } from "@/components/Dashboard/dashboard-sidebar";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-muted/20">
      <DashboardSidebar collapsed={collapsed} onCollapse={() => setCollapsed((value) => !value)} />

      <div
        className={[
          "min-h-screen transition-[padding] duration-200",
          collapsed ? "lg:pl-[76px]" : "lg:pl-[254px]",
        ].join(" ")}
      >
        <DashboardHeader />

        <main className="p-5 lg:p-8">
          <div className="mx-auto max-w-[1440px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
