import { auth } from "@/auth";
import Navbar from "./Navbar";

const MainNavbar = async () => {
  const session = await auth();
  const isLoggedIn = session?.user ? true : false;

  console.log("isLoggegfdgfdIn", session);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default MainNavbar;
