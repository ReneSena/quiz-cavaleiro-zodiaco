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
				<Widget.Header>Prepare-se!!!</Widget.Header>
			</Widget>

			<Widget>
				{/* <Widget.Content> */}
				<img
					style={{ width: "100%", height: "100%" }}
					src="https://geekquantico.com.br/wp-content/uploads/2019/11/P%C3%A9gaso-Gif.gif"
				/>
				{/* </Widget.Content> */}
			</Widget>
		</>
	);
}

function Questions(props) {
	const { question, totalQuestions, questionIndex, onSubmit } = props;
	const questionId = `question__${questionIndex}`;

	function handleAlternative(event) {
		console.log(event.target.value);
	}

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

						console.log(event.target);
					}}
				>
					{question.alternatives.map(
						(alternative, alternativeIndex) => {
							const alternativeId = `alternative__${alternativeIndex}`;

							return (
								<Widget.Topic
									onClick={handleAlternative}
									key={alternativeIndex}
									as="label"
									htmlFor={alternativeId}
								>
									<input
										id={alternativeId}
										type="radio"
										name={questionId}
										value={alternativeIndex}
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
					/>
				)}

				{screenState === screenStates.LOADING && <LoadingWidget />}

				{screenState === screenStates.RESULT && (
					<div>Em construção!!</div>
				)}
			</QuizContainer>
			<GitHubCorner projectUrl="https://github.com/ReneSena/quiz-cavaleiro-zodiaco" />
		</QuizBackground>
	);
}

export default Quiz;
