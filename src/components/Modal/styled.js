import styled from 'styled-components';

export const Container = styled.div`
	background: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 98;
	display: none;

	&.show {
		display: block;
	}

	& div {
		width: 450px;
		height: 350px;
		background: #fff;
		position: fixed;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -30%);
		z-index: 100;
		border-radius: 5px;
		color: #222;
		padding: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	& h1 {
		margin-bottom: 20px;
	}

	& p {
		margin-top: 24px;

		strong {
			color: green;
		}
	}
`;
