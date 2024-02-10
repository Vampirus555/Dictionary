import { useEffect, useState } from "react"
import axios from "axios"

import { Header, Search, Translated } from "./Components"
import { callTranslator } from "./utils/Api"

function App() {
	const [translatedData, setTranslatedData] = useState({})
	const [errorData, setErrorData] = useState({
		message: "",
		resolution: "",
		title: "",
	})
	const [search, setSearch] = useState("")
	// message: "Sorry pal, we couldn't find definitions for the word you were looking for."
	// resolution: "You can try the search again at later time or head to the web instead."
	// title: "No Definitions Found"
	useEffect(() => {
		axios
			.get(callTranslator(search))
			.then(response => {
				setTranslatedData(response.data[0])
				setErrorData(null)
				console.log(response.data)
			})
			.catch(e => {
				const error = e.response.data
				setErrorData({
					message: error.message,
					resolution: error.resolution,
					title: error.title,
				})
			})
	}, [search])
	return (
		<div className="container">
			<Header />
			<div className="search__wrapper">
				<Search onSearch={setSearch} value />
			</div>
			{search !== "" && !errorData && (
				<div className="result__wrapper">
					<Translated {...translatedData} />
				</div>
			)}
			{errorData && <div>{errorData.title}</div>}
		</div>
	)
}

export default App
