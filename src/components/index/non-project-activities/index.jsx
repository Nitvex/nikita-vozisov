import * as React from "react";
import {
	BulletPoint,
	Divider,
	SectionHeading,
	SectionWrapper,
} from "../../common";

export const NonProjectActivities = () => {
	return (
		<SectionWrapper>
			<SectionHeading text="Non-Project Activities" />
			<BulletPoint text="Have “qualified investor” status in Russia"></BulletPoint>
			<BulletPoint text="Conducted more than 10 interviews for junior and middle positions"></BulletPoint>
			<BulletPoint text="Conducted 5 sessions for Senior positions"></BulletPoint>
			<BulletPoint text="Created Personal Development Plan for Junior to Middle position"></BulletPoint>
			<BulletPoint text="Resource Manager of 3 people"></BulletPoint>
			<BulletPoint text="Mentor in two internal projects (Vue.js and React.js)"></BulletPoint>
			<BulletPoint text="Created videos regarding Vuex for Global Mentoring Program (passed by	hundreds of people)"></BulletPoint>
			<Divider />
		</SectionWrapper>
	);
};
