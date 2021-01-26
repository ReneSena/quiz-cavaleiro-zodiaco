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
				<link rel="preconnect" href="https://fonts.gstatic.com" />
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
