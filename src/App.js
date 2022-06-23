import NavBar from './component/NavBar/NavBar.js'
import Home from './component/Home/Home.js'
import About from './component/About/About.js'
import Skills from './component/Skills/Skills.js'
import Contact from './component/Contact/Contact.js'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
	return ( 
		
	<div>
		<NavBar />
		<Router>
			<Routes>
			
	<Route exact path ="/" element = {<Home />} />
	<Route path ="/navbar" element ={<NavBar />} />
	<Route path ="/about" element = {<About />} />
	<Route path ="/skills" element = {<Skills />} />
	<Route path ="/contact" element = {<Contact />} />
	
	</Routes>
	</Router>

	
	</div> 
	);
}
 
export default App;