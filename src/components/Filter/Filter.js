import PropTypes from 'prop-types';
import { FilterLabel } from './Filter.styled';
import { FilteInput } from './Filter.styled';

const Filter = ({ value, onChange }) => (
	<FilterLabel>
		Find contacts by name
		<FilteInput
			type="text"
			value={value}
			onChange={onChange}
			placeholder="Name contact"
		/>
	</FilterLabel>
);

Filter.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

export default Filter;
