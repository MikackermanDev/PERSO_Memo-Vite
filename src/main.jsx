import "../style.css";
import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";

const route = ReactDOM.createRoot(document.getElementById("root"));
route.render(
	<React.StrictMode>
		<Navbar />
		<Header />
		<MainContent />
		<Footer />
	</React.StrictMode>
);
