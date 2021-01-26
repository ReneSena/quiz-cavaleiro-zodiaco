import React from "react";
import styled from "styled-components";

const Container = styled.input`
	width: 100%;
	height: 38px;
	border-radius: 5px;
	border: 1px solid #c1c1c1;
	outline: none;
	/* background-color: transparent; */
	margin-bottom: 25px;
	padding: 0 16px;
	color: #222;
	font-size: 14px;
	background-color: rgba(0, 0, 0 0.2);
`;

export function Input(props) {
	return <Container type="text" {...props} />;
}
