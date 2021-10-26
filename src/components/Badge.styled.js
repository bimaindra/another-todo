import styled from 'styled-components';

export const BadgeDefault = styled.span`
	padding: 2px 16px;
	display: inline-block;
	background-color: var(--${(props) => (props.color ? props.color : 'blue')});
	color: var(--white);
	border-color: var(--${(props) => (props.color ? props.color : 'blue')});
	border-style: solid;
	border-radius: 50px;
	font-size: 10px;
	font-weight: 700;
	margin-left: 1rem;
	line-height: 20px;
	text-align: center;
	min-width: 80px;
	line-height: 1.35;
`;
