import { Link} from 'react-router-dom';
import './NavBar.css'//import css files to style 
const NavBar = () => {
	return (
	<div className = "NavBar">
	<navbar>
		<ul>
			<li><Link to = "/">Home</Link></li>
			<li><Link to = "/about">About</Link></li>
			<li><Link to ="/skills">Skills</Link></li>
			<li><Link to = "/contact">Contact</Link></li>
		</ul>
       </navbar>
	   
		</div> 
		);
}
 
export default NavBar;