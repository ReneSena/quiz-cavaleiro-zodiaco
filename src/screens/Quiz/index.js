import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import GitHubCorner from '../../components/GitHubCorner';
import Logo from '../../components/QuizLogo';

import Loader from '../../components/Loader';
import ResultWidget from '../Result';
import Questions from '../Question';

const screenStates = {
	QUIZ: 'QUIZ',
	LOADING: 'LOADING',
	RESULT: 'RESULT',
};

function QuizTemplate(props) {
	const { questionsQuiz, backgroundQuiz, titleQuiz } = props;
	const [screenState, setScreenState] = React.useState(screenStates.LOADING);
	const [currentQuestion, setCurrentQuestion] = React.useState(0);
	const [results, setResults] = React.useState([]);
	const router = useRouter();

	const totalQuestions = questionsQuiz.questions.length;
	const questionIndex = currentQuestion;
	const question = questionsQuiz.questions[questionIndex];

	const name = router.asPath.replace('/quiz?', '');
	const player = decodeURI(name);

	function addResult(result) {
		setResults([...results, result]);
	}

	React.useEffect(() => {
		setTimeout(() => {
			setScreenState(screenStates.QUIZ);
		}, 1 * 4000);
	}, []);

	function handleSubmitQuiz() {
		const nextQuestion = questionIndex + 1;

		if (nextQuestion < totalQuestions) {
			setCurrentQuestion(nextQuestion);
		} else {
			setScreenState(screenStates.RESULT);
		}
	}

	return (
		<QuizBackground backgroundImage={backgroundQuiz.bg}>
			<Head>
				<title>{titleQuiz.title}</title>
			</Head>
			<QuizContainer>
				{/* <Logo /> */}
				{screenState === screenStates.QUIZ && (
					<Questions
						question={question}
						questionIndex={questionIndex}
						totalQuestions={totalQuestions}
						onSubmit={handleSubmitQuiz}
						addResult={addResult}
					/>
				)}

				{screenState === screenStates.LOADING && <Loader />}

				{screenState === screenStates.RESULT && (
					<ResultWidget results={results} player={player} />
				)}
			</QuizContainer>
			<GitHubCorner projectUrl="https://github.com/ReneSena/quiz-cavaleiro-zodiaco" />
		</QuizBackground>
	);
}

QuizTemplate.defaultProps = {
	titleQuiz: '',
};

QuizTemplate.propTypes = {
	titleQuiz: PropTypes.string,
	backgroundImage: PropTypes.string.isRequired,
	questionsQuiz: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default QuizTemplate;
