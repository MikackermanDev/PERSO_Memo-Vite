import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";

export default function App() {
	return (
		<div className="app">
			<Navbar />
			<div className="content">
				<Header />
				<MainContent />
			</div>
			<Footer />
		</div>
	);
}
