import './Pageheader.css'
const Pageheader = (props) => {
	return (<div className = "Container">
		<hr />

<h1>{props.title}</h1>


	</div>  );
}
 
export default Pageheader;