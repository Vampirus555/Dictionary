const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en"

export const callTranslator = word => {
	const request = API_URL + "/" + word
	return request
}
