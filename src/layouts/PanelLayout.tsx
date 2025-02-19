import { Outlet } from "react-router-dom";
import MenuHeader from "../components/structure/MenuHeader";
import UserHeader from "../components/structure/UserHeader";
export default function PanelLayout () {
  return (
    <>
      <MenuHeader />
      <UserHeader />
      <Outlet />
    </>
  )
}