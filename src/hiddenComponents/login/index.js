import axios from "axios";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import Loading from "../../components/Loading";
import styles from "./styles.module.css";
const Login = (props) => {
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");

	const changeEmail = (e) => {
		setemail(() => e.target.value);
	};
	const changePassword = (e) => {
		setpassword(() => e.target.value);
	};

	const submitData = (e) => {
		e.preventDefault();
		let obj = {
			email,
			password,
		};
		console.log(obj);
	};

	return (
		<>
			<section
				className={`about section active ${props.open}`}
				id="about"
				onClick={props.closeOpen}
			>
				<div className={styles.wrapper}>
					<div className={styles.formWrapper}>
						<form className={styles.form}>
							<div className={styles.label}>Email</div>
							<input
								className={styles.input}
								type="text"
								value={email}
								onChange={changeEmail}
								required
							></input>
							<div className={styles.label}>Password</div>
							<input
								required
								className={styles.input}
								type="password"
								value={password}
								onChange={changePassword}
							></input>
							<button
								onSubmit={submitData}
								className={styles.button}
							>
								Login
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
