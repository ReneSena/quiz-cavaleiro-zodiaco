import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import db from "../db.json";

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

const theme = db.theme;

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta property="og:locale" content="pt_BR" />
				<meta property="og:image" content={db.bg} />
				<meta
					property="og:url"
					content="https://quiz-cavaleiro-zodiaco.vercel.app/"
				/>
				<meta
					name="title"
					content="CDZQUIZ - Quiz relacionado ao anime Cavalerios do Zodíaco"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="twitter:url"
					content="https://quiz-cavaleiro-zodiaco.vercel.app/"
				/>
				<meta
					property="twitter:title"
					content="CDZQUIZ - Quiz relacionado ao anime Cavalerios do Zodíaco"
				/>
				<meta property="twitter:image" content={db.bg}></meta>

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
