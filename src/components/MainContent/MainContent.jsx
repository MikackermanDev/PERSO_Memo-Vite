import "./MainContent.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainContent() {
	const notify = () => toast("I have been clicked");
	return (
		<>
			<h1 className="title">Title</h1>

			<button onClick={notify}>Toastify ?</button>
			<ToastContainer />

			<p className="Exp">Something is here</p>

			<p className="blabla">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem fuga
				delectus veritatis eos qui architecto!
			</p>
		</>
	);
}
