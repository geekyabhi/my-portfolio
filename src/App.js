import React, { useState } from "react";
import Aside from "./components/Aside";
import HomeSection from "./components/HomeSection";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SkillSection from "./components/SkillSection";
import Login from "./hiddenComponents/login/index";

const App = () => {
	const [open, setopen] = useState("");

	function toggleOpen() {
		if (open === "") {
			setopen("open");
		} else if (open === "open") {
			setopen("");
		}
	}

	function closeOpen() {
		if (open === "open") {
			setopen("");
		}
	}

	return (
		<Router>
			<div className="main-container">
				<Aside
					open={open}
					toggleOpen={toggleOpen}
					closeOpen={closeOpen}
				></Aside>
				<div className="main-content">
					<Switch>
						<Route path="/" exact>
							<HomeSection
								open={open}
								closeOpen={closeOpen}
							></HomeSection>
						</Route>
						<Route path="/about">
							<AboutSection
								open={open}
								closeOpen={closeOpen}
							></AboutSection>
						</Route>
						<Route path="/skills">
							<SkillSection
								open={open}
								closeOpen={closeOpen}
							></SkillSection>
						</Route>
						<Route path="/projects">
							<ProjectSection
								open={open}
								closeOpen={closeOpen}
							></ProjectSection>
						</Route>
						<Route path="/contact">
							<ContactSection
								open={open}
								closeOpen={closeOpen}
							></ContactSection>
						</Route>
						<Route path="/login">
							<Login></Login>
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
