import React, { useState } from 'react';
import { socials } from '../data/data.json';
import { FaLinkedinIn, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const iconMap = {
	FaLinkedinIn: FaLinkedinIn,
	FaGithub: FaGithub,
	FaInstagram: FaInstagram,
	FaXTwitter: FaXTwitter,
};

const Contact = () => {
	const [formStatus, setFormStatus] = useState({ status: '', message: '' });

	const handleSubmit = async e => {
		e.preventDefault();
		const form = e.target;

		const formData = new FormData(form);

		try {
			const response = await fetch(form.action, {
				method: form.method,
				body: formData,
				headers: {
					Accept: 'application/json',
				},
			});

			if (response.ok) {
				setFormStatus({ status: 'success', message: 'Thank you for your message!' });
				form.reset();
			} else {
				setFormStatus({ status: 'error', message: 'There was a problem submitting your form. Please try again.' });
			}
		} catch (error) {
			setFormStatus({ status: 'error', message: 'Oops! Something went wrong. Please try again later.' });
		}
	};

	return (
		<section id='contact' className='contact section-pd'>
			<div className='contact__container'>
				<div className='contact__form'>
					<h3 className='contact-h3'>Let's work together!</h3>
					<p className='contact-p'>
						Feel free to reach out via message or email at <a href='mailto:ricardogeraldesalves@gmail.com'>ricardogeraldesalves@gmail.com</a> if you'd like to collaborate.
					</p>
					<form action='https://formspree.io/f/mldeaovb' method='POST' onSubmit={handleSubmit} id='contact-form'>
						<input type='text' name='_honeypot' style={{ display: 'none' }} tabIndex='-1' autoComplete='off' />
						<input type='hidden' name='_captcha' value='true' />

						<input type='text' id='name' name='name' placeholder='Your Name' required />

						<input type='email' id='email' name='email' placeholder='Email address' required />

						<textarea name='message' id='message' placeholder='Type your message here.' rows='8' required></textarea>

						<input type='hidden' name='_subject' value='New message from your website!' />
						<input type='hidden' name='_replyto' value='' />

						<input type='text' name='_gotcha' style={{ display: 'none' }} tabIndex='-1' autoComplete='off' />

						<button type='submit' className='btn'>
							Send
						</button>
					</form>

					{formStatus.status && (
						<div
							style={{
								marginTop: '1rem',
								color: formStatus.status === 'success' ? 'green' : 'red',
							}}
						>
							{formStatus.message}
						</div>
					)}
				</div>
				<div>
					<ul className='contact__socials'>
						{socials.map((item, index) => {
							const IconComponent = iconMap[item.icon];

							return (
								<li key={index} className='contact-social'>
									<a href={item.link} target='blank'>
										<IconComponent className='social-icon2' />
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Contact;
