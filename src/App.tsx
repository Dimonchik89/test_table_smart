import { ErrorComponent, Layout, Spinner, TableComponent } from "./components"
import { useGetUsersQuery } from "./store/userApi/userApi"

function App() {
	const { data, isError, isLoading, error } = useGetUsersQuery()

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

	return (
		<Layout>
			<TableComponent users={data!} />
		</Layout>
	)
}

export default App
