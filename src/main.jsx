import React from "react";
import ReactDOM from "react-dom/client";

// import Greeting from "../components/Greeting.jsx";
import Cv from "./components/Cv.jsx";

// import "./index.css";
import "./styles/cv.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Cv />
	</React.StrictMode>
);
