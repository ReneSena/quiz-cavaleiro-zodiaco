import styled, { keyframes } from "styled-components";

const animationAlternativeError = keyframes`
	0% {
		transform:  rotate(-5deg) translate(5px, -5px);
	}
	100% {
		transform:  rotate(5deg) translate(-5px, 5px);

	}
`;

const animationAlternative = keyframes`
	0% {
		transform:  scale(.9);
		background-image: linear-gradient(
			265deg,
			rgba(255, 255, 255, 0.5),
			#4bb38e
		);
	}
	100% {
		transform:  scale(1.1);
		background-image: linear-gradient(
			265deg,
			rgba(255, 255, 255, 0.1),
			#4bb38e
		);
	}
`;

const AlternativesForm = styled.form`
	label {
		&[data-selected="true"] {
			background-image: linear-gradient(
				265deg,
				rgba(255, 255, 255, 0.5),
				#175662
			);

			&[data-status="SUCCESS"] {
				background-image: linear-gradient(
					265deg,
					rgba(255, 255, 255, 0.5),
					#4bb38e
				);

				animation: 200ms ${animationAlternative} infinite;
				animation-direction: alternate;
			}

			&[data-status="ERROR"] {
				background-image: linear-gradient(
					265deg,
					rgba(255, 255, 255, 0.5),
					#ff0000
				);

				animation: 200ms ${animationAlternativeError} infinite;
				animation-direction: alternate;
			}
		}
		&:focus {
			opacity: 1;
		}
	}
	button {
		margin-top: 24px;
	}
`;

export default AlternativesForm;
