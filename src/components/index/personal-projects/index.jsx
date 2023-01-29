import * as React from "react";
import {
	BoldLabel,
	BulletPoint,
	Divider,
	SectionHeading,
	SectionWrapper,
} from "../../common";
import { stackMargin } from "./index.module.css";

export const PersonalProjects = () => {
	return (
		<SectionWrapper>
			<SectionHeading text="Personal Projects" />
			<BulletPoint text="1C franchisee support automation. Was in production and used by ~20k people."></BulletPoint>
			<BoldLabel className={stackMargin}>Stack:</BoldLabel> Vue.js, Vuex,
			Vue-Router, Element UI, Signal R (websockets).
			<BulletPoint text="Trainer finder. Allows user to record videos of training and send it to trainer to evaluate quality of exercises."></BulletPoint>
			<BoldLabel className={stackMargin}>Stack:</BoldLabel> React, Redux,
			GraphQL, styled-components, Nest.js, Mongoose, AWS, Mux (video-hosting
			service and SDK)
			<Divider />
		</SectionWrapper>
	);
};
