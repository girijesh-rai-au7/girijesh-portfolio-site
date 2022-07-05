// import NavBar from './component/NavBar/NavBar.js'
import Home from './component/Home/Home.js'
import About from './component/About/About.js'
import Skills from './component/Skills/Skills.js'
import Contact from './component/Contact/Contact.js'
import Layout from './component/Layout/Layout.js'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
	return ( 
		
	<>
		<Router>
			<Routes>
			
	<Route  path ="/" element = {<Layout />} >
		<Route index element = {<Home />} />
	<Route path = "about" element = {<About />} />
	<Route path ="skills" element = {<Skills />} />
	<Route path ="contact" element = {<Contact />} />
	</Route>
	

	
	</Routes>
	</Router>

	
	</> 
	);
}
 
export default App;