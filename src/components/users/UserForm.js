import './UserForm.css'
import Card from "../UI/Card"
import Button from '../UI/Button'
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const UserForm = (props) => {

	const [username, setUsername] = useState('');
	const [age, setAge] = useState('');
	const [error, setError] = useState();

	const onChangeNameHandler = (event) => {
		setUsername(event.target.value)
	}

	const onChangeAgeHandler = (event) => {
		setAge(event.target.value)
	}

	const addUserHandler = (event) => {
		event.preventDefault();

		if(username.trim().length === 0 && age.trim().length === 0) {
			setError({
				title: 'Invalid Input',
				message: 'please enter a valid name and age'
			})
			return
		} 
		if(+age < 1) {
			setError({
				title: 'invalid age',
				message: 'please enter valid age'
			})
			return 
		}
		setUsername('')
		setAge('')
		const user = {
			name: username,
			age,
			id: Math.random().toString()
		}
		props.onSaveData(user)

	};

	const errorHandler = () => {
		setError(null);
	}




	return (
		<Wrapper>
		{error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
		<Card className="input">
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username:</label>
				<input value={username} onChange={onChangeNameHandler} id="username" type="text" />

				<label htmlFor="age">Age(Years)</label>
				<input value={age} onChange={onChangeAgeHandler} id="age" type="number" />
                <Button type="submit">Add User</Button>
			</form>
		</Card>
		</Wrapper>
	);
};

export default UserForm;
