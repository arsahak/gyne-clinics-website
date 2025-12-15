import { auth } from "@/auth";
import Navbar from "./Navbar";

const MainNavbar = async () => {
  const session = await auth();
  const isLoggedIn = session?.user ? true : false;

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default MainNavbar;
