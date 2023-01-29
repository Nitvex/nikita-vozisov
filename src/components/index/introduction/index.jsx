import * as React from "react";
import { About } from "../about";
import { Contacts } from "../contacts";
import { introductionBlock } from "./index.module.css";

export const Introduction = () => {
	return (
		<div className={introductionBlock}>
			<About />
			<Contacts />
		</div>
	);
};
