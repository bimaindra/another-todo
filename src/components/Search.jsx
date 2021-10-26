import PropTypes from 'prop-types';
import { FormInput, SelectInput } from './Form.styled';
import { SearchContainer, SearchInput, SearchClearButton } from './Search.styled';
import { BiXCircle } from 'react-icons/bi';

const SearchForm = ({ dataFilter, onHandleFilterTask }) => {
	const onChangeinput = (e, index) => {
		onHandleFilterTask(e.target.value, index);
	};

	const handleClearSearchKeyword = (e) => {
		e.preventDefault();
		dataFilter.keyword = '';
	};

	return (
		<div>
			<SearchContainer>
				<SelectInput>
					<select value={dataFilter.sortBy} onChange={(e) => onChangeinput(e, 'sortBy')}>
						<option value='0'>Sort By</option>
						<option value='1'>Low</option>
						<option value='2'>High</option>
					</select>
				</SelectInput>
				<SearchInput>
					<FormInput
						placeholder='Search by title...'
						value={dataFilter.keyword}
						onChange={(e) => onChangeinput(e, 'keyword')}
					/>
					<SearchClearButton className='__Icon' onClick={(e) => handleClearSearchKeyword(e)}>
						<BiXCircle></BiXCircle>
					</SearchClearButton>
				</SearchInput>
			</SearchContainer>
		</div>
	);
};

SearchForm.propTypes = {
	dataFilter: PropTypes.object,
	onHandleFilterTask: PropTypes.func
};

export default SearchForm;
