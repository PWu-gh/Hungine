import React from "react";
import logo from "./img/Humpact_logo.png";
import "./App.css";

function App() {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		fetch("/api")
		.then((res) => res.json())
		.then((data) => setData(data.message));
	}, []);

	return (
		<div class = "canvas">
		
			<div class = "header">
				<div id="header_logo"><img src={logo} className="App-logo" alt="logo" /></div>
				<div id="header_title"><span class="title">Analysis engine</span></div>
			</div>

			<div class = "main">
				<div class="description_box">
					<div class="pad_horiz center">
						<div class="title">The AI boosted extra-financial tool by Humpact</div>
						<br/> 
						<div>
							Humpact réinvente le rôle des analystes dans les services financiers.
							Devenez votre propre analyste financier. 
							Humpact est un outil doté d'une intelligence artificielle qui aide les utilisateurs dans leurs investissements.</div>
					</div>
					
				</div>
				<div class="content_box">box</div> 
			</div>
			
			<div class = "footer">footer</div>

		</div>
	);
}


export default App;
