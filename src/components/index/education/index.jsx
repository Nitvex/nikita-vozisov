import * as React from "react";
import {
	Divider,
	HeadingDescription,
	SectionHeading,
	SectionSubHeading,
	SectionWrapper,
} from "../../common";

export const Education = () => {
	return (
		<SectionWrapper>
			<SectionHeading text="Education" />
			<SectionSubHeading text="Bachelor's Degree in Information systems and technologies" />
			<HeadingDescription text="University of Information technologies mechanics and optics (ITMO), Saint-Petersburg " />
			<SectionSubHeading text="Master’s Degree in Web technologies" />
			<HeadingDescription text="University of Information technologies mechanics and optics (ITMO), Saint-Petersburg " />
			<Divider />
		</SectionWrapper>
	);
};
