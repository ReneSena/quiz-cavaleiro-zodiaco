import styled, { keyframes } from 'styled-components';

const changeStatusLoader = keyframes`
	0% {
		transform: scale(0.8);
		opacity: 0.5;
	}
	100% {
		transform: scale(1)
		opacity: 1;
	}
`;

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

		&.danger {
			background-color: red;
			animation: 800ms ${changeStatusLoader} infinite ease-in-out;
			animation-direction: alternate-reverse;
		}
	}
`;
