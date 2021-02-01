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

	@media (max-width: 500px) {
		position: fixed !important;
		z-index: 98 !important;
	}

	&.show {
		pointer-events: none;
		display: block;
	}

	& div {
		width: 450px;
		height: 350px;
		background: #fff;
		position: fixed !important;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -30%);
		z-index: 100 !important;
		border-radius: 5px;
		color: #222;
		padding: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		@media (max-width: 500px) {
			width: calc(100% - 40px);
		}
	}

	& h1 {
		margin-bottom: 20px;

		@media (max-width: 500px) {
			font-size: 24px;
		}
	}

	& p {
		margin-top: 24px;

		strong {
			color: green;
		}
	}
`;
