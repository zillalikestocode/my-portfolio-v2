import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const MenuItem = ({name, link}) => {
	const variants = {
		open: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 }
			}
		},
		closed: {
			y: 50,
			opacity:  0,
			transition: {
				y: { stiffness: 1000 }
			}
		}
	}
	return (
		<motion.li variants={variants} className="flex items-center cursor-pointer my-5 text-xl font-medium text-violet-600">
			<Link to={link.link}>{name}</Link>
		</motion.li>
	)
}

export default MenuItem