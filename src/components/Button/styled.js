import styled, { keyframes } from 'styled-components';

const loadButton = keyframes`
	0% {
		transform: rotate(0) scale(0.9);
	}
	100% {
		transform: rotate(360deg) scale(1.1);
	}
`;

export const Container = styled.button`
	width: 100%;
	height: 36px;
	border: 0;
	border-radius: 5px;
	line-height: 16px;
	font-size: 14px;
	font-weight: 700;
	letter-spacing: 1.25px;
	text-transform: uppercase;
	outline: none;
	color: #fff;
	background-color: #ff5722;
	cursor: pointer;
	transition: all 0.3s linear;
	display: flex;
	align-items: center;
	justify-content: center;

	&:disabled,
	&.disabled {
		background-color: #979797;
		cursor: not-allowed;
		color: #c1c1c1;
	}

	&:hover:not(:disabled) {
		opacity: 0.8;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
	}

	& .loading {
		width: 15px !important;
		height: 15px;
		display: block;
		background-color: #ff5766;
		border-radius: 5px;
		margin-left: 10px;
		animation: 1s ${loadButton} ease-in-out infinite;
		animation-fill-mode: backwards;
	}
`;
