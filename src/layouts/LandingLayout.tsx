import { Outlet } from "react-router-dom";
import Header from "../components/structure/Header";
import Footer from "../components/structure/Footer";

export default function LandingLayout () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}