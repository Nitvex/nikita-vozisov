import * as React from "react";
import { sectionWrapper } from "./index.module.css";

export const SectionWrapper = ({ children }) => {
	return <div className={sectionWrapper}>{children}</div>;
};
