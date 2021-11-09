import styled from 'styled-components';

export const CardList = styled.div`
	padding: 0;
	margin-bottom: 16px;
	border: 1px solid var(--blue);
	border-radius: 8px;

	&.__Completed {
		background-color: var(--light-grey);
		
		.__Checkbox {
			z-index: 1;

			&:after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				background-color: var(--white);
				height: 100%;
				width: 100%;
				z-index: -1;
				border-top-left-radius: 8px;
				border-bottom-left-radius: 8px;
			}
		}
	}

	.__icon {
		font-size: 38px;
		cursor: pointer;
	}

	.__Border {
		position: relative;
		z-index: 1;
		overflow: hidden;
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
	margin-bottom: 4px;
	color: var(--dark-blue);
	font-size: 16px;
`;

export const CardDetail = styled.div`
	background-color: var(--white);
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
