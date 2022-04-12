import { gql } from '@apollo/client';
import React from 'react';
import client from '../../lib/apolloClient';
import Head from 'next/head';
import Container from '../../components/container';
import Image from 'next/image';

export default function PostPage({ postagem }) {
	return (
		<>
			<Head>
				<title>{postagem.titulo}</title>
			</Head>
			<div className="text-center lg:text-left md:max-w-lg lg:max-w-full mx-auto">
				<Container>
					<div className="pt-32 pb-20">
						<div className="relative w-full h-96">
							<Image
								src={postagem.imagemDeCapa.url}
								alt={`Capa do post ${postagem.titulo}`}
								layout="fill"
								objectFit="cover"
								className="rounded-lg"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-5 pb-40">
						<div className="flex flex-col gap-2 items-center">
							<h1 className="text-3xl lg:text-2xl font-bold font-serif text-primary">
								{postagem.titulo}
							</h1>
							<div className="w-40 h-1 bg-secondary"></div>
						</div>
						<div className="flex gap-5 justify-center items-center">
							<i className="bx bx-calendar p-2 bg-primary rounded-lg text-secondary"></i>
							<small className="text-primary font-bold">
								{postagem.dataDaPostagem}
							</small>
						</div>
						<div>
							<p className="text-opacity-75 text-sm text-center">
								<i>{postagem.resumoDaPostagem}</i>
							</p>
						</div>
						<div>
							<div
								className="flex flex-col gap-5"
								dangerouslySetInnerHTML={{
									__html: postagem.conteudoDaPostagem.html,
								}}
							></div>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}

export async function getStaticPaths() {
	const { data: data } = await client.query({
		query: gql`
			query {
				postagens {
					slug
				}
			}
		`,
	});
	const { postagens } = data;
	const paths = postagens.map((post) => ({
		params: { slug: [post.slug] },
	}));
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const slug = params.slug[0];
	const { data } = await client.query({
		query: gql`
			query PostBySlug($slug: String!) {
				postagens(where: { slug: $slug }) {
					titulo
					slug
					subtitulo
					dataDaPostagem
					imagemDeCapa {
						url
					}
					resumoDaPostagem
					createdAt
					conteudoDaPostagem {
						html
					}
				}
			}
		`,
		variables: { slug },
	});
	const { postagens } = data;
	const postagem = postagens[0];
	return { props: { postagem } };
}
