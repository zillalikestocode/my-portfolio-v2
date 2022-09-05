import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

const NavSocials = () => {
	const variants = {
		open: {
			opacity: 1,
			x: 0,
			transition: {
				delay: 0.4,
			}
		},
		closed: {
			opacity: 0,
			x: 100
		}
	}
	return (
		<motion.div className="flex absolute top-[calc(100vh_-_60px)] z-10 opacity-0 text-violet-600 mx-3" variants={variants}>
			<motion.a href="https://www.github.com/zillalikestocode" className="p-2"><FaGithub size={30}/></motion.a>
			<motion.a href="https://www.twitter.com/zillathefirstt" className="p-2"><FaTwitter size={30}/></motion.a>
			<motion.a href="https://www.instagram.com/the_emmanuelngoka" className="p-2"><FaInstagram size={30}/></motion.a>
		</motion.div>
	)
}

export default NavSocials