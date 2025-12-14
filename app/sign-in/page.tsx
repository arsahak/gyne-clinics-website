import SigninPage from "@/component/auth/SigninPage";
import { Suspense } from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 relative overflow-hidden px-4 pt-20 md:pt-[50px]">
      <Suspense fallback={<div>Loading...</div>}>
        <SigninPage />
      </Suspense>
    </div>
  );
};

export default page;
