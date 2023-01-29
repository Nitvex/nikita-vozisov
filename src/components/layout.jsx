import React from "react";
import { main } from "./layout.module.css";

export const Layout = ({ children }) => {
	return <main className={main}>{children}</main>;
};
