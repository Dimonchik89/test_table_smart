import axios from "axios"

export const fetchData = async () => {
	try {
		const { data } = await axios(`${import.meta.env.VITE_BASE_URL}/users`)
		return data
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message)
		}
	}
}
