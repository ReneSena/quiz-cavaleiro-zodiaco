import styled from 'styled-components';

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
	transition: all 0.3s;

	&:disabled {
		background-color: #979797;
		cursor: not-allowed;
	}

	&:hover:not(:disabled) {
		opacity: 0.8;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
	}
`;
