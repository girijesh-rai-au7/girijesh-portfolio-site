import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return ( 

		<div>
      <NavBar />
	  <Home />
	  <About />
	  <Contact />
	  <Skills />
	  <Outlet />
		</div>
	 );
}
 
export default Layout;