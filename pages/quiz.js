import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import GitHubCorner from "../src/components/GitHubCorner";
import Logo from "../src/components/QuizLogo";
import Head from "next/head";

import { Button } from "../src/components/Button";

function LoadingWidget() {
	return (
		<>
			<Widget>
				<Widget.Header>Carregando...</Widget.Header>
			</Widget>

			<Widget>
				<Widget.Content>[Loading da massa]</Widget.Content>
			</Widget>
		</>
	);
}

function Questions(props) {
	const { question, totalQuestions, questionIndex, onSubmit } = props;
	const questionId = `question__${questionIndex}`;

	return (
		<Widget>
			<Widget.Header>
				<h3>
					{`Pergunta ${questionIndex + 1}`} de {totalQuestions}
				</h3>
			</Widget.Header>

			<img
				alt="Descrição"
				style={{
					width: "100%",
					objecFit: "cover",
				}}
				src={question.image}
				height="200"
			/>

			<Widget.Content>
				<h2>{question.title}</h2>
				<p>{question.description}</p>

				<form
					onSubmit={(event) => {
						event.preventDefault();

						onSubmit();
					}}
				>
					{question.alternatives.map(
						(alternative, alternativeIndex) => {
							const alternativeId = `alternative__${alternativeIndex}`;

							return (
								<Widget.Topic
									key={alternativeIndex}
									as="label"
									htmlFor={alternativeId}
								>
									<input
										id={alternativeId}
										type="radio"
										name={questionId}
									/>
									{alternative}
								</Widget.Topic>
							);
						}
					)}

					<Button type="submit">Confirmar</Button>
				</form>
			</Widget.Content>
		</Widget>
	);
}

const screenStates = {
	QUIZ: "QUIZ",
	LOADING: "LOADING",
	RESULT: "RESULT",
};

function Quiz() {
	const [screenState, setScreenState] = React.useState(screenStates.LOADING);
	const totalQuestions = db.questions.length;
	const [currentQuestion, setCurrentQuestion] = React.useState(0);
	const questionIndex = currentQuestion;
	const question = db.questions[questionIndex];

	React.useEffect(() => {
		setTimeout(() => {
			setScreenState(screenStates.QUIZ);
		}, 1 * 1000);
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
					/>
				)}

				{screenState === screenStates.LOADING && <LoadingWidget />}

				{screenState === screenStates.RESULT && (
					<div>Você acertou X questões, parabéns!!</div>
				)}
			</QuizContainer>
			<GitHubCorner projectUrl="https://github.com/ReneSena/quiz-cavaleiro-zodiaco" />
		</QuizBackground>
	);
}

export default Quiz;
