import Container from './container';

const introInfo = [
	{
		name: 'Confiabilidade',
		icon: 'bx bx-like',
		id: 1,
	},
	{
		name: 'Ética',
		icon: 'bx bxs-bank',
		id: 2,
	},
	{
		name: 'Transparência',
		icon: 'bx bx-file-find',
		id: 3,
	},
	{
		name: 'Profissionalismo',
		icon: 'bx bx-medal',
		id: 4,
	},
];

const Intro = () => {
	return (
		<div className="py-24 text-accent">
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
					<div className="flex flex-col gap-5">
						<div className="flex flex-col gap-2">
							<h3 className="text-3xl lg:text-4xl font-bold font-serif text-primary">
								Sobre nós
							</h3>
							<div className="w-8 h-1 bg-secondary"></div>
						</div>
						<p className="text-lg lg:text-xl">
							Nossa equipe está constantemente atualizada com as
							determinações e resoluções emanadas pelo Banco
							Central do Brasil, de modo a aliar dinamismo e
							excelência. Além disso, a nossa atuação é marcada
							pelo compromisso com os princípios da ética
							profissional, garantindo celeridade e uma sólida
							relação de confiança entre o escritório e seu
							cliente.
						</p>
					</div>
					<div className="grid grid-cols-2 gap-5">
						{introInfo.map((items) => (
							<div
								key={items.id}
								className="bg-neutral rounded-lg flex flex-col items-center justify-center p-8 hover:shadow-lg"
							>
								<div>
									<i
										className={`${items.icon} text-4xl text-primary`}
									></i>
								</div>
								<div className="flex gap-1 flex-col items-center justify-center">
									<small className="font-bold text-primary">
										{items.name}
									</small>
									<div className="w-4 h-1 bg-secondary"></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Intro;
