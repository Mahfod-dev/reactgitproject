import React, { useState, useEffect } from 'react'
import Container from './Container'

const url = 'https://api.github.com/users'

const App = () => {
	const [users, setUsers] = useState([])

	const getUsers = async () => {
		const response = await fetch(url)
		const users = await response.json()
		setUsers(users)
		console.log(users)
	}

	useEffect(() => {
		getUsers()
	}, [])

	const renderUsers = users.map((user) => {
		const { id, login, avatar_url, html_url } = user

		return (
			<div key={id} className='ui link cards'>
				<div className='card'>
					<div className='image'>
						<img src={avatar_url} alt='avatar' />
					</div>
					<div className='content'>
						<div className='header'>{login}</div>
						<div className='meta'>
							<a href={html_url}>Veiw Profile</a>
						</div>
					</div>
				</div>
			</div>
		)
	})

	return (
		<>
			<h2>Git Hub Users</h2>
			<Container>{renderUsers}</Container>
		</>
	)
}

export default App
