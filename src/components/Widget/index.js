import styled from 'styled-components';

const Widget = styled.div`
	margin-top: 24px;

	&:first-child {
		margin-top: 0;
	}

	background-image: linear-gradient(
		200deg,
		rgba(255, 255, 255, 0.1) 50%,
		#555
	);

	backdrop-filter: blur(4px);
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
	font-size: 16px;
	padding: 18px 32px;
	font-weight: 600;
	background-image: linear-gradient(
		180deg,
		#1769aa,
		rgba(255, 255, 255, 0.3)
	);

	* {
		margin: 0;
	}
`;

Widget.Topic = styled.a`
	outline: 0;
	text-decoration: none;
	color: white;
	background-image: linear-gradient(
		200deg,
		rgba(255, 255, 255, 0.5) 50%,
		#555
	);
	padding: 0 15px;
	margin-bottom: 8px;
	cursor: pointer;
	border-radius: ${({ theme }) => theme.borderRadius};
	transition: 0.3s;
	display: block;
	height: 36px;
	line-height: 36px;
	transition: transform 200ms linear;

	& input {
		display: none;
	}

	&.active {
		background-image: linear-gradient(
			265deg,
			rgba(255, 255, 255, 0.5),
			#4bb38e
		);
	}

	&.wrong {
		background-color: red;
	}

	&:hover,
	&:focus {
		box-shadow: 2px 2px 2px #222;
		transform: translate(-5px, -2px);

		background-image: linear-gradient(
			265deg,
			rgba(255, 255, 255, 0.5),
			#4bb38e
		);
	}
`;

Widget.Image = styled.img`
	width: 100%;
	height: 250px;
	object-fit: cover;
`;

export default Widget;
