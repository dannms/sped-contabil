import client from '../../lib/apolloClient';
import { gql } from '@apollo/client';
import Head from 'next/head';
import Container from '../../components/container';
import Link from 'next/link';
import Image from 'next/image';

export default function Posts({ postagens }) {
	return (
		<>
			<Head>
				<title>Sped Contabil • Postagens </title>
			</Head>
			<div>
				<Container>
					<div className="pt-40 pb-20 grid grid-cols-1 gap-10 border-y-2 border-neutral">
						<div className="flex flex-col lg:flex-row items-center justify-between">
							<div className="flex flex-col gap-2">
								<h3 className="text-3xl lg:text-4xl font-bold font-serif text-primary">
									Notícias Recentes
								</h3>
								<div className="w-8 h-1 bg-secondary"></div>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
							{postagens.map((item, i) => (
								<Link key={i} href={`/posts/${item.slug}`}>
									<a>
										<div className="bg-neutral flex flex-col rounded-lg hover:shadow-lg hover:-translate-y-2 transition ease-in-out">
											<div className="relative w-full h-60">
												<Image
													src={item.imagemDeCapa.url}
													layout="fill"
													objectFit="cover"
													alt={`Imagem de capa da postatem ${item.titulo}`}
												/>
											</div>
											<div className="p-5 flex flex-col gap-5">
												<h4 className="font-bold text-xl text-primary">
													{item.titulo}
												</h4>
												<div className="flex gap-5 items-center">
													<div className="w-8 h-0.5 bg-secondary"></div>
													<small className="text-xs">
														{new Date(
															item.createdAt
														).toLocaleDateString(
															'pt-BR',
															{
																month: 'long',
																day: '2-digit',
																year: 'numeric',
															}
														)}
													</small>
												</div>
											</div>
										</div>
									</a>
								</Link>
							))}
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query {
				postagens(orderBy: dataDaPostagem_DESC) {
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
