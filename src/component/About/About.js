import Pageheader from "../Pageheader/Pageheader";
import Pintu from '../images/Pintu.jpg'
import './About.css';

const About = () => {
	return (
		
		<div className = "About">
     <Pageheader title = "About Me"/>

	 <div className = "Container">

<div className = "Text">
<h2>Hello,I'm a software developer based in India.</h2>
<p>My area of interest is MERN development</p>
</div>
<div className = "myphoto">

<img className ="myself" src = {Pintu} alt = "Pintu" />
</div>

	 </div>
			

		
		
		</div>
		);
}
 
export default About ;