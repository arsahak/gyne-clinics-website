import { auth } from "@/auth";
import Navbar from "./Navbar";

const MainNavbar = async () => {
  let isLoggedIn = false;

  try {
    const session = await auth();
    isLoggedIn = session?.user ? true : false;
  } catch (error) {
    console.error("Auth error in MainNavbar:", error);
    isLoggedIn = false;
  }

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default MainNavbar;
