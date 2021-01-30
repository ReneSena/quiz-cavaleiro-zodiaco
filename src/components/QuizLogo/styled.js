import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Icon = styled.img`
	margin: auto;
	display: block;

	@media screen and (max-width: 500px) {
		margin: 0;
	}
`;
