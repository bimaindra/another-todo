import PropTypes from 'prop-types';
import { FormInput, SelectInput } from './Form.styled';
import { SearchContainer, SearchInput, SearchClearButton } from './Search.styled';
import { BiXCircle } from 'react-icons/bi';

const SearchForm = ({ dataFilter, onHandleFilterTask, onHandleClearSearch }) => {
	const onChangeinput = (e, index) => {
		onHandleFilterTask(e.target.value, index);
	};

	const handleClearSearchKeyword = (e, dataFilter) => {
		e.preventDefault();

		onHandleClearSearch(dataFilter);

		dataFilter.keyword = '';
	};

	return (
		<div>
			<SearchContainer>
				<SelectInput>
					<select value={dataFilter.sortBy} onChange={(e) => onChangeinput(e, 'sortBy')}>
						<option value='empty'>Sort By</option>
						<option value='0'>Low</option>
						<option value='2'>High</option>
					</select>
				</SelectInput>
				<SearchInput>
					<FormInput
						id='input-search'
						placeholder='Search by title...'
						value={dataFilter.keyword}
						onChange={(e) => onChangeinput(e, 'keyword')}
					/>
					<SearchClearButton
						className='__Icon'
						onClick={(e) => handleClearSearchKeyword(e, dataFilter)}>
						<BiXCircle></BiXCircle>
					</SearchClearButton>
				</SearchInput>
			</SearchContainer>
		</div>
	);
};

SearchForm.propTypes = {
	dataFilter: PropTypes.object,
	onHandleFilterTask: PropTypes.func,
	onHandleClearSearch: PropTypes.func
};

export default SearchForm;
