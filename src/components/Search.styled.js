import styled from 'styled-components';

export const SearchContainer = styled.div`
	display: flex;
	gap: 16px;
	justify-content: space-between;
	background-color: var(--dark);
	padding: 16px;
	margin-left: -32px;
	margin-right: -32px;
	position: sticky;
	top: -1px;
	z-index: 9;
	margin-bottom: 28px;
`;

export const SearchInput = styled.div`
	position: relative;
	width: 100%;

	&:hover {
		.__Icon {
			opacity: 1;
		}
	}
`;

export const SearchClearButton = styled.div`
	position: absolute;
	width: 20px;
	height: 20px;
	margin: auto;
	text-align: center;
	right: 4px;
	top: 50%;
	transform: translateY(-50%);
	line-height: 1;
	cursor: pointer;
	opacity: 0;
	transition: opacity .25s ease-in-out;
`;
