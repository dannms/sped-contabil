import Container from './container';
import toast from 'react-hot-toast';
import { useState } from 'react';

const Cta = () => {
	const [email, setEmail] = useState('');

	async function handleSubmit(event) {
		event.preventDefault();
		if (!email) {
			toast.custom((t) => (
				<div
					className={`${
						t.visible ? 'animate-enter' : 'animate-leave'
					} rounded-lg max-w-md p-4 w-full bg-neutral shadow-lg pointer-events-auto flex items-center justify-center gap-10`}
				>
					<div>
						<small>
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
					} rounded-lg max-w-md p-4 w-full bg-neutral shadow-lg pointer-events-auto flex items-center justify-center gap-10`}
				>
					<div>
						<small>Enviando mensagem, por favor aguarde</small>
					</div>
				</div>
			));
			fetch('/api/cta', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
				}),
			}).then((response) => {
				setEmail('');
				toast.custom((t) => (
					<div
						className={`${
							t.visible ? 'animate-enter' : 'animate-leave'
						} rounded-lg max-w-md p-4 w-full bg-neutral shadow-lg pointer-events-auto flex items-center justify-center gap-10`}
					>
						<div>
							<small>E-mail cadastrado com sucesso!</small>
						</div>
					</div>
				));
			});
		} catch {
			toast.error('Ocorreu um erro, tente novamente');
		}
	}

	return (
		<div className="py-20 bg-cta-footer bg-cover bg-center text-center lg:text-left">
			<Container>
				<div className="flex flex-col lg:flex-row w-full gap-5 items-center mx-auto md:max-w-lg lg:max-w-full">
					<div className="w-full flex flex-col gap-5">
						<div className="flex flex-col gap-2 items-center lg:items-start">
							<h3 className="text-3xl lg:text-4xl font-bold font-serif text-white">
								Ficou interessado?
							</h3>
							<div className="w-8 h-1 bg-secondary"></div>
						</div>
						<small className="text-white">
							Inscreva-se em nossa newsletter e fique por dentro
							das novidades
						</small>
					</div>
					<div className="w-full">
						<form
							id="form"
							autoComplete="off"
							onSubmit={handleSubmit}
							className="flex"
						>
							<input
								onChange={({ target }) =>
									setEmail(target.value)
								}
								value={email}
								id="email"
								name="email"
								type="email"
								placeholder="Digite aqui seu e-mail"
								className="focus:ring-0 focus:border-0 border-0 rounded-l-lg w-full"
							/>
							<button className="bg-primary text-white font-bold py-2 px-6 rounded-r-lg">
								Enviar
							</button>
						</form>
						<small className="text-white text-xs">
							*Nós <strong>não</strong> compartilharemos seus
							dados para terceiros
						</small>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Cta;
