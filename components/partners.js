import Container from './container';
import Image from 'next/image';

const parceiros = [
	{
		nome: 'SoftServ',
		src: '/images/softserv.png',
		id: 1,
	},
	{
		nome: 'Zap Sistemas',
		src: '/images/zapsistemas.png',
		id: 2,
	},
];

const Partners = () => {
	return (
		<div className="bg-neutral py-20">
			<Container>
				<div className="flex flex-col gap-5 items-center justify-center">
					<div className="flex flex-col gap-2 items-center">
						<h3 className="text-3xl lg:text-4xl font-bold font-serif text-primary">
							Nossos parceiros
						</h3>
						<div className="w-14 h-1 bg-secondary"></div>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10">
						{parceiros.map((item) => (
							<div key={item.id} className="col-span-2 relative">
								<div className="relative w-40 h-20">
									<Image
										src={item.src}
										alt={`Logo da ${item.nome}`}
										layout="fill"
										objectFit="contain"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Partners;
