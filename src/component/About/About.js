import Pageheader from "../Pageheader/Pageheader";
import Pintu from '../images/Pintu.jpg'
import './About.css';

const About = () => {
	return (
		
		<div className = "About">
     <Pageheader title = "About Me"/>

	 <div className = "Container">

<div className = "Text">
<h2>Hello,My name is Girijesh Rai.I am a software developer based in India.</h2>
<h3>My area of interest is MERN Development.</h3>
<h3>Currently working in Honeywell Automation India Ltd as Service Engineer</h3>

</div>
<div className = "myphoto">

<img className ="myself" src = {Pintu} alt = "Pintu" />
</div>

	 </div>
			

		
		
		</div>
		);
}
 
export default About ;