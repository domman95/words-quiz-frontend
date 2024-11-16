import { RootLayout } from "./RootLayout.tsx";
import { Outlet } from "react-router-dom";
import { PublicNavbar } from "../components/PublicNavbar.tsx";

export const PublicLayout = () => {
  return (
    <RootLayout navbar={<PublicNavbar />}>
      <Outlet />
    </RootLayout>
  );
};
