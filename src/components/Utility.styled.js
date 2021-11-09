import styled from 'styled-components';

export const FlexDefault = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const FlexDefaultGap = styled(FlexDefault)`
	gap: 16px;
`;

export const FlexItemCenter = styled(FlexDefault)`
	align-items: center;
`;

export const FlexCenter = styled(FlexDefault)`
	justify-content: center;
	align-items: center;
`;

export const Centered = styled.div`
	display: grid;
	place-items: center;
	text-align: center;
	gap: 16px;
`;

export const SectionTitleSeparate = styled.h2`
	font-size: 16px;
	margin-top: 28px;
	margin-bottom: 24px;
	font-weight: bold;
	color: var(--dark-blue);
	position: relative;

	span {
		background-color: var(--white);
		position: relative;
		padding-right: 1rem;
		z-index: 1;
	}

	&:after {
		content: '';
		display: block;
		background-color: var(--dark-blue);
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 100%;
		height: 1px;
		z-index: 0;
	}
`;
