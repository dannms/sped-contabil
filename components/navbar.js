import Image from 'next/image';
import Link from 'next/link';
import Container from './container';
import { useState } from 'react';
import { Transition } from '@headlessui/react';

let items = [
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'Sobre Nós',
		url: '/sobre',
	},
	{
		name: 'Áreas de Atuação',
		url: '/atuacao',
	},
	{
		name: 'Serviços',
		url: '/servicos',
	},
	{
		name: 'Contato',
		url: '/contato',
	},
];

const Navbar = () => {
	let [isOpen, setIsOpen] = useState(false);

	return (
		<div className="absolute top-0 left-0 min-w-full z-50">
			<nav className="py-2 bg-primary text-white">
				<Container>
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center w-full justify-between">
							<div className="flex-shrink-0">
								<Link href="/" passHref>
									<a className="select-none">
										<div className="h-10 w-36 lg:w-48 relative">
											<Image
												src="/images/sped.svg"
												alt="Logo da Sped"
												layout="fill"
												priority={true}
											/>
										</div>
									</a>
								</Link>
							</div>
							<div className="hidden lg:flex items-center gap-5">
								<ul className="flex gap-5">
									{items.map((link, i) => (
										<Link key={i} href={link.url}>
											<a>
												<li className="transition ease-in-out">
													{link.name}
												</li>
											</a>
										</Link>
									))}
								</ul>
							</div>
						</div>
						<div className="flex space-x-10 lg:hidden">
							<button onClick={() => setIsOpen(!isOpen)}>
								{!isOpen ? (
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
								) : (
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
								)}
							</button>
						</div>
					</div>
					<Transition show={isOpen}>
						{(ref) => (
							<div className="lg:hidden">
								<ul className="flex flex-col space-y-4 py-5 font-serif text-center text-lg">
									{items.map((link, i) => (
										<Link key={i} href={link.url}>
											<a className="font-bold">
												<li className="transition ease-in-out">
													{link.name}
												</li>
											</a>
										</Link>
									))}
								</ul>
							</div>
						)}
					</Transition>
				</Container>
			</nav>
		</div>
	);
};

export default Navbar;
