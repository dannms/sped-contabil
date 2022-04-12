import Head from 'next/head';
import Container from '../components/container';
import Image from 'next/image';

const areas = [
	{
		name: 'Contabilidade Geral',
		icon: 'bx bx-calculator',
		id: 1,
	},
	{
		name: 'Obrigações Fiscais e Acessórias',
		icon: 'bx bx-dollar-circle',
		id: 2,
	},
	{
		name: 'Consultoria Fiscal e Tributária',
		icon: 'bx bx-briefcase',
		id: 3,
	},
];

const Atuacao = () => {
	return (
		<>
			<Head>
				<title>Sped Contábil • Áreas de Atuação</title>
			</Head>
			<div className="text-center md:text-left max-w-lg mx-auto lg:max-w-full">
				<Container>
					<div className="pt-40 pb-20 flex flex-col gap-5">
						<div className="flex flex-col gap-2 items-center">
							<h3 className="text-3xl lg:text-4xl font-bold font-serif text-primary">
								Áreas de Atuação
							</h3>
							<div className="w-8 h-1 bg-secondary"></div>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
							<div className="flex flex-col gap-10">
								<p>
									A nossa empresa atua na prestação de
									serviços de contabilidade, obrigações
									fiscais, e consultoria fiscal/tributária,
									voltada para Instituições Financeiras em
									regime de Liquidação Extrajudicial, e conta
									com profissionais qualificados com larga
									experciência nesse ramo.
								</p>
								<div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
									{areas.map((item) => (
										<div
											key={item.id}
											className="bg-neutral rounded-lg p-4 hover:shadow-sm transition ease-in-out"
										>
											<div className="flex lg:flex-col items-center gap-5">
												<div className="lg:pb-5 text-2xl text-primary">
													<i
														className={item.icon}
													></i>
												</div>
												<small className="font-bold">
													{item.name}
												</small>
											</div>
										</div>
									))}
								</div>
							</div>
							<div>
								<div className="relative w-full h-96">
									<Image
										src="/images/atuacao.jpg"
										alt="Imagem de um notebook sobre uma mesa"
										layout="fill"
										objectFit="cover"
										className="rounded-lg"
									/>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Atuacao;
