import styled from 'styled-components';

const QuizContainer = styled.div`
	width: 100%;
	max-width: 450px;
	padding-top: 45px;
	margin: auto;
	border-radius: 5px;

	@media screen and (max-width: 500px) {
		margin: auto;
		padding: 15px;
	}
`;

export default QuizContainer;
