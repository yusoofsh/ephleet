import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function EphleetApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Welcome to web!</title>
			</Head>
			<main className="app">
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default EphleetApp;
