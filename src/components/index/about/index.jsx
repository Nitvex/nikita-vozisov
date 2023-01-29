import * as React from "react";
import { aboutWrapper } from "./index.module.css";

export const About = ({ children }) => {
	return (
		<div className={aboutWrapper}>
			I’m a software engineer and lead developer with more than 5 years of
			experience in IT industry. My main focus is Frontend (React & Vue.js) and
			also I have experience with developing backend with Node.js & AWS
		</div>
	);
};
