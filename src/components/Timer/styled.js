import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 15px 0;

	& span {
		width: 30px;
		background-color: #222;
		height: 30px;
		border-radius: 50px;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 30px;
		font-weight: 700;
	}
`;
