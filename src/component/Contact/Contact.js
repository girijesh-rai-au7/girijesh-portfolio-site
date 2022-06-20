import {FaLinkedin,FaGithub} from 'react-icons/fa'
import'./Contact.css'
const handleURL = (url)=>{
	return ()=>window.open(url,"_blank")
}
const Contact = () => {
	return (
	<div className='Contact'>
		<div className='ContactIcons'>
		<FaLinkedin color="white" size ="30px" style ={{padding:'1%'} } 
		onClick={handleURL("https://www.linkedin.com/in/girijesh-rai-46648892/")} />
		<FaGithub color="white" size = "30px" style ={{padding:'1%'}}
		onClick={handleURL("https://github.com/girijesh-rai-au7")} />
		</div>
		</div>
		);
}
 
export default Contact;