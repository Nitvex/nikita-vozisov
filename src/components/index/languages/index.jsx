import * as React from "react";
import {
	SectionHeading,
	SectionSubHeading,
	SectionWrapper,
} from "../../common";
import { languagesWrapper } from "./index.module.css";

export const Languages = () => {
	return (
		<SectionWrapper>
			<SectionHeading text="Languages" />
			<div className={languagesWrapper}>
				<div>
					<SectionSubHeading text="Russian π·πΊ" />
					<div>Native speaker</div>
				</div>
				<div>
					<SectionSubHeading text="English πΊπΈ" />
					<div>Proficient speaker</div>
				</div>
			</div>
		</SectionWrapper>
	);
};
