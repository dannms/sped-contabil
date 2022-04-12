import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html lang="pt-br">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Raleway:wght@400;700&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="shortcut icon"
					href="/favicon.png"
					type="image/x-icon"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
