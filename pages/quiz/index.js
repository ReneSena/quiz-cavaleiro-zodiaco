import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ErrorAlt } from '@styled-icons/boxicons-solid/ErrorAlt';
import { Verified } from '@styled-icons/material-sharp/Verified';

import db from '../../db.json';
import Widget from '../../src/components/Widget';
import QuizBackground from '../../src/components/QuizBackground';
import QuizContainer from '../../src/components/QuizContainer';
import GitHubCorner from '../../src/components/GitHubCorner';
import Logo from '../../src/components/QuizLogo';
import { Button } from '../../src/components/Button';
import AlternativesForm from '../../src/components/AlternativesForm';

import Pegasus from './../../src/assets/audio/pegasus.mp3';
import Ohno from '../../src/assets/audio/ohno.mp3';
import TrilhaSonora from '../../src/assets/audio/song.mp3';

import Loader from '../../src/components/Loader';

function ResultWidget(props) {
	const { results, player } = props;
	const audioFinish = React.useRef();
	const router = useRouter();

	React.useEffect(() => {
		audioFinish.current.play();
	}, []);

	return (
		<>
			<audio ref={audioFinish} src={TrilhaSonora}></audio>
			<Widget>
				<Widget.Header>Seus resultados: {player}</Widget.Header>
			</Widget>

			<Widget>
				<Widget.Content>
					<p>
						Você acertou {results.filter((result) => result).length}{' '}
						perguntas
					</p>
					<ul>
						{results.map((result, index) => (
							<li key={`result__${result}`}>
								{`0${index + 1}º`} Resultado:{' '}
								{result === true ? (
									<Verified size="20" color="green" />
								) : (
									<ErrorAlt size="20" color="red" />
								)}
							</li>
						))}
					</ul>
					<Button type="button" onClick={() => router.push('/')}>
						Voltar para o ínicio
					</Button>
				</Widget.Content>
			</Widget>
		</>
	);
}

function Questions(props) {
	const {
		question,
		totalQuestions,
		questionIndex,
		onSubmit,
		addResult,
	} = props;
	const [isQuestionFormSubmited, setIsQuestionFormSubmited] = React.useState(
		false
	);
	const questionId = `question__${questionIndex}`;
	const [selectedAlternative, setselectedAlternative] = React.useState(
		undefined
	);
	const isCorrect = selectedAlternative === question.answer;
	const hasAlternativeSelected = selectedAlternative !== undefined;
	const audioTrack = React.useRef();
	const form = React.useRef();

	return (
		<Widget>
			<Widget.Header>
				<h3>
					{`Pergunta ${questionIndex + 1}`} de {totalQuestions}
				</h3>
			</Widget.Header>

			<img
				src={question.image}
				alt={question.alt}
				width={'350px'}
				height={'200px'}
			/>

			<Widget.Content>
				<h2>{question.title}</h2>
				<p>{question.description}</p>

				<AlternativesForm
					ref={form}
					onSubmit={(event) => {
						event.preventDefault();
						setIsQuestionFormSubmited(true);

						if (audioTrack.current) {
							audioTrack.current.play();
						}

						setTimeout(() => {
							addResult(isCorrect);
							setIsQuestionFormSubmited(false);
							setselectedAlternative(undefined);
							form.current.reset();
							onSubmit();
						}, 5 * 1000);
					}}>
					{question.alternatives.map(
						(alternative, alternativeIndex) => {
							const alternativeId = `alternative__${alternativeIndex}`;
							const alternativeStatus = isCorrect
								? 'SUCCESS'
								: 'ERROR';

							const isSelected =
								selectedAlternative === alternativeIndex;

							return (
								<>
									<Widget.Topic
										key={alternativeId}
										as="label"
										htmlFor={alternativeId}
										data-selected={isSelected}
										data-status={
											isQuestionFormSubmited &&
											alternativeStatus
										}>
										<input
											id={alternativeId}
											type="radio"
											name={questionId}
											onClick={() => {
												setselectedAlternative(
													alternativeIndex
												);
											}}
										/>

										{alternative}
									</Widget.Topic>
								</>
							);
						}
					)}

					<audio
						ref={audioTrack}
						src={isCorrect ? Pegasus : Ohno}
						type="audio/mpeg"
						preload="auto"
					/>

					<Button type="submit" disabled={!hasAlternativeSelected}>
						Confirmar
					</Button>
				</AlternativesForm>
			</Widget.Content>
		</Widget>
	);
}

const screenStates = {
	QUIZ: 'QUIZ',
	LOADING: 'LOADING',
	RESULT: 'RESULT',
};

function Quiz() {
	const [screenState, setScreenState] = React.useState(screenStates.LOADING);
	const [results, setResults] = React.useState([]);

	const totalQuestions = db.questions.length;
	const [currentQuestion, setCurrentQuestion] = React.useState(0);
	const questionIndex = currentQuestion;
	const question = db.questions[questionIndex];
	const router = useRouter();

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
		<QuizBackground backgroundImage={db.bg}>
			<Head>
				<title>{db.title}</title>
			</Head>
			<QuizContainer>
				<Logo />

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

export default Quiz;
