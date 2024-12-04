import React from 'react';
import { hero, socials } from '../data/data.json';
import { FaDownload, FaLinkedinIn, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const iconMap = {
	FaLinkedinIn: FaLinkedinIn,
	FaGithub: FaGithub,
	FaInstagram: FaInstagram,
	FaXTwitter: FaXTwitter,
};
const Hero = () => {
	return (
		<section id='hero' className='hero hero-pd'>
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
				<ul className='hero__socials'>
					{socials.map((item, index) => {
						const IconComponent = iconMap[item.icon];

						return (
							<li key={index} className='hero-social'>
								<a href={item.link} target='blank'>
									<IconComponent className='social-icon' />
								</a>
							</li>
						);
					})}
				</ul>
				<div className='hero__profile-img'>
					<img src={hero.profileImg} alt='profile image' />
				</div>
			</div>
		</section>
	);
};

export default Hero;
