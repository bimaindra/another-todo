import styled from 'styled-components';

export const Board = styled.main`
	width: 960px;
	height: 600px;
	display: flex;
	border-radius: 16px;
	overflow: hidden;
`;

export const BoardForm = styled.div`
	padding: 32px;
	flex: 0 0 400px;
	background-color: var(--dark);
`;

export const BoardContent = styled.div`
	padding: 32px;
	padding-top: 0;
	background-color: var(--white);
	flex-grow: 1;
	overflow-y: scroll;
	position: relative;
`;
