import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import Logo from "../src/components/QuizLogo";
import Head from "next/head";
import { Button } from "../src/components/Button";
import { Input } from "../src/components/Input";
import { useRouter } from "next/router";
import { useState } from "react";
import { ListQuiz } from "../src/components/ListQuiz";

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
				<title>{db.title}</title>
			</Head>
			<QuizContainer>
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
