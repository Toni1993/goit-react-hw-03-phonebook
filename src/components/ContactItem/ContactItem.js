import PropTypes from 'prop-types';
import { Item } from './ContactItem.stylad';
import { ItemText } from './ContactItem.stylad';
import { Button } from './ContactItem.stylad';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
	<Item>
		<ItemText>{name}</ItemText>
		<ItemText>{number}</ItemText>
		<Button onClick={() => onDeleteContact(id)}>Delete</Button>
	</Item>
);

ContactItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
