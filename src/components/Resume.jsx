import React, { useState } from 'react';
import { resume } from '../data/data.json';
import { FaCircle, FaNodeJs, FaHtml5, FaCss3, FaSass, FaReact, FaPhp, FaLaravel, FaJs } from 'react-icons/fa6';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiMysql, SiMongodb, SiExpress } from 'react-icons/si';

const iconMap = {
	FaHtml5: FaHtml5,
	FaCss3: FaCss3,
	FaSass: FaSass,
	RiTailwindCssFill: RiTailwindCssFill,
	FaJs: FaJs,
	FaReact: FaReact,
	SiMysql: SiMysql,
	FaPhp: FaPhp,
	FaLaravel: FaLaravel,
	FaNodeJs: FaNodeJs,
	SiExpress: SiExpress,
	SiMongodb: SiMongodb,
};

const Resume = () => {
	const [activeTab, setActiveTab] = useState('education');

	return (
		<section id='resume' className='resume section-pd'>
			<div className='resume__container'>
				<div className='resume__tab-list'>
					<div className='resume__tab-list-heading'>
						<h3 className='resume-h3'>Why hire me?</h3>
						<p className='resume-p'>Find out why you should in this section</p>
					</div>
					<button className={`tab-btn btn-3 ${activeTab === 'education' ? 'tab-btn--active btn-3--active' : ''}`} onClick={() => setActiveTab('education')}>
						Education
					</button>
					<button className={`tab-btn btn-3 ${activeTab === 'skills' ? 'tab-btn--active btn-3--active' : ''}`} onClick={() => setActiveTab('skills')}>
						Skills
					</button>
					<button className={`tab-btn btn-3 ${activeTab === 'experience' ? 'tab-btn--active btn-3--active' : ''}`} onClick={() => setActiveTab('experience')}>
						Experience
					</button>
					<button className={`tab-btn btn-3 ${activeTab === 'about' ? 'tab-btn--active btn-3--active' : ''}`} onClick={() => setActiveTab('about')}>
						About me
					</button>
				</div>
				<div className='resume__tab-content'>
					{activeTab === 'about' && (
						<>
							<div className='resume__tab-content-heading'>
								<h3 className='resume-sub-h3'>{resume.about.title}</h3>
								<p className='resume-sub-p'>{resume.about.description}</p>
							</div>
							<ul className='resume__about-content'>
								{resume.about.info.map((item, index) => (
									<li className='resume__about-li' key={index}>
										<span className='resume-sub-p'>{item.fieldName}</span>
										<span className='resume-sub-p2'>{item.fieldValue}</span>
									</li>
								))}
							</ul>
						</>
					)}
					{activeTab === 'education' && (
						<>
							<div className='resume__tab-content-heading'>
								<h3 className='resume-sub-h3'>{resume.education.title}</h3>
								<p className='resume-sub-p'>{resume.education.description}</p>
							</div>
							<ul className='resume__education-content'>
								{resume.education.info.map((item, index) => (
									<a key={index} className='resume__education-li' href={item.link} target='blank'>
										<li key={index}>
											<span className='resume-education-year'>{item.year}</span>

											<h4 className='resume-education-title'>{item.title}</h4>

											<span className='resume-sub-p'>
												<FaCircle className='resume-education-dot' /> {item.school}
											</span>
										</li>
									</a>
								))}
							</ul>
						</>
					)}
					{activeTab === 'skills' && (
						<>
							<div className='resume__tab-content-heading'>
								<h3 className='resume-sub-h3'>{resume.skills.title}</h3>
								<p className='resume-sub-p'>{resume.skills.description}</p>
							</div>
							<ul className='resume__skills-content'>
								{resume.skills.skills.map((item, index) => {
									const IconComponent = iconMap[item.icon];

									return (
										<li className='resume__skills-li' key={index}>
											<IconComponent className='resume-skills-icon' />
											<span className='resume__skills-name'>{item.name}</span>
										</li>
									);
								})}
							</ul>
						</>
					)}
					{activeTab === 'experience' && (
						<>
							<div className='resume__tab-content-heading'>
								<h3 className='resume-sub-h3'>{resume.experience.title}</h3>
								<p className='resume-sub-p'>{resume.experience.description}</p>
							</div>
							<ul className='resume__experience-content'>
								<li className='resume__experience-li'>
									<div className='resume__experience-div1'></div>
									<div className='resume__experience-div2'></div>
									<div className='resume__experience-div3'></div>
									<div className='resume__experience-div4'></div>
									<div className='resume__experience-div5'></div>
								</li>
								<li className='resume__experience-li'>
									<div className='resume__experience-div1'></div>
									<div className='resume__experience-div2'></div>
									<div className='resume__experience-div3'></div>
									<div className='resume__experience-div4'></div>
									<div className='resume__experience-div5'></div>
								</li>
								<li className='resume__experience-li'>
									<div className='resume__experience-div1'></div>
									<div className='resume__experience-div2'></div>
									<div className='resume__experience-div3'></div>
									<div className='resume__experience-div4'></div>
									<div className='resume__experience-div5'></div>
								</li>
								<li className='resume__experience-li'>
									<div className='resume__experience-div1'></div>
									<div className='resume__experience-div2'></div>
									<div className='resume__experience-div3'></div>
									<div className='resume__experience-div4'></div>
									<div className='resume__experience-div5'></div>
								</li>
							</ul>
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default Resume;
