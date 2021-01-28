import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	position: fixed;
	bottom: 30px;
	right: 30px;
	z-index: 100;

	& button {
		width: 50px;
		height: 50px;
		border-radius: 50px;
		background-color: #fff;
		border: 0;
		outline: none;
	}
`;
