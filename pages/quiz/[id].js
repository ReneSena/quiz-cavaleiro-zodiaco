import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGalera({ dbExterno }) {
	const { theme, questions, bg, title } = dbExterno;

	return (
		<div>
			<ThemeProvider theme={theme}>
				<QuizScreen
					externalQuestions={questions}
					externalBg={bg}
					externalTitle={title}
				/>
			</ThemeProvider>
		</div>
	);
}

export async function getServerSideProps(context) {
	const [project, user] = context.query.id.split('___');

	try {
		const dbExterno = await fetch(
			`https://${project}.${user}.vercel.app/api/db`
		)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}

				throw new Error('Falha em pegar os dados');
			})
			.then((responseData) => responseData)
			.catch((error) => {
				throw new Error(error);
			});

		return {
			props: {
				dbExterno,
			},
		};
	} catch (error) {
		throw new Error('Falha em pegar os dados');
	}
}

// QuizDaGalera.propTypes = {
// 	dbExterno: PropTypes.objectOf(PropTypes.string).isRequired,
// };
