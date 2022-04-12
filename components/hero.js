import Container from './container';

const Hero = () => {
	return (
		<div className="flex items-center justify-center w-full h-screen bg-hero-bg bg-cover bg-center text-center text-white">
			<Container>
				<div className="flex flex-col gap-5">
					<h1 className="text-6xl drop-shadow-md font-display">
						SPED
					</h1>
					<h2 className="font-serif text-3xl drop-shadow-md">
						Escrita contábil, fiscal e consultoria
					</h2>
				</div>
			</Container>
		</div>
	);
};

export default Hero;
