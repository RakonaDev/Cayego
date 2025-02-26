import { Outlet } from "react-router-dom";
import MenuHeader from "../components/structure/MenuHeader";
import UserHeader from "../components/structure/UserHeader";
import AuthProvider from "../context/AuthProvider";
export default function PanelLayout() {
  return (
    <>
      <AuthProvider>
        <MenuHeader />
        <UserHeader />
        <Outlet />
      </AuthProvider>
    </>
  )
}