import React from 'react'
import { motion } from 'framer-motion'
import {FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa'

const About = () => {
	return (
		<motion.div className="p-5 text-center text-[#f5f5f5]">
		<h4 className="text-2xl font-semibold m-3 mb-5">About me</h4>
			{/*<motion.p className="text-lg">
				Emmanuel Ngoka is an African born and raised up in Port-Harcourt, Nigeria. He started his coding journey in 2018 at the young age of 13. During this period, he studied Front-end Web development on scholarship awarded to him by the ResearchWindow Software Academy and graduated with a distinction. He is currently studying Computer Science at the University of Port Harcourt, Nigeria.
			</motion.p>*/}
			<motion.div className="bg-slate-900 text-white w-full rounded-lg text-left py-5 px-4">
				<motion.div className="mb-3">
					<span className="mb-1 project-title py-4 text-lg font-medium bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">Short Bio</span>
					<p className="text-base">Emmanuel Ngoka is an African born and raised up in Port-Harcourt, Nigeria. He started his coding journey in 2018 at the young age of 13. During this period, he studied Front-end Web development on scholarship awarded to him by the ResearchWindow Software Academy and graduated with a distinction.</p>
				</motion.div>
				<motion.div className="mb-3">
					<span className="mb-1 project-title py-4 text-lg font-medium bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">Education</span>
					<p className="text-base">Currently studying Computer Science at the University of Port-Harcourt, Rivers State, Nigeria.</p>
				</motion.div>
				<motion.div className="mb-3">
					<span className="mb-1 project-title py-4 text-lg font-medium bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">Job Experience</span>
					<p className="text-base">I haven't worked in a company or institution yet. Why not be the first to employ me? You will be delighted to have me!</p>
				</motion.div>
			</motion.div>
			<motion.div className="mt-8">
				<h4 className="text-xl font-medium text-violet-600 mb-4">Want to get to know more about me?</h4>
				<motion.div className="flex flex-col items-center">
					<p>Send me an email:</p>
					<span className="text-violet-600">emmanuelngoka778@gmail.com</span>
					<div className="flex items-center">
						<div className="min-w-[70px] mx-2 min-h-[1px] bg-violet-600 "/>
						<div>or</div>
	                    <div className="min-w-[70px] mx-2 bg-violet-600 min-h-[1px] "/>
					</div>
					<p>Follow me on socials: </p>
					<motion.div className="flex">
		    		
		    		<motion.a whileHover={{scale: 1.3,}} href="https://www.github.com/zillalikestocode" className="m-2 text-violet-600"><FaGithub size={20}/></motion.a>
		    		<motion.a whileHover={{scale: 1.3}} href="https://www.twitter.com/zillathefirstt" className="m-2 text-violet-600"><FaTwitter size={20} /></motion.a>
		    		<motion.a whileHover={{scale: 1.3}} href="https://www.instagram.com/the_emmanuelngoka" className="m-2 text-violet-600"><FaInstagram size={20} /></motion.a>
	    	</motion.div>
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export default About