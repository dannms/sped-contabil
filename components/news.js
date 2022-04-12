import Container from './container';
import Image from 'next/image';
import Link from 'next/link';

export default function News({ items }) {
	return (
		<>
			<div className="">
				<Container>
					<div className="py-20 grid grid-cols-1 gap-10 border-y-2 border-neutral">
						<div className="flex flex-col lg:flex-row items-center justify-between">
							<div className="flex flex-col gap-2">
								<h3 className="text-3xl lg:text-4xl font-bold font-serif text-primary">
									Notícias Recentes
								</h3>
								<div className="w-8 h-1 bg-secondary"></div>
							</div>
							<Link href="/posts">
								<a className="hidden lg:flex items-center gap-2">
									<div className="w-8 h-0.5 bg-secondary"></div>
									<small className="text-accent">
										Ver todas as notícias
									</small>
								</a>
							</Link>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
							{items.map((item, i) => (
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
						<div>
							<Link href="/posts">
								<a className="flex lg:hidden gap-2 w-full items-center justify-center">
									<div className="bg-primary p-2">
										<small className="text-white font-bold">
											Ver todas as notícias
										</small>
									</div>
								</a>
							</Link>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}
