import "../style.css";
import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";

const route = ReactDOM.createRoot(document.getElementById("root"));
route.render(
	<React.StrictMode>
		<Header />
		<MainContent />
		<Footer />
	</React.StrictMode>
);
