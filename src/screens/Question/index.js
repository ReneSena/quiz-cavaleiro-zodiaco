import React from 'react';
import Widget from '../../components/Widget';
import { useRouter } from 'next/router';
import { Button } from '../../components/Button';
import AlternativesForm from '../../components/AlternativesForm';
import BackLinkArrow from '../../components/BackLinkArrow';
import { motion } from 'framer-motion';
import Timer from '../../components/Timer';
import Modal from '../../components/Modal';

import Ohno from '../../assets/audio/ohno.mp3';
import Pegasus from '../../assets/audio/pegasus.mp3';

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

	const isCorrect = selectedAlternative === question.answer;
	const hasAlternativeSelected = selectedAlternative !== undefined;
	const audioTrack = React.useRef();
	const form = React.useRef();
	const router = useRouter();

	const [timer, setTimer] = React.useState(30);

	React.useEffect(() => {
		let alarm = setInterval(handleTimer, 1000);

		function handleTimer() {
			setTimer((timer) => timer - 1);
		}

		if (timer === 0) {
			console.log(timer);
			clearInterval(alarm);
			setTimer(0);

			setTimeout(() => {
				router.push('/');
			}, 5 * 1000);
		}

		return () => clearInterval(alarm);
	}, [timer]);

	return (
		<div style={{ position: 'relative' }}>
			<Modal status={timer === 0 ? 'show' : ''} />
			<Widget>
				<Widget.Header>
					<BackLinkArrow href="/" />

					<h3>
						{`Pergunta ${questionIndex + 1}`} de {totalQuestions}
					</h3>
				</Widget.Header>

				<Widget.Image
					src={question.alternative}
					alt={question.alt}
					as={motion.img}
					transition={{
						delay: 0.8,
						duration: 0.5,
					}}
					variants={{
						show: { opacity: 1 },
						hidden: { opacity: 0 },
					}}
				/>

				<Widget.Content
					as={motion.section}
					transition={{ delay: 0, duration: 0.5 }}
					variants={{
						show: { opacity: 1 },
						hidden: { opacity: 0 },
					}}
					initial="hidden"
					animate="show">
					<h2>{question.title}</h2>
					<p>{question.description}</p>

					<Timer count={timer} />

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
								setTimer(30);
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
											as={motion.label}
											transition={{
												delay: 0.8,
												duration: 0.5,
											}}
											variants={{
												show: { opacity: 1 },
												hidden: { opacity: 0 },
											}}
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

						<Button
							type="submit"
							disabled={!hasAlternativeSelected}>
							Confirmar
						</Button>
					</AlternativesForm>
				</Widget.Content>
			</Widget>
		</div>
	);
}
