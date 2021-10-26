import styled from 'styled-components';

export const FormContainer = styled.form`
	position: relative;
`;

export const FormGroup = styled.div`
	margin-bottom: 16px;
	justify-content: center;
	gap: 16px;
	display: flex;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const FormInput = styled.input`
	width: 100%;
	min-height: 40px;
	background-color: var(--white);
	border-style: solid;
	border-color: var(--white);
	border-image: none;
	border-radius: 8px;
	font-size: 14px;
	padding-left: 16px;
	padding-right: 16px;
`;

export const SelectInput = styled.div`
	width: 100%;

	select {
		width: 100%;
		min-height: 40px;
		line-height: 40px;
		background-color: var(--white);
		border-style: solid;
		border-color: var(--white);
		border-image: none;
		border-radius: 8px;
		font-size: 14px;
		padding-left: 16px;
		padding-right: 16px;
	}
`;

export const TextArea = styled.div`
	width: 100%;

	textarea {
		width: 100%;
		background-color: var(--white);
		border-style: solid;
		border-color: var(--white);
		border-image: none;
		border-radius: 8px;
		font-size: 14px;
		line-height: 1.5;
		padding: 16px;
	}
`;

export const Checkbox = styled.div`
	input {
		position: absolute;
		opacity: 0;

		& + label {
			position: relative;
			cursor: pointer;
			padding: 0;
		}

		// Box.
		& + label:before {
			content: '';
			display: inline-block;
			vertical-align: text-top;
			width: 24px;
			height: 24px;
			background: white;
			border: 1px solid var(--grey);
			border-radius: 50%;
		}

		// Box hover
		&:hover + label:before {
			background: var(--white);
		}

		// Box focus
		&:focus + label:before {
			box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
		}

		// Box checked
		&:checked + label:before {
			background: var(--dark);
		}

		&:checked + label:after {
			content: '';
			position: absolute;
			left: 6px;
			top: 11px;
			background: white;
			width: 3px;
			height: 3px;
			box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white,
				4px -8px 0 white;
			transform: rotate(45deg);
		}
	}
`;

export const FormButton = styled(FormGroup)`
	margin-top: 58px;
`;
