import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projects } from '../data/data.json';
import { FaGithub, FaArrowUpRightFromSquare, FaAngleRight, FaAngleLeft } from 'react-icons/fa6';

const icon = {
	FaArrowUpRightFromSquare: FaArrowUpRightFromSquare,
};

function SampleNextArrow(props) {
	const { className, onClick } = props;
	return (
		<div className='custom-arrow-right' onClick={onClick}>
			<FaAngleRight />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, onClick } = props;
	return (
		<div className='custom-arrow-left' onClick={onClick}>
			<FaAngleLeft />
		</div>
	);
}

const Projects = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		arrows: true,
		/* swipeToSlide: true, */
		fade: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<section id='projects' className='projects section-pd-bg-b'>
			<div className='projects__container'>
				<Slider {...settings}>
					{projects.map((project, index) => {
						const IconComponent = project.icon ? icon[project.icon] : null;

						return (
							<div key={index} className='projects__slide'>
								<div className='projects__slide-content'>
									<span className='projects__number'>{project.number}</span>
									<h2 className='projects__title'>{project.title}</h2>
									<p className='projects__description'>{project.description}</p>
									<span className='projects__stack'>{project.technologies}</span>
									<div className='projects__links'>
										{project.live && (
											<div className='projects__link-wrapper'>
												<a href={project.live} target='_blank' rel='noopener noreferrer'>
													{IconComponent && <IconComponent className='project-icon' />}
												</a>
											</div>
										)}
										{project.github && (
											<div className='projects__link-wrapper'>
												<a href={project.github} target='_blank' rel='noopener noreferrer'>
													<FaGithub className='project-icon' />
												</a>
											</div>
										)}
									</div>
								</div>
								<div className='projects__slide-img'>
									<img src={project.img} alt={project.alt} />
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		</section>
	);
};

export default Projects;
