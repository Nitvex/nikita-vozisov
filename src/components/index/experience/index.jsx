import * as React from "react";
import {
	BoldLabel,
	SiteLink,
	BulletPoint,
	Divider,
	SectionHeading,
	SectionWrapper,
	SectionSubHeading,
	HeadingDescription,
} from "../../common";

export const Experience = () => {
	return (
		<SectionWrapper>
			<SectionHeading text="Experience" />
			<SectionSubHeading text="Senior Software Engineer" />
			<HeadingDescription text="EPAM (Apr 2021 – Present)" />
			<BulletPoint text="Resource Manager of 3 people" />
			<div>
				<BoldLabel>Project: </BoldLabel> Ketcher – open source graphical editor
				of chemical structures (
				<SiteLink href="https://lifescience.opensource.epam.com/KetcherDemoSA/index.html">
					link to live demo
				</SiteLink>
				). <BoldLabel>Stack: </BoldLabel> React, Redux, TypeScript, Jest,
				Playwright, Raphael.js, AWS
			</div>
			<BulletPoint text="Played team lead role and managed 8 people" />
			<BulletPoint text="Implemented features for complex 2D visualizations" />
			<BulletPoint
				text="Position included:"
				subItems={[
					"requirements clarification",
					"tasks creation and distribution",
					"writing documentation for a project",
					"teammates management on tasks implementation",
					"design reviews",
					"interviewing candidates",
				]}
			/>
			{/* Second Project */}
			<SectionSubHeading text="Software Engineer" />
			<HeadingDescription text="EPAM (Nov 2018 – Apr 2021)" />
			<BoldLabel>Project:</BoldLabel> B2B e-commerce solution.
			<BoldLabel> Stack:</BoldLabel> Thymol, SCSS/LESS, Vue, Vuex,
			Bloomreach-sdk, React (Commerce Tools extension), Webpack
			<BulletPoint text="Proposed and integrated unit-tests" />
			<BulletPoint text="Migrated legacy components to Vue.js" />
			<BulletPoint text="Improved performance for multiple pages" />
			<BulletPoint text="Proposed to dockerize an application" />
			<BulletPoint text="Proposed and transferred codebase to monorepo" />
			<BulletPoint text="Became a stream lead and then project frontend lead developer" />
			<BulletPoint text="Managed 5 frontend developers" />
			{/* Third Project */}
			<BoldLabel>Project:</BoldLabel> Library Management System.
			<BoldLabel> Stack:</BoldLabel> HTML, CSS, JS, Java, jQuery, Jira,
			Bitbucket
			<BulletPoint text="Worked as single FE developer" />
			<BulletPoint text="Fixed bugs and problem reports, exploring different technical solutions due to system complexity: it was written more than 20 years ago" />
			<BulletPoint text="Decreased amount of repeating and intricate code" />
			<BulletPoint text="Performed manual functional testing" />
			<BulletPoint text="Added more structure to code; changed the approach of adding new code" />
			<Divider />
		</SectionWrapper>
	);
};
