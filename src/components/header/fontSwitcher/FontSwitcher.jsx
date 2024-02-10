import { useEffect, useRef, useState } from "react"
import cn from "clsx"

import styles from "./FontSwitcher.module.scss"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"

const fontStyles = [
	{
		key: 0,
		value: "Serif",
	},
	{
		key: 1,
		value: "Sans Serif",
	},
	{
		key: 2,
		value: "Mono",
	},
]

const getFontFamily = () => {
	let fontFamily = localStorage.getItem("font-family")
	if (!fontFamily) {
		localStorage.setItem("font-family", "serif")
		fontFamily = "serif"
	}

	return fontFamily
}

const FontSwitcher = () => {
	const [fontFamily, setFontFamily] = useState(getFontFamily)
	const [open, setOpen] = useState(false)

	const menuRef = useRef(null)

	useEffect(() => {
		let handleClick = e => {
			if (!menuRef.current.contains(e.target)) {
				setOpen(false)
			}
		}

		document.addEventListener("mousedown", handleClick)

		return () => [document.removeEventListener("mousedown", handleClick)]
	}, [])

	useEffect(() => {
		localStorage.setItem("font-family", fontFamily)
		document.body.setAttribute("font-family", fontFamily)
	}, [fontFamily])

	return (
		<div ref={menuRef}>
			<div className={styles.dropdown__header} onClick={() => setOpen(!open)}>
				<p className={styles.header__text}>{fontFamily}</p>
				<span className={styles.header__icon}>
					{open ? <BiChevronUp /> : <BiChevronDown />}
				</span>
			</div>
			<ul
				className={cn(styles["dropdown__items"], {
					[styles["dropdown__items_showed"]]: open,
				})}
			>
				{fontStyles.map(item => (
					<li
						key={item.key}
						className={styles.item}
						onClick={() => {
							setFontFamily(item.value.toLowerCase())
						}}
					>
						{item.value}
					</li>
				))}
			</ul>
		</div>
	)
}

export { FontSwitcher }
