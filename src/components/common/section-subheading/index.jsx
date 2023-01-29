import * as React from "react";
import { sectionSubHeading } from "./index.module.css";

export const SectionSubHeading = ({ text }) => {
	return <h3 className={sectionSubHeading}>{text}</h3>;
};
