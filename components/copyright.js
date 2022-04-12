import Container from './container';

const Copyright = () => {
	return (
		<div className="bg-[#0E0029] text-white py-4">
			<Container>
				<div className="flex flex-col lg:flex-row items-center justify-between">
					<div>
						<small>Sped Contabil &copy; 2022</small>
					</div>
					<div>
						<small>
							Desenvolvido por{' '}
							<a
								href="https://studiopaper.com.br"
								className="text-secondary hover:text-white transition ease-in-out"
							>
								Studio Paper
							</a>
						</small>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Copyright;
