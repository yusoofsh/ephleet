import { FC, Suspense } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Flowbite, Spinner } from 'flowbite-react';

import '../styles/globals.css';
import theme from '../styles/theme';

const App: FC<AppProps> = function ({ Component, pageProps }): JSX.Element {
	return (
		<Suspense
			fallback={
				<div className="flex items-center justify-center">
					<Spinner size="lg" /> Loading..
				</div>
			}
		>
			<Flowbite theme={{ theme }}>
				<Component {...pageProps} />
			</Flowbite>
		</Suspense>
	);
};

export default App;
