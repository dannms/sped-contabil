import Head from 'next/head';
import Hero from '../components/hero';
import Intro from '../components/intro';
import News from '../components/news';
import { gql } from '@apollo/client';
import client from '../lib/apolloClient';
import Partners from '../components/partners';
import Cta from '../components/call-to-action';

export default function Home({ postagens }) {
	return (
		<>
			<Head>
				<title>Sped Contábil</title>
			</Head>
			<div>
				<Hero />
				<Intro />
				<News items={postagens} />
				<Partners />
				<Cta />
			</div>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query {
				postagens(last: 3, orderBy: dataDaPostagem_DESC) {
					titulo
					slug
					dataDaPostagem
					imagemDeCapa {
						url
					}
					resumoDaPostagem
					createdAt
				}
			}
		`,
	});
	const { postagens } = data;
	return {
		props: {
			postagens,
		},
	};
}
