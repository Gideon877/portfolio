import React, { useState, useEffect, Fragment } from 'react'
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss'


const About = () => {
	const abouts = [
		{ title: 'Web Development', description: 'Kickass web developer', imgUrl: images.about01 },
		{ title: 'Web Design', description: 'Kickass web developer', imgUrl: images.about02 },
		{ title: 'Web UI/UX', description: 'Kickass web developer', imgUrl: images.about03 },
		{ title: 'Web Animations', description: 'Kickass web developer', imgUrl: images.about04 },
	]
	return (
		<Fragment>
			<h2 className="head-text">
				I Know That
				<span>Good Design</span> <br />
				means
				<span>Good Business</span>
			</h2>

			<div className="app__profiles">
				{abouts.map((about, index) => ( 
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						className='app__profile-item'
						key={about.title + index}
					>
						<img src={about.imgUrl} alt={about.title} />
						<h2 className='bold-text' style={{ marginTop: 20 }}> {about.title} </h2>
						<p className='p-text' style={{ marginTop: 10 }}> {about.description} </p>
					</motion.div>
				))}
			</div>
		</Fragment>
	)
}

export default About