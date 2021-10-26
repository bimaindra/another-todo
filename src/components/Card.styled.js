import styled from 'styled-components';

export const CardList = styled.div`
	padding: 0;
	margin-bottom: 16px;
	border: 1px solid var(--blue);
	border-radius: 8px;

	.__icon {
		font-size: 48px;
		cursor: pointer;
	}

	.__Border {

		border-right: 1px solid var(--blue);
	}

	.__Checkbox {
		height: 100%;
		display: grid;
		place-items: center;
	}
`;

export const CardCol = styled.div`
	padding: 12px 16px;
`;

export const CardTitle = styled.h2`
	margin-top: 0;
	margin-bottom: 8px;
	color: var(--blue);
	font-size: 16px;
`;

export const CardDetail = styled.div`
	padding: 16px 20px 20px;
	font-size: 14px;
	line-height: 1.5;
	border-top: 1px solid var(--blue);
	position: relative;

	.__Icon {
		opacity: 1;
		top: 16px;
	}
`;

export const CardDate = styled.span`
	font-size: 12px;
	font-weight: 500;
	color: var(--grey);

	p {
		color: var(--grey);
		margin: 0;
	}
`;
