import { ErrorComponent, Layout, Spinner } from "./components"
import { useGetUsersQuery } from "./store/userApi/userApi"

function App() {
	const { data, isError, isLoading, error } = useGetUsersQuery()

	console.log(data)

	if (isLoading) {
		return <Spinner />
	}

	if (isError) {
		if ("error" in error) {
			return <ErrorComponent message={error?.error} />
		} else {
			return <ErrorComponent message="Error" />
		}
	}

	return <Layout></Layout>
}

export default App
