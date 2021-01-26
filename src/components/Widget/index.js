import styled from "styled-components";

const Widget = styled.div`
	margin-top: 24px;
	margin-bottom: 24px;

	background-image: linear-gradient(
		200deg,
		rgba(255, 255, 255, 0.1) 50%,
		#555
	);
	border-radius: 5px;
	overflow: hidden;

	h1,
	h2,
	h3 {
		font-size: 16px;
		font-weight: 700;
		line-height: 1;
		margin-bottom: 0;
	}

	p {
		margin-top: 20px;
		margin-bottom: 32px;
		font-size: 14px;
		font-weight: 400;
		line-height: 1.2;
	}
`;

Widget.Content = styled.div`
	padding: 24px 32px 32px 32px;

	& > *:first-child {
		margin-top: 0;
	}

	& > *:last-child {
		margin-bottom: 0;
	}

	ul {
		list-style: none;
		padding: 0;
	}
`;

Widget.Header = styled.header`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 18px 32px;
	background-image: linear-gradient(
		180deg,
		#1769aa,
		rgba(255, 255, 255, 0.3)
	);

	* {
		margin: 0;
	}
`;

export default Widget;
