import db from '../db.json';
import { motion } from 'framer-motion';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Logo from '../src/components/QuizLogo';
import Head from 'next/head';
import { Button } from '../src/components/Button';
import { Input } from '../src/components/Input';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ListQuiz } from '../src/components/ListQuiz';

export default function Home() {
	const router = useRouter();
	const [name, setName] = useState('');

	function handleSubmit(event) {
		event.preventDefault();

		router.push(`/quiz?${name}`);
	}

	function handleDataName(event) {
		setName(event.target.value);
	}

	return (
		<QuizBackground backgroundImage={db.bg}>
			<Head>
				<title>{db.title}</title>
			</Head>
			<QuizContainer>
				{/* <Logo /> */}
				<Widget
					as={motion.section}
					transition={{ delay: 0, duration: 0.5 }}
					variants={{
						show: { opacity: 1, y: '0' },
						hidden: { opacity: 0, y: '100%' },
					}}
					initial="hidden"
					animate="show">
					<Widget.Header>
						<h1>{db.title}</h1>
					</Widget.Header>
					<Widget.Content>
						<p>{db.description}</p>
						<form onSubmit={handleSubmit}>
							<Input
								onChange={handleDataName}
								value={name}
								placeholder="Diz aí seu nome para jogar :)"
							/>
							<Button disabled={name.length === 0}>
								Entrar no jogo
							</Button>
						</form>
					</Widget.Content>
				</Widget>

				<Widget
					as={motion.section}
					transition={{ delay: 0.5, duration: 0.5 }}
					variants={{
						show: { opacity: 1 },
						hidden: { opacity: 0 },
					}}
					initial="hidden"
					animate="show">
					<Widget.Content>
						<h1>Quizes da galera</h1>

						<p>Jogar Quizes Semelhantes da Imersão:</p>

						<ListQuiz
							data={db.external}
							status={name.length === 0 && 'disabled'}
						/>
					</Widget.Content>
				</Widget>
				<Footer
					as={motion.footer}
					transition={{ delay: 0.5, duration: 0.5 }}
					variants={{
						show: { opacity: 1 },
						hidden: { opacity: 0 },
					}}
					initial="hidden"
					animate="show"
				/>
			</QuizContainer>
			<GitHubCorner projectUrl="https://github.com/ReneSena/quiz-cavaleiro-zodiaco" />
		</QuizBackground>
	);
}
