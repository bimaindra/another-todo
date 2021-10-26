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
