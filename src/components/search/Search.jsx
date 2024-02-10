import { useState } from "react"

import styles from "./Search.module.scss"
import { BiSearch } from "react-icons/bi"

const Search = ({ onSearch }) => {
	const [search, setSearch] = useState("")

	const handleSearchClick = () => {
		onSearch(search)
	}
	const handleSearchKeyDown = e => {
		if (e.key === "Enter") {
			onSearch(search)
		}
	}

	return (
		<div className={styles["search-field"]}>
			<input
				className={styles["search-field__input"]}
				placeholder="Input word..."
				type="text"
				onChange={e => setSearch(e.target.value)}
				value={search}
				onKeyDown={handleSearchKeyDown}
			/>
			<span className={styles["search-field__icon"]}>
				<BiSearch onClick={handleSearchClick} />
			</span>
		</div>
	)
}

export { Search }
