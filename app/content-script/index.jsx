// Test some other npm modules
import "./npmModuleTest.jsx";

// create div if not exist
import createDiv from "./createRenderDiv.jsx";
let randomId = "randomIDAwesomeness";
createDiv(randomId);

// Start of the content script
import React from "react";
import { render } from "react-dom";
class App extends React.Component {
	render() {
		return (
			<div>
				<p> Hello React Project</p>
			</div>
		);
	}
}

render(<App />, document.getElementById(randomId));
