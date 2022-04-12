import Container from './container';

const socialLinks = [
	{
		icon: 'bx bxl-instagram',
		to: '/',
		id: 1,
	},
	{
		icon: 'bx bxl-facebook',
		to: '/',
		id: 2,
	},
	{
		icon: 'bx bxl-whatsapp',
		to: '/',
		id: 3,
	},
];

const SocialFooter = () => {
	return (
		<div className="bg-primary text-white">
			<Container>
				<div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between py-4 text-center lg:text-left gap-5">
					<div>
						<h5 className="text-sm">
							Entre em contato conosco através de nossas redes
						</h5>
					</div>
					<div>
						<ul className="inline-flex gap-5 text-xl">
							{socialLinks.map((items) => (
								<li key={items.id}>
									<a href={items.to}>
										<i className={items.icon}></i>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default SocialFooter;
