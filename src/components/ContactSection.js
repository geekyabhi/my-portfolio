import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const ContactSection = (props) => {
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
				className={`contact section active ${props.open}`}
				id="contact"
				onClick={props.closeOpen}
			>
				<div className="container">
					<div className="row">
						<div className="section-title padd-15">
							<h2>Contact Me</h2>
						</div>
					</div>
					{loading ? (
						<Loading></Loading>
					) : !about ? (
						<Loading></Loading>
					) : (
						<div className="contact-division">
							<div className="row">
								<div className="contact-info">
									<div className="icon">
										<a
											href={`mailto:${about.gmail}`}
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fa fa-envelope"></i>
										</a>
									</div>
									<p>{about.gmail}</p>
								</div>
							</div>
							<div className="row">
								<div className="contact-info">
									<div className="icon">
										<i className="fa fa-map-marker"></i>
									</div>
									<p>
										{about.city}, {about.state}
									</p>
								</div>
							</div>
							<div className="row">
								<div className="contact-info">
									<div className="icon">
										<i className="fa fa-phone"></i>
									</div>
									<p>{about.phone}</p>
								</div>
							</div>
							<div className="row">
								<div className="contact-info">
									<div className="icon">
										<a
											href={about.instagram}
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fab fa-instagram"></i>
										</a>
									</div>
									<p>{about.instagram}</p>
								</div>
							</div>
							<div className="row">
								<div className="contact-info">
									<div className="icon">
										<a
											href={about.linkedIn}
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fab fa-linkedin"></i>
										</a>
									</div>
									<p>{about.linkedIn}</p>
								</div>
							</div>
							<div className="row">
								<div className="contact-info">
									<div className="icon">
										<a
											href={about.github}
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fab fa-github"></i>
										</a>
									</div>
									<p>{about.github}</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default ContactSection;
