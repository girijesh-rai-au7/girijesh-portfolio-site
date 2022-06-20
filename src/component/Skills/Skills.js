import Pageheader from "../Pageheader/Pageheader";
import'./Skills.css';
import skillImage from '../images/undraw_multitasking.svg'
const frontEndSkills = <ul>
	<li>Frontend</li>
	<li>React-HTML-CSS-Redux</li>
</ul>
const backEndSkills = <ul>
	<li>Backend</li>
	<li>Node.js</li>
	<li>Expressjs</li>
	</ul>
const databaseSkills = <ul><li>MongoDB</li></ul>
const otherSkills = <ul><li>Github</li></ul>
const totalSkills = [frontEndSkills,backEndSkills,databaseSkills,otherSkills]
const Skills = () => {
	return (
	<div className="Skills"> 
		<Pageheader title = {"What about skill"}/>
		<p> I'm a life long learner and enjoy learning new Stuff.
			Below are some of the programming languages,toolkits,frameworks,
			that I worked with and like.
			Some of them I control better than other.
		</p>
		<div className = "Container">
			<img src = {skillImage} alt= "skillImage" />
        {totalSkills.map((skills) =>{
			return(
				<div className = "List">
					{skills}
				</div>
			);
		})}

		</div>
		</div>
	);
		 
}
 
export default Skills;