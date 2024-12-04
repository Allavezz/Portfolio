import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { navLinks } from '../data/data.json';
import { useState, useEffect } from 'react';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [activeSection, setActiveSection] = useState('');

	const toggleMenu = () => {
		setToggle(prev => !prev);
	};

	useEffect(() => {
		if (window.location.pathname === '/portfolio') {
			setActiveSection('home');
		}
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						if (entry.target.id === 'hero') {
							setActiveSection('home');
						} else {
							setActiveSection(entry.target.id);
						}
					}
				});
			},
			{ threshold: 0.6 },
		);

		navLinks.forEach(nav => {
			if (nav.link.startsWith('#')) {
				const section = document.querySelector(nav.link);
				if (section) observer.observe(section);
			}
		});

		const heroSection = document.querySelector('#hero');
		if (heroSection) observer.observe(heroSection);

		return () => observer.disconnect();
	}, []);

	return (
		<header className='header header-pd'>
			<div className='header__container'>
				<div className='header__logo'>
					<a href='/portfolio/'>
						<h2 className='logo'>
							Allavez<span>.</span>
						</h2>
					</a>
				</div>
				<nav className='header__nav'>
					<ul className='header__desk-links'>
						{navLinks.map(nav => (
							<li key={nav.id}>
								<a className={`desk-link ${activeSection === nav.id ? 'desk-link--active' : ''}`} href={`/portfolio/${nav.link}`}>
									{nav.title}
								</a>
							</li>
						))}
						<li>
							<a className='btn' href='mailto:ricardogeraldesalves@gmail.com'>
								Hire Me
							</a>
						</li>
					</ul>
					<div onClick={toggleMenu} className='header__hamb'>
						{toggle ? <AiOutlineClose size={20} className='hamb' /> : <AiOutlineMenu size={20} className='hamb' />}
					</div>
					<ul className={`${toggle ? 'header__mobile-links' : 'header__mobile-links--hidden'}`}>
						{navLinks.map(nav => (
							<li key={nav.id}>
								<a className={`mobile-link ${activeSection === nav.id ? 'mobile-link--active' : ''}`} href={`/portfolio/${nav.link}`}>
									{nav.title}
								</a>
							</li>
						))}
						<li>
							<a className='btn mobile-hire-btn' href='mailto:ricardogeraldesalves@gmail.com'>
								Hire Me
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
