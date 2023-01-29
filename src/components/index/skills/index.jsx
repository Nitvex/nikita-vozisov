import * as React from "react";
import {
	BoldLabel,
	Divider,
	SectionHeading,
	SectionWrapper,
} from "../../common";
import { section } from "./index.module.css";

export const Skills = () => {
	return (
		<SectionWrapper>
			<SectionHeading text="Skills" />
			<BoldLabel>General:</BoldLabel> Team Management, Team Leadership, JS/TS,
			Webpack, GraphQL, Jest, Playwright, NPM, Git, ESlint
			<div className={section}>
				<BoldLabel>Frontend: </BoldLabel>HTML, CSS, React, Redux, Redux-Saga,
				Styled-Components, Vue.js, Vuex, jQuery, SASS, LESS, Stylelint
			</div>
			<div className={section}>
				<BoldLabel>Backend: </BoldLabel>Node.js, Express.js, Nest.js, MongoDB
			</div>
			<Divider />
		</SectionWrapper>
	);
};
