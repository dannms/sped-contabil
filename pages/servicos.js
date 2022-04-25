import Head from 'next/head';
import Container from '../components/container';

const services = [
	{
		id: 1,
		name: 'Contabilidade Geral',
		icon: 'bx bx-coin',
	},
	{
		id: 2,
		name: 'Escrita Fiscal e Obrigações Acessórias',
		icon: 'bx bx-receipt',
	},
	{
		id: 3,
		name: 'Acompanhamento de Processos Administrativos e Judiciais',
		icon: 'bx bx-file-find',
	},
	{
		id: 4,
		name: 'Relatórios Gerenciais e Outras Atividades',
		icon: 'bx bx-pie-chart-alt-2',
	},
];

const solutions = [
	{
		id: 1,
		name: 'Obrigações Fiscais e Acessórias',
	},
	{
		id: 2,
		name: 'Obrigações Contábeis',
	},
	{
		id: 3,
		name: 'Abertura, Alterações e Encerramento de Empresas',
	},
	{
		id: 4,
		name: 'Regularização de Empresas',
	},
];

const Servicos = () => {
	return (
		<>
			<Head>
				<title>Sped Contábil • Serviços</title>
			</Head>
			<div className="text-center md:text-left lg:text-left max-w-lg mx-auto lg:max-w-full">
				<Container>
					<div className="pt-40 pb-20 flex flex-col gap-5">
						<div className="flex flex-col gap-2 items-center">
							<h3 className="text-3xl lg:text-4xl font-bold font-serif text-primary">
								Nossos serviços
							</h3>
							<div className="w-8 h-1 bg-secondary"></div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
							{services.map((item) => (
								<div
									key={item.id}
									className="p-6 bg-neutral flex flex-col items-start h-40 text-sm font-bold gap-5"
								>
									<i className={`${item.icon} text-2xl`}></i>
									<p className="text-xs text-left">
										{item.name}
									</p>
								</div>
							))}
						</div>
						<div className="mt-10">
							<div className="flex flex-col gap-5 items-center justify-center">
								<h4 className="font-serif font-bold text-xl">
									Confira as soluções que desenvolvemos para o
									seu negócio:
								</h4>
								<div className="grid grid-cols-1 lg:grid-cols-4 gap-10 py-20">
									{solutions.map((item) => (
										<div
											key={item.id}
											className="text-center"
										>
											<p>{item.name}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Servicos;
