const nodemailer = require('nodemailer');

export default function sendNewsletter(req, res) {
	let transporter = nodemailer.createTransport({
		host: 'smtp-mail.outlook.com',
		port: 587,
		auth: {
			user: process.env.NODEMAILER_USER,
			pass: process.env.NODEMAILER_PASS,
		},
	});

	transporter
		.sendMail({
			from: `Pedido de inscrição da newsletter <${process.env.NODEMAILER_USER}`,
			to: `${process.env.NODEMAILER_USER}`,
			replyTo: req.body.email,
			subject: 'Assinatura da newsletter',
			html: `
        <table style="width: 600px">
        <thead>
            <tr>
                <th colspan="2" style="font-size: 24px; background: #280071; color: #fff; padding: 15px; font-weight: bold;">
                    Assinatura da newsletter</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 15px 0; width: 60px; font-weight: bold;">Email:</td>
                <td style="padding: 15px 0;">${req.body.email}</td>
            </tr>
            <tr>
                <td style="padding: 15px 0; border-top: 1px solid black;" colspan="2">
                   <small>*Este é apenas um pedido de inscrição, favor salvar o e-mail cadastrado em um banco de dados para futuro contato de contato</small>
                </td>
            </tr>
        </tbody>
    </table>
        `,
		})
		.then((response) => {
			res.send(response);
		})
		.catch((error) => {
			res.send(error);
		});
}
