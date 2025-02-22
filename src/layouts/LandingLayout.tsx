import { Outlet } from "react-router-dom";
import Header from "../components/structure/Header";
import Footer from "../components/structure/Footer";
import WhatsappButton from "../components/features/WhatsappButton";

export default function LandingLayout () {
  return (
    <>
      <Header />
      <WhatsappButton />
      <Outlet />
      <Footer />
    </>
  )
}