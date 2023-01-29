import * as React from "react";
import { link } from "./index.module.css";

export const SiteLink = ({ href, children }) => {
	return (
		<a className={link} href={href}>
			{children}
		</a>
	);
};
