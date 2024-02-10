import { useEffect, useState } from "react"

import { BiMoon, BiBook } from "react-icons/bi"
import styles from "./Header.module.scss"
import { FontSwitcher } from "./fontSwitcher"

const getTheme = () => {
	let theme = localStorage.getItem("theme-mode")
	if (!theme) {
		localStorage.setItem("theme-mode", "light")
		theme = "light"
	}

	return theme
}

const Header = () => {
	const [theme, setTheme] = useState(getTheme)

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}

	useEffect(() => {
		localStorage.setItem("theme-mode", theme)
		document.body.setAttribute("theme-mode", theme)
	}, [theme])

	return (
		<header className={styles["header"]}>
			<div className={styles.header__logo}>
				<BiBook />
			</div>
			<div className={styles.header__settings}>
				<div className={styles["font-switcher__wrapper"]}>
					<FontSwitcher />
				</div>
				<div className={styles["mode-switcher"]}>
					<input type="checkbox" id="switcher" onClick={toggleTheme} />
					<label htmlFor="switcher" />
					<BiMoon />
				</div>
			</div>
		</header>
	)
}

export { Header }
