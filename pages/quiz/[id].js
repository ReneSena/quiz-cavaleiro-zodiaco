import React from "react";
import { ThemeProvider } from "styled-components";
import QuizScreen from "../../src/screens/Quiz";

//Pegar a página de quiz e adaptar para usar ela com os quizes da galera
//Deixar o links desabilitados antes de escrever o nome
//Questionários muitos bom, unir questionários que tem a haver com o tema

export default function QuizDaGalera({ dbExterno }) {
	return (
		<div>
			<ThemeProvider theme={dbExterno.theme}>
				<QuizScreen
					externalQuestions={dbExterno.questions}
					externalBg={dbExterno.bg}
					externalTitle={dbExterno.title}
				/>
			</ThemeProvider>
		</div>
	);
}

export async function getServerSideProps(context) {
	const [project, user] = context.query.id.split("___");

	try {
		const dbExterno = await fetch(
			`https://${project}.${user}.vercel.app/api/db`
		)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}

				throw new Error("Falha em pegar os dados");
			})
			.then((responseData) => {
				return responseData;
			})
			.catch((error) => {
				console.log(error);
			});

		return {
			props: {
				dbExterno,
			},
		};
	} catch (error) {
		throw new Error("Falha em pegar os dados");
	}
}
