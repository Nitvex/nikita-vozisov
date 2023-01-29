import * as React from "react";
import { boldLabel } from "./index.module.css";

export const BoldLabel = ({ children, className='' }) => {
	return <span className={`${boldLabel} ${className}`}>{children}</span>;
};
