import React from 'react'
import {motion} from 'framer-motion'
import MenuItem from './MenuItem'
import NavSocials from './NavSocials'

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
		<div className="absolute top-[50px]">
		<motion.ul className="p-6 w-full" variants={variants}>
			{ links.map(({ name, id, link, icon, notALink})=> {
				return (
					<MenuItem name={name} link={link} key={id} icon={icon} notALink={notALink}/>
				)
			})}
		</motion.ul>
		</div>
	)
}

export default Navigation