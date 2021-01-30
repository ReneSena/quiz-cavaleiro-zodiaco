import React from 'react';
import Widget from '../../components/Widget';
import { Button } from '../../components/Button';
import AlternativesForm from '../../components/AlternativesForm';
import BackLinkArrow from '../../components/BackLinkArrow';

import Pegasus from '../../assets/audio/pegasus.mp3';
import Ohno from '../../assets/audio/ohno.mp3';

export default function Questions(props) {
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

	if (question.answer) {
		console.log(question);
	}

	const isCorrect = selectedAlternative === question.answer;
	const hasAlternativeSelected = selectedAlternative !== undefined;
	const audioTrack = React.useRef();
	const form = React.useRef();

	return (
		<Widget>
			<Widget.Header>
				<BackLinkArrow href="/" />

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