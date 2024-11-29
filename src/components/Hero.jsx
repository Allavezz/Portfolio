import React from 'react';
import { hero } from '../data/data.json';
import { FaDownload, FaLinkedinIn, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Hero = () => {
	return (
		<section className='hero hero-pd'>
			<div className='hero__container'>
				<div className='hero__content'>
					<h3 className='hero-h3'>{hero.profession}</h3>
					<h1 className='hero-h1'>
						{hero.title1} <br />
						<span>{hero.title2}</span>
					</h1>
					<p className='hero-p'>{hero.paragraph}</p>
					<a className='hero-a btn-2' href={hero.cv} download>
						{hero.cvTitle} <FaDownload className='btn-download' />
					</a>
				</div>
				<div className='hero__socials'>
					<a className='hero-social' href='https://www.linkedin.com/in/allavez/' target='blank'>
						<FaLinkedinIn />
					</a>
					<a className='hero-social' href='https://github.com/Allavezz' target='blank'>
						<FaGithub />
					</a>
					<a className='hero-social' href='https://x.com/Ricardo99099025' target='blank'>
						<FaXTwitter />
					</a>
					<a className='hero-social' href='https://www.instagram.com/ricardoallavez/' target='blank'>
						<FaInstagram />
					</a>
				</div>
			</div>
			<div className='hero__profile-img'>
				<img src={hero.profileImg} alt='profile image' />
			</div>
		</section>
	);
};

export default Hero;
