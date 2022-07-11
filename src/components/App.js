import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { saveToLS, getFromLS } from 'components/helpers';
import { Box } from './Box';

class App extends Component {
	state = {
		contacts: [],
		filter: '',
		name: '',
		number: '',
	};
	componentDidMount() {
		const parsedContacts = getFromLS('contacts');
		if (parsedContacts) {
			this.setState({ contacts: parsedContacts });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const { contacts } = this.state;

		if (contacts !== prevState.contacts) {
			saveToLS('contacts', contacts);
		}
	}

	addContact = ({ name, number }) => {
		const contact = {
			id: uuidv4(),
			name,
			number,
		};

		const normolizedName = name.toLowerCase();
		if (
			this.state.contacts.find(
				contact => contact.name.toLowerCase() === normolizedName,
			)
		) {
			return alert(`${name} is already in contacts`);
		}

		this.setState(({ contacts }) => ({
			contacts: [contact, ...contacts],
		}));
	};

	changeFilter = e => {
		this.setState({ filter: e.currentTarget.value });
		// console.log(this.state);
	};

	getVisibleContacts = () => {
		const { contacts, filter } = this.state;
		const normolizedFiter = filter.toLowerCase();
		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(normolizedFiter),
		);
	};

	deleteContact = contactId => {
		this.setState(prevState => ({
			contacts: prevState.contacts.filter(contact => contact.id !== contactId),
		}));
	};

	render() {
		const visibleContacts = this.getVisibleContacts();
		return (
			<Box display="flex" alignItems="center" flexDirection="column">
				<Box>
					<h1>Phonebook</h1>
					<ContactForm onSubmit={this.addContact} />
					<h2>Contacts </h2>
					<Filter value={this.filter} onChange={this.changeFilter} />
					<ContactList
						contacts={visibleContacts}
						onDeleteContact={this.deleteContact}
					/>
				</Box>
			</Box>
		);
	}
}
export default App;
