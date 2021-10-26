import styled from 'styled-components';

export const Button = styled.button`
	padding: 14px 44px;
	background-color: var(--${(props) => (props.color ? props.color : 'blue')});
	color: var(--white);
	border-color: var(--${(props) => (props.color ? props.color : 'blue')});
	border-style: solid;
	border-radius: 50px;
	font-size: 16px;
	font-weight: 600;
	cursor: pointer;
	transition: opacity 0.25s ease-out;

	&:hover {
		opacity: 0.85;
	}

	&[disabled] {
		pointer-events: none;
		opacity: 0.45;
	}
`;
