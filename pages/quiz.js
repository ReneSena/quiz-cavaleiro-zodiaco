import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import GitHubCorner from "../src/components/GitHubCorner";
import Logo from "../src/components/QuizLogo";
import Head from "next/head";
import { Button } from "../src/components/Button";
import AlternativesForm from "../src/components/AlternativesForm";

import Hyoga from "../src/assets/audio/trovao.mp3";
import Ikki from "../src/assets/audio/ikki.mp3";
import Pegasus from "../src/assets/audio/pegasus.mp3";
import Shiryu from "../src/assets/audio/shiryu.mp3";
import Shun from "../src/assets/audio/shun.mp3";
import Ohno from "../src/assets/audio/ohno.mp3";
import TrilhaSonora from "../src/assets/audio/song.mp3";

import { ErrorAlt } from "@styled-icons/boxicons-solid/ErrorAlt";
import { Verified } from "@styled-icons/material-sharp/Verified";

function LoadingWidget() {
	return (
		<>
			<Widget>
				<Widget.Header>Prepare-se!!!</Widget.Header>
			</Widget>

			<Widget>
				<img
					style={{ width: "100%", height: "100%" }}
					src="https://geekquantico.com.br/wp-content/uploads/2019/11/P%C3%A9gaso-Gif.gif"
				/>
			</Widget>
		</>
	);
}

function ResultWidget(props) {
	const { results } = props;
	const audioFinish = React.useRef();

	React.useEffect(() => {
		audioFinish.current.play();
	}, []);

	return (
		<>
			<audio ref={audioFinish} src={TrilhaSonora}></audio>
			<Widget>
				<Widget.Header>Seus resultados</Widget.Header>
			</Widget>

			<Widget>
				<Widget.Content>
					<p>
						Você acertou {results.filter((result) => result).length}{" "}
						perguntas
					</p>
					<ul>
						{results.map((result, index) => (
							<li key={`result__${result}`}>
								{`0${index + 1}º`} Resultado:{" "}
								{result === true ? (
									<Verified size="20" color="green" />
								) : (
									<ErrorAlt size="20" color="red" />
								)}
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

				<AlternativesForm
					ref={form}
					onSubmit={(event) => {
						event.preventDefault();
						setIsQuestionFormSubmited(true);
						audioTrack.current.play();

						setTimeout(() => {
							addResult(isCorrect);
							setIsQuestionFormSubmited(false);
							setselectedAlternative(undefined);
							form.current.reset();
							onSubmit();
						}, 5 * 1000);
					}}
				>
					{question.alternatives.map(
						(alternative, alternativeIndex) => {
							const alternativeId = `alternative__${alternativeIndex}`;
							const alternativeStatus = isCorrect
								? "SUCCESS"
								: "ERROR";

							const isSelected =
								selectedAlternative === alternativeIndex;

							return (
								<Widget.Topic
									key={alternativeId}
									as="label"
									htmlFor={alternativeId}
									data-selected={isSelected}
									data-status={
										isQuestionFormSubmited &&
										alternativeStatus
									}
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

									{alternativeStatus === "SUCCESS" &&
										questionId && (
											<audio
												ref={audioTrack}
												src={Hyoga}
											/>
										)}

									{alternativeStatus === "SUCCESS" &&
										questionId && (
											<audio
												ref={audioTrack}
												src={Ikki}
											/>
										)}

									{alternativeStatus === "SUCCESS" &&
										questionId && (
											<audio
												ref={audioTrack}
												src={Shun}
											/>
										)}

									{alternativeStatus === "SUCCESS" &&
										questionId && (
											<audio
												ref={audioTrack}
												src={Shiryu}
											/>
										)}

									{alternativeStatus === "SUCCESS" &&
										questionId && (
											<audio
												ref={audioTrack}
												src={Pegasus}
											/>
										)}

									{alternativeStatus === "ERROR" &&
										questionId && (
											<audio
												ref={audioTrack}
												src={Ohno}
											/>
										)}

									{alternative}
								</Widget.Topic>
							);
						}
					)}

					<Button type="submit" disabled={!hasAlternativeSelected}>
						Confirmar
					</Button>

					{/* {isQuestionFormSubmited && isCorrect && (
						<p>Você acertou!</p>
					)}
					{isQuestionFormSubmited && !isCorrect && <p>Você errou!</p>} */}
				</AlternativesForm>
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
