import * as React from "react";
import { sectionHeading } from "./index.module.css";

export const SectionHeading = ({ text }) => {
	return <h2 className={sectionHeading}>{text}</h2>;
};
