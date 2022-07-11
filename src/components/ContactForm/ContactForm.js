import React, { Component } from 'react';
import { FormLable } from './ContactForm.stylad';
import { FormButton } from './ContactForm.stylad';

class ContactForm extends Component {
	state = {
		name: '',
		number: '',
	};

	handleChange = e => {
		const { name, value } = e.currentTarget;
		this.setState({ [name]: value });
	};

	addContact = e => {
		e.preventDefault();
		this.props.onSubmit(this.state);
		this.reset();
	};

	reset = () => {
		this.setState({
			name: '',
			number: '',
		});
	};

	render() {
		return (
			<form onSubmit={this.addContact}>
				<FormLable>
					Name:
					<input
						value={this.state.name}
						onChange={this.handleChange}
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
						required
					/>
				</FormLable>

				<FormLable>
					Tel:
					<input
						value={this.state.number}
						onChange={this.handleChange}
						type="tel"
						name="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
						required
					/>
				</FormLable>
				<FormButton type="submit">Add contact</FormButton>
			</form>
		);
	}
}
export default ContactForm;
