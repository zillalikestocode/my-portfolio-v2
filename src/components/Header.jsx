import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Sidebar from './SideBar'
import Button from './Button'
import { FaBars } from 'react-icons/fa'

const Header = ({ links, width }) => {
	const nav = {
		hidden: {
			y: "-100%"
		},
		animate: {
			y: 0,
			transition: {
				type: 'spring',
				duration: 0.6,
				delay: 1,
				stiffness: 105,
			}
		}
	}
	return (
		<motion.header>
			<motion.nav className={`px-7 text-violet-600 py-4 flex items-center ${width < 650 && "pt-5"}`} variants={nav} initial='hidden' animate="animate">
				<h4 className="text-2xl font-semibold">zilla</h4>
				{width >= 650 && <div className="flex items-center ml-auto">
									{ links.map((link) => {
										return <div key={link.id} className="m-3 brightness-[0.9] hover:brightness-105 font-medium">{<Link to={link.link}>{link.name}</Link>}</div>
									})}
				</div>}
			</motion.nav>
		</motion.header>
	)
}

export default Header