import Dashboard from "@/component/dashboard/DashboardOverview";
import { Suspense } from "react";

const DashboardContent = () => {
  return <Dashboard />;
};

const page = () => {
  return (
    <div>
      <Suspense fallback={<div className="flex items-center justify-center h-64">Loading...</div>}>
        <DashboardContent />
      </Suspense>
    </div>
  );
};

export default page;
