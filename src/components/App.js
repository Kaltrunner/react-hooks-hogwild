import React from "react";
import Nav from "./Nav";
import PigTiles from "./PigTiles";
import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<PigTiles/>
		</div>
	);
}

export default App;