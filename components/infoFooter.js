import Container from './container';

const usefulLinks = [
	{
		nome: 'CRC',
		to: 'https://www.crc.org.br/',
		id: 1,
	},
	{
		nome: 'Banco Central',
		to: 'https://www.bcb.gov.br/',
		id: 2,
	},
	{
		nome: 'OAB',
		to: 'https://www.oab.org.br/',
		id: 3,
	},
	{
		nome: 'Receita Federal',
		to: 'https://www.gov.br/receitafederal/pt-br',
		id: 4,
	},
];

const contatos = [
	{
		icon: 'bx bx-directions',
		content:
			'Av. Rio Branco, 156 ⋅ 31º Andar, Centro ⋅ Rio de Janeiro/RJ ⋅ Ed. Avenida Central	',
		id: 1,
	},
	{
		icon: 'bx bx-map',
		content: 'CEP: 20040-901',
		id: 2,
	},
	{
		icon: 'bx bx-envelope',
		content: 'sped@spedcontabil.com',
		id: 3,
	},
	{
		icon: 'bx bx-phone',
		content: '(21) 3923-5653',
		id: 4,
	},
];

const InfoFooter = () => {
	return (
		<footer className="bg-[#15003D] text-white">
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-4 py-10 gap-5">
					<div className="">
						<div className="flex flex-col gap-10">
							<div className="flex flex-col gap-2">
								<h6 className="text-lg lg:text-lg font-bold font-serif text-white">
									Sped Contábil
								</h6>
								<div className="w-8 h-1 bg-secondary"></div>
							</div>
						</div>
					</div>
					<div>
						<div className="flex flex-col gap-10">
							<div className="flex flex-col gap-2">
								<h6 className="text-lg lg:text-lg font-bold font-serif text-white">
									Links úteis
								</h6>
								<div className="w-8 h-1 bg-secondary"></div>
							</div>
							<ul>
								{usefulLinks.map((item) => (
									<li key={item.id} className="mb-4">
										<div className="flex items-center gap-5">
											<i className="bx bx-right-arrow-alt text-secondary" />
											<small>
												<a href={item.to}>
													{item.nome}
												</a>
											</small>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="lg:col-span-2">
						<div className="flex flex-col gap-10">
							<div className="flex flex-col gap-2">
								<h6 className="text-lg lg:text-lg font-bold font-serif text-white">
									Contato
								</h6>
								<div className="w-8 h-1 bg-secondary"></div>
							</div>
							<ul>
								{contatos.map((item) => (
									<li key={item.id} className="mb-4">
										<div className="flex items-center gap-5">
											<i
												className={`${item.icon} text-secondary`}
											></i>
											<small>{item.content}</small>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default InfoFooter;
