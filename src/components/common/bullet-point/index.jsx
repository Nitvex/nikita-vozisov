import * as React from "react";
import { bulletPoint, dashPoint } from "./index.module.css";

export const BulletPoint = ({ text, subItems = [] }) => {
	return (
		<span className={bulletPoint}>
			{text}
			{subItems.map(subItem => {
				return (
					<div className={dashPoint} key={subItem}>
						{subItem}
					</div>
				);
			})}
		</span>
	);
};
