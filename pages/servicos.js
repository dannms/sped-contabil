import Head from 'next/head';
import Container from '../components/container';

const services = [
	{
		id: 1,
		name: 'Contabilidade Geral',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos adipisci, itaque officia cumque iure dignissimos temporibus. Nulla molestiae unde sequi? Ipsa corrupti aspernatur quae temporibus provident, ex saepe fugiat?',
	},
	{
		id: 2,
		name: 'Escrita Fiscal e Obrigações Acessórias',
		desc: 'SPED/DCTF-Web, EFD-Reinf, e-Social (prestadores de serviços), EFD Contribuições, DCTF, e-Financeira, DTTA, ECD (SPED Contábil), DIRF, ECF (SPED Fiscal), Informe de Rendimentos Financeiros, RAIS e outros. Elaboração das informações a serem prestadas nas obrigações acessórias da Prefeitura Municipal do RJ. Controle, acompanhamento e emissão dos respectivos DARF de obrigações decorrentes de adesão a Programas de Refinanciamento Fiscal (REFIS). Apuração da Base de Cálculo da Contribuição Social sobre o Lucro Líquido. Controle e Apuração do Prejuízo Fiscal do IRPJ. Apuração da Base de Cálculo do Imposto de Renda- PJ por Estimativa Mensal. Apuração para Recolhimento do COFINS/CSLL/PIS sobre prestação de serviço. Apuração para Recolhimento do IRRF sobre Prestação de serviço pessoas física e jurídica. Apuração para Recolhimento do IRRF sobre Complemento de Aposentadoria. Apuração das bases para Recolhimento do PIS e COFINS – Retenção, entre outros serviços.',
	},
	{
		id: 3,
		name: 'Acompanhamento de Processos Administrativos e Judiciais',
		desc: 'Diligências, acompanhamento e atendimento de assuntos fiscais e tributários ligados a Órgãos Fazendários – SRFB, PGFN, INSS/FGTS, BACEN, PGMRJ, PGFMSP e outros, inclusive acompanhamento de Processos objeto de adesões a Programas de REFIS na SRFB/PGFN, saldo de créditos tributários – Prejuízo Fiscal e Base Negativa, (convalidações, etc.);',
	},
	{
		id: 4,
		name: 'Relatórios Gerenciais e Outras Atividades',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum. Possimus mollitia quod accusamus? Quibusdam repellendus tenetur error? Placeat veniam distinctio totam! Nihil repellat ipsam ex fuga unde, a sunt!',
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
			<div>
				<Container>
					<div className="pt-40 pb-20 flex flex-col gap-5">
						<div className="flex flex-col gap-2">
							<h3 className="text-3xl lg:text-4xl font-bold font-serif text-primary">
								Nossos serviços
							</h3>
							<div className="w-8 h-1 bg-secondary"></div>
						</div>
						<div className="my-10">
							<h4>Texto de chamada para os serviços</h4>
						</div>
						{services.map((item) => (
							<div
								key={item.id}
								className="grid grid-cols-2 gap-10"
							>
								<div>
									<h6 className="font-serif text-lg font-bold">
										{item.name}
									</h6>
								</div>
								<div>{item.desc}</div>
							</div>
						))}
						<div className="mt-10">
							<div className="flex flex-col gap-5 items-center justify-center">
								<h4 className="font-serif font-bold text-xl">
									Confira as soluções que desenvolvemos para o
									seu negócio:
								</h4>
								<div className="grid grid-cols-4 gap-10">
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
