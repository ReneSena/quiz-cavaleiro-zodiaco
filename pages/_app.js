import React from 'react';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		display: flex;
		flex-direction: column;
		font-family: 'Lato', sans-serif;
		color: ${({ theme }) => theme.colors.contrastText};
	}

	html, body {
		min-height: 100vh;
	}

	#__next {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>CDZQUIZ - Os Cavaleiros do Zodíaco</title>
				<meta property="og:locale" content="pt_BR" />
				<meta property="og:image:url" content={db.bg} />
				<meta
					name="title"
					content="CDZQUIZ - Os Cavaleiros do Zodíaco"
				/>
				<meta
					property="og:url"
					content="https://quiz-cavaleiro-zodiaco.vercel.app/"
				/>

				<meta property="og:type" content="website" />

				<meta name="description" content={db.description} />

				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://quiz-cavaleiro-zodiaco.vercel.app/"
				/>
				<meta
					property="twitter:title"
					content="CDZQUIZ - Os Cavaleiros do Zodíaco"
				/>
				<meta property="twitter:description" content={db.description} />
				<meta property="twitter:image" content={db.bg} />

				<link
					rel="icon"
					type="image/png"
					sizes="170x170"
					href="/favicon.png"
				/>

				<link
					href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
