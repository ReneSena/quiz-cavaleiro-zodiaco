import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import Logo from "../src/components/QuizLogo";
import Head from "next/head";
import { Button } from "../src/components/Button";
import { Input } from "../src/components/Input";
import { useRouter } from "next/router";
import { useState } from "react";
import { ListQuiz } from "../src/components/ListQuiz";
import { Player } from "../src/components/Player";

export const QuizContainer = styled.div`
	width: 100%;
	max-width: 350px;
	padding-top: 45px;
	margin: auto 10%;

	@media screen and (max-width: 500px) {
		margin: auto;
		padding: 15px;
	}
`;

export default function Home() {
	const router = useRouter();
	const [name, setName] = useState("");

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
				<title>Quiz - CDZ</title>
			</Head>
			<QuizContainer>
				<Player />
				<Logo />
				<Widget>
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
							<Button disabled={name.length === 0}>Jogar</Button>
						</form>
					</Widget.Content>
				</Widget>

				<Widget>
					<Widget.Content>
						<h1>Quizes da galera</h1>

						<p>
							Dá uma olhada nesses quizes incríveis que o pessoal
							da Imersão fez:
						</p>
						<ListQuiz />
					</Widget.Content>
				</Widget>
				<Footer />
			</QuizContainer>
			<GitHubCorner projectUrl="https://github.com/ReneSena/quiz-cavaleiro-zodiaco" />
		</QuizBackground>
	);
}
