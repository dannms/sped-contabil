import Head from 'next/head';
import Image from 'next/image';
import Container from '../components/container';

const Sobre = () => {
	return (
		<>
			<Head>
				<title>Sped Contábil • Sobre nós</title>
			</Head>
			<div>
				<Container>
					<div className="pt-40 pb-20 flex flex-col gap-5">
						<div className="flex flex-col gap-2">
							<h3 className="text-3xl lg:text-4xl font-bold font-serif text-primary">
								SPED Contábil
							</h3>
							<div className="w-8 h-1 bg-secondary"></div>
						</div>
						<div className="my-10">
							<div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
								<div className="col-span-2">
									<div className="relative w-full h-96">
										<Image
											src="/images/about.jpg"
											alt="Imagem com um notebook com um dashboard aberto"
											layout="fill"
											objectFit="cover"
											className="rounded-lg"
										/>
									</div>
								</div>
								<div className="col-span-2">
									<div className="flex flex-col gap-5">
										<div className="flex flex-col gap-2">
											<h3 className="text-3xl lg:text-xl font-bold font-serif text-primary">
												Quem somos?
											</h3>
											<div className="w-8 h-1 bg-secondary"></div>
										</div>
										<p>
											Somos uma empresa nova, mas que
											conta com a experiência de seus
											sócios fundadores a mais de 20 anos
											na área Contábil Fiscal e
											Jurídico-Tributária, voltada para
											Instituições Financeiras, e está no
											mercado para atender novos clientes
											parceiros. Contamos com
											profissionais bem qualificados em
											nossa equipe. Conduzimos nossas
											atividades com segurança,
											responsabilidade, qualidade,
											pontualidade e comprometimento em
											nosso segmento.
										</p>
										<p>
											Dedicamos o nosso trabalho a
											melhorar o desempenho de nossos
											clientes aplicando os nossos
											conhecimentos e inovação em todas as
											nossas ações.
										</p>
										<p>
											Nossa missão, é atender e superar as
											expectativas dos nossos clientes,
											fornecendo prestação de serviço com
											qualidade, ética e transparência.
										</p>
									</div>
								</div>
							</div>
							<div className="py-10">
								<div>
									<div className="flex flex-col gap-2">
										<h3 className="text-3xl lg:text-xl font-bold font-serif text-primary">
											Nossos valores
										</h3>
										<div className="w-8 h-1 bg-secondary"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Sobre;
