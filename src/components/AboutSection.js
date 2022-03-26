import axios from "axios";
import Educations from "./Educations";
import Experiences from "./Experiences";
import Achievements from "./Achievements";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Moment from "react-moment";
const AboutSection = (props) => {
	const [about, setabout] = useState(null);
	const [loading, setloading] = useState(false);
	useEffect(() => {
		async function getAbout() {
			setloading(true);
			const { data } = await axios.get(
				"https://portfolio-abhi-strike.herokuapp.com/about"
			);
			setabout(data);
			setloading(false);
		}
		getAbout();
	}, []);

	return (
		<>
			<section
				className={`about section active ${props.open}`}
				id="about"
				onClick={props.closeOpen}
			>
				<div className="container">
					<div className="row">
						<div className="section-title padd-15">
							<h2>About Me</h2>
						</div>
					</div>
					{loading ? (
						<Loading></Loading>
					) : !about ? (
						<Loading></Loading>
					) : (
						<div className="row">
							<div className="about-content padd-15">
								<div className="row">
									<div className="about-text padd-15">
										<h3>
											<span>Hello There!</span>
											<image></image>
										</h3>
										<p>{about.longDescription}</p>
									</div>
								</div>
								<div className="row">
									<div className="personal-info padd-15">
										<div className="row">
											<div className="info-item padd-15">
												<p>
													Birthday :{" "}
													<span>
														<Moment format="DD MMM YYYY">
															{about.birthday}
														</Moment>
													</span>
												</p>
											</div>
											<div className="info-item padd-15">
												<p>
													City :{" "}
													<span>{about.city}</span>
												</p>
											</div>
											<div className="info-item padd-15">
												<p>
													Mail :{" "}
													<span>{about.gmail}</span>
												</p>
											</div>
											<div className="info-item padd-15">
												<p>
													Hobbies :{" "}
													<span>{about.hobbies}</span>
												</p>
											</div>
										</div>
										<div className="row">
											<div className="buttons padd-15">
												<a
													href={about.resume}
													target="_blank"
													rel="noopener noreferrer"
													className="btn"
												>
													Download CV
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<Educations></Educations>
									<Experiences></Experiences>
									<Achievements></Achievements>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default AboutSection;
