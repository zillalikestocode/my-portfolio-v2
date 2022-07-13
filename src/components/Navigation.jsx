import React from 'react'
import {motion} from 'framer-motion'
import MenuItem from './MenuItem'

const Navigation = ({links}) => {
	const variants = {
		open: {
			transition: { staggerChildren: 0.07, delayChildren: 0.2}
		},
		closed: {
			transition: { staggerChildren: 0.05, staggerDirection: -1 }
		}
	}
	return (
		<motion.ul className="absolute top-[80px] p-10" variants={variants}>
			{ links.map(({ name, id, link})=> {
				return (
					<MenuItem name={name} link={link} key={id} />
				)
			})}
		</motion.ul>
	)
}

export default Navigation