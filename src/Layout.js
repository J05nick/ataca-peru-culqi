import { Outlet } from "react-router-dom";
import Cabecera from "./components/HEADER/Cabecera";
import Footer from "./components/FOOTER/Footer";

const Layout = () => (
  <>
    <Cabecera />
    <main style={{ minHeight: "80vh", padding: "2rem" }}>
      <Outlet />   {/* Aquí se inyecta Chiguata, Home, Eventos, etc. */}
    </main>
    <Footer />
  </>
);

export default Layout;

