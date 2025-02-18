import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingLayout from "../layouts/LandingLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Servicios from "../pages/Servicios";
import Contacto from "../pages/Contacto";
import Login from "../pages/Login";

export function Routing() {
  return (
    <BrowserRouter basename="/administrables/cayego">
      <Routes>
        {/** Layout para la Landing */}
        <Route path="/" element={ <LandingLayout /> }>
          <Route index element={<Home/>}></Route>
          <Route path="nosotros" element={<About />} ></Route>
          <Route path="servicios" element={<Servicios /> }></Route>
          <Route path="contacto" element={<Contacto /> }></Route>
        </Route>
        <Route path="/login" element={<Login /> }></Route>
      </Routes>

    </BrowserRouter>
  )
}