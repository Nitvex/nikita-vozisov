import * as React from "react";
import { headingDescription } from "./index.module.css";

export const HeadingDescription = ({ text }) => {
	return <div className={headingDescription}>{text}</div>;
};
