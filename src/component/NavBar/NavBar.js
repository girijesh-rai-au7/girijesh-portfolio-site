import './NavBar.css'//import css files to style 
const NavBar = () => {
	return (
	<div className = "NavBar">
	<navbar>
		<ul>
			<li><a href='/'>Home</a></li>
			<li><a href = '/#About'>About Me</a></li>
			<li><a href='/#Skills'>Skills</a></li>
			<li><a href='/#Contact'>Contact</a></li>
		</ul>
       </navbar>
		</div> 
		);
}
 
export default NavBar;