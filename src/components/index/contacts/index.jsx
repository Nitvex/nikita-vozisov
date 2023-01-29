import * as React from "react";
import {
	contactsWrapper,
	contactsTitle,
	logo,
	networkWrapper,
} from "./index.module.css";
import { SiteLink } from "../../common";
import githubLogo from "../../../images/github.svg";
import linkedInLogo from "../../../images/linkedin.svg";
import telegramLogo from "../../../images/telegram.svg";

const links = [
	{
		text: "vozisovnikita@gmail.com",
	},
	{
		text: "Github",
		imageSrc: githubLogo,
		imageAlt: "Github Logo",
		href: "https://github.com/Nitvex",
	},
	{
		text: "LinkedIn",
		imageSrc: linkedInLogo,
		imageAlt: "LinkedIn Logo",
		href: "https://www.linkedin.com/in/nikita-vozisov/",
	},
	{
		text: "Nitvex",
		imageSrc: telegramLogo,
		imageAlt: "Telegram Logo",
		href: "https://t.me/nitvex",
	},
];

const LinkComponent = ({ imageSrc, imageAlt, href, text }) => {
  if (!imageSrc) {
    return (
			<span className={networkWrapper}>
				<SiteLink href={href}>{text}</SiteLink>
			</span>
		);
  }
	return (
		<span className={networkWrapper}>
			<img className={logo} src={imageSrc} alt={imageAlt} />
			<SiteLink href={href}>{text}</SiteLink>
		</span>
	);
};

export const Contacts = ({ children }) => {
	return (
		<div className={contactsWrapper}>
			<div className={contactsTitle}>Contact</div>
			{links.map((link) => (
				<LinkComponent {...link} key={link.text} />
			))}
		</div>
	);
};
