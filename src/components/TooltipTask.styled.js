import styled from 'styled-components';

export const Tooltip = styled.div`
	position: relative;
	text-align: center;

	button {
		text-decoration: none;
		display: block;
		width: 100%;
		text-align: center;
		padding: 12px 16px;
		margin: 0;
		color: var(--dark);
		background-color: transparent;
		border: none;
		cursor: pointer;

		&:hover {
			opacity: 0.75;
		}

		&:first-child {
			padding-bottom: 4px;
		}

		&:last-child {
			padding-top: 4px;
		}
	}
`;

export const TooltipContent = styled.div`
	position: absolute;
	bottom: -56px;
	right: 0;
	border: 1px solid var(--dark);
	border-radius: 16px;
	background-color: var(--white);
	display: inline-block;
	z-index: ${(props) => (props.isShow ? '5' : '-5')};
	opacity: ${(props) => (props.isShow ? '1' : '0')};
	transform: translateY(${(props) => (props.isShow ? '0' : '-10px')});
	transition: all .25s ease-out;
	overflow: hidden;
`;
