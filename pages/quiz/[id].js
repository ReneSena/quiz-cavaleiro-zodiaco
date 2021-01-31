import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import QuizTemplate from '../../src/screens/Quiz';

export default function QuizDaGalera({ dbExterno }) {
	return (
		<div>
			<ThemeProvider theme={dbExterno.theme}>
				<QuizTemplate
					questionsQuiz={dbExterno}
					backgroundQuiz={dbExterno}
					externalTitle={dbExterno}
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

QuizDaGalera.propTypes = {
	dbExterno: PropTypes.objectOf(PropTypes.object).isRequired,
};
