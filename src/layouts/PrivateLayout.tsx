import { RootLayout } from "./RootLayout.tsx";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar.tsx";

export const PrivateLayout = () => {
  return (
    <RootLayout navbar={<Navbar />}>
      <Outlet />
    </RootLayout>
  );
};
