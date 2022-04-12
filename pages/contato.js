import Head from 'next/head';
import Link from 'next/link';
import Container from '../components/container';
import { useState } from 'react';
import toast from 'react-hot-toast';

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

const Contato = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	async function handleSubmit(event) {
		event.preventDefault();
		if (!name || !email || !subject || !phone || !message) {
			toast.custom((t) => (
				<div
					className={`${
						t.visible ? 'animate-enter' : 'animate-leave'
					} max-w-md p-4 w-full bg-neutral shadow-lg pointer-events-auto flex items-center justify-center gap-10`}
				>
					<div>
						<small className="text-xs">
							Por favor, preencha todos os campos para continuar
						</small>
					</div>
				</div>
			));
			return;
		}
		try {
			toast.custom((t) => (
				<div
					className={`${
						t.visible ? 'animate-enter' : 'animate-leave'
					} max-w-md p-4 w-full bg-neutral shadow-lg pointer-events-auto flex items-center justify-center gap-10`}
				>
					<div>
						<small className="text-xs">
							Processando o envio da mensagem, por favor aguarde
						</small>
					</div>
				</div>
			));
			fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name,
					email,
					subject,
					phone,
					message,
				}),
			}).then((response) => {
				setName('');
				setEmail('');
				setSubject('');
				setPhone('');
				setMessage('');

				toast.custom((t) => (
					<div
						className={`${
							t.visible ? 'animate-enter' : 'animate-leave'
						} max-w-md p-4 w-full bg-neutral shadow-lg pointer-events-auto flex items-center justify-center gap-10`}
					>
						<div>
							<small className="text-xs">
								Mensagem enviada com sucesso!
							</small>
						</div>
					</div>
				));
			});
		} catch {
			toast.error('Ocorreu um erro, tente novamente');
		}
	}

	return (
		<>
			<Head>
				<title>Sped Contábil • Contato</title>
			</Head>
			<div className="text-center md:text-left max-w-lg mx-auto lg:max-w-full">
				<Container>
					<div className="pt-40 pb-20 flex flex-col gap-5">
						<div className="flex flex-col gap-2 items-center">
							<h3 className="text-3xl lg:text-4xl font-bold font-serif text-primary">
								Entre em contato conosco
							</h3>
							<div className="w-8 h-1 bg-secondary"></div>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
							<form
								id="contato"
								autoComplete="off"
								className="flex flex-col gap-5"
								onSubmit={handleSubmit}
							>
								<div className="flex">
									<input
										onChange={({ target }) =>
											setName(target.value)
										}
										value={name}
										type="text"
										id="name"
										name="name"
										placeholder="Digite seu nome completo"
										className="flex-1 border-0 border-b-2 border-primary transition ease-in-out focus:ring-0 focus:border-b-secondary"
									></input>
								</div>
								<div className="flex">
									<input
										onChange={({ target }) =>
											setEmail(target.value)
										}
										value={email}
										type="email"
										id="email"
										name="email"
										placeholder="Digite seu e-mail"
										className="flex-1 border-0 border-b-2 border-primary transition ease-in-out focus:ring-0 focus:border-b-secondary"
									></input>
								</div>
								<div className="flex">
									<input
										onChange={({ target }) =>
											setSubject(target.value)
										}
										value={subject}
										type="text"
										id="subject"
										name="subject"
										placeholder="Digite o assunto"
										className="flex-1 border-0 border-b-2 border-primary transition ease-in-out focus:ring-0 focus:border-b-secondary"
									></input>
								</div>
								<div className="flex">
									<input
										onChange={({ target }) =>
											setPhone(target.value)
										}
										value={phone}
										type="tel"
										id="phone"
										name="phone"
										placeholder="Digite seu número para contato"
										className="flex-1 border-0 border-b-2 border-primary transition ease-in-out focus:ring-0 focus:border-b-secondary"
									></input>
								</div>
								<div className="flex">
									<textarea
										onChange={({ target }) =>
											setMessage(target.value)
										}
										value={message}
										rows="5"
										id="message"
										name="message"
										placeholder="Digite sua mensagem aqui"
										className="flex-1 border-0 border-b-2 border-primary resize-none transition ease-in-out focus:ring-0 focus:border-b-secondary"
									/>
								</div>
								<div className="flex">
									<button
										type="submit"
										className="flex-1 bg-primary text-white p-4 font-bold"
									>
										Enviar
									</button>
								</div>
							</form>
							<div className="p-10 bg-primary rounded-lg text-white">
								<div className="flex flex-col">
									<h4 className="font-serif text-x font-bold">
										Endereço
									</h4>
									<ul className="text-white py-10">
										{contatos.map((item) => (
											<li key={item.id} className="mb-4">
												<div className="flex items-center gap-5">
													<i
														className={`${item.icon} text-secondary`}
													></i>
													<small>
														{item.content}
													</small>
												</div>
											</li>
										))}
									</ul>
									<hr className="text-white" />
									<div className="py-4 flex items-center gap-5 justify-between">
										<p>Nossas redes sociais</p>
										<ul className="inline-flex gap-5 items-center">
											{socialLinks.map((items) => (
												<li key={items.id}>
													<a href={items.to}>
														<i
															className={
																items.icon
															}
														></i>
													</a>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Contato;
