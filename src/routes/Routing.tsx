import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingLayout from "../layouts/LandingLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Servicios from "../pages/Servicios";
import Contacto from "../pages/Contacto";
import Login from "../pages/Login";
import ServiceLayout from "../layouts/ServiceLayout";
import PanelLayout from "../layouts/PanelLayout";
import Dashboard from "../pages/Dashboard";
import PanelServicios from "../pages/PanelServicios";
import PanelInformacion from "../pages/PanelInformacion";
import InfoUser from "../pages/InfoUser";

export function Routing() {
  return (
    <BrowserRouter basename="/administrables/cayego">
      <Routes>
        {/** Layout para la Landing */}
        <Route path="/" element={ <LandingLayout /> }>
          <Route index element={ <Home/> }></Route>
          <Route path="nosotros" element={ <About /> } ></Route>
          <Route path="servicios" element={ <Servicios /> }></Route>
          <Route path="servicios/:id" element={ <ServiceLayout /> }></Route>
          <Route path="contacto" element={<Contacto /> }></Route>
        </Route>
        <Route path="/login" element={ <Login /> }></Route>
        <Route path="/admin" element={ <PanelLayout /> }>
          <Route path="dashboard" element={ <Dashboard /> }></Route>
          <Route path="servicios" element={ <PanelServicios /> }></Route>
          <Route path="conductores" element={ <PanelInformacion /> }></Route>
        </Route>
        <Route path="/conductor" element={ <InfoUser /> }></Route>
      </Routes>

    </BrowserRouter>
  )
}