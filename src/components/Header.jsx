import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { navLinks } from '../data/data.json';
import { useState } from 'react';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const toggleMenu = () => {
		setToggle(prev => !prev);
	};

	return (
		<header className='header header-pd'>
			<div className='header__container'>
				<div className='header__logo'>
					<a href='/'>
						<h2 className='logo'>
							Allavez<span>.</span>
						</h2>
					</a>
				</div>
				<nav className='header__nav'>
					<ul className='header__desk-links'>
						{navLinks.map(nav => (
							<li key={nav.id}>
								<a className='desk-link' href={nav.link}>
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
								<a className='mobile-link' href={nav.link}>
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
				</nav>
			</div>
		</header>
	);
};

export default Header;
