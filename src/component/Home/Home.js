import './Home.css'
import myimage1 from '../images/my-logo.png'
import myimage2 from '../images/myimage.svg'
// import earth from '../images/earth.svg'

const Home = () => {
	return (
	<div className="Home"> 
	<div className="Container">
    <h1 className="Hello">Hello,World!</h1> 
	<h2 className = "Hello1">Welcome to my React Website</h2>
	</div>
		<img className='Code' src={myimage1} alt ="background " />
		<img className = "Code1" src ={myimage2} alt= 'background' />
		</div>
	);
}
 
export default Home;