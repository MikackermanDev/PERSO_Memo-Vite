import "../style.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const route = ReactDOM.createRoot(document.getElementById("root"));
route.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
