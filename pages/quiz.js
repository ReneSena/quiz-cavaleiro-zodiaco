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

function ResultWidget(props) {
	const { results } = props;

	return (
		<>
			<Widget>
				<Widget.Header>Seus resultados</Widget.Header>
			</Widget>

			<Widget>
				<Widget.Content>
					<p>
						Você acertou{" "}
						{/* {results.reduce((somatoriaAtual, resultAtual) => {
						const isAcerto = resultAtual === true;

						if (isAcerto) {
							return somatoriaAtual + 1;
						}

						return somatoriaAtual;
					}, 0)} */}
						{results.filter((result) => result).length} perguntas
					</p>
					<ul>
						{results.map((result, index) => (
							<li key={`result__${result}`}>
								#{`0${index + 1}`} Resultado:{" "}
								{result === true ? "Acertou" : "Errou"}
							</li>
						))}
					</ul>
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
	const isCorret = selectedAlternative === question.answer;
	const hasAlternativeSelected = selectedAlternative !== undefined;

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
						setIsQuestionFormSubmited(true);

						setTimeout(() => {
							addResult(isCorret);
							setIsQuestionFormSubmited(false);
							setselectedAlternative(null);
							onSubmit();
						}, 3 * 1000);
					}}
				>
					{question.alternatives.map(
						(alternative, alternativeIndex) => {
							const alternativeId = `alternative__${alternativeIndex}`;

							return (
								<Widget.Topic
									key={alternativeId}
									as="label"
									htmlFor={alternativeId}
								>
									<input
										id={alternativeId}
										type="radio"
										name={questionId}
										onChange={() => {
											setselectedAlternative(
												alternativeIndex
											);
										}}
									/>
									{alternative}
								</Widget.Topic>
							);
						}
					)}

					<Button type="submit" disabled={!hasAlternativeSelected}>
						Confirmar
					</Button>

					{isQuestionFormSubmited && isCorret && <p>Você acertou!</p>}
					{isQuestionFormSubmited && !isCorret && <p>Você errou!</p>}
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
	const [results, setResults] = React.useState([]);

	const totalQuestions = db.questions.length;
	const [currentQuestion, setCurrentQuestion] = React.useState(0);
	const questionIndex = currentQuestion;
	const question = db.questions[questionIndex];

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

				{screenState === screenStates.LOADING && <LoadingWidget />}

				{screenState === screenStates.RESULT && (
					<ResultWidget results={results} />
				)}
			</QuizContainer>
			<GitHubCorner projectUrl="https://github.com/ReneSena/quiz-cavaleiro-zodiaco" />
		</QuizBackground>
	);
}

export default Quiz;
