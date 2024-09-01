import { useEffect } from "react"

import { ErrorComponent, Layout, Spinner, TableComponent } from "./components"
import { initialUsers, fetchUsers } from "./store/filteredSlice/filteredSlice"
import { resultUser, isLoading, isError, error, allUsers } from "./store/filteredSlice/selectors"
import { AppDispatch } from "./store/store"
import { useGetUsersQuery } from "./store/userApi/userApi"

import { bindActionCreators } from "@reduxjs/toolkit"
import { ConnectedProps, connect } from "react-redux"
import { createStructuredSelector } from "reselect"

interface Props extends PropsFromRedux {}

const App: React.FC<Props> = ({ initialUsers, resultUser, fetchUsers, allUsers, error, isError, isLoading }) => {
	console.log(error)

	useEffect(() => {
		fetchUsers()
	}, [])

	if (isLoading) {
		return <Spinner />
	}

	if (isError) {
		if ("message" in error!) {
			return <ErrorComponent message={error?.message!} />
		} else {
			return <ErrorComponent message="Error" />
		}
	}

	return (
		<Layout>
			<TableComponent users={resultUser!} />
		</Layout>
	)
}

const mapStateToProps = createStructuredSelector({
	resultUser,
	isLoading,
	isError,
	error,
	allUsers,
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	initialUsers: bindActionCreators(initialUsers, dispatch),
	fetchUsers: bindActionCreators(fetchUsers, dispatch),
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(App)
