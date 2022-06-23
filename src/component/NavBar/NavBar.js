import './NavBar.css'//import css files to style 
const NavBar = () => {
	return (
	<div className = "NavBar">
	<navbar>
		<ul>
			<li><a href='/'>Home</a></li>
			<li><a href = '/about'>About Me</a></li>
			<li><a href='/skills'>Skills</a></li>
			<li><a href='/contact'>Contact</a></li>
		</ul>
       </navbar>
		</div> 
		);
}
 
export default NavBar;