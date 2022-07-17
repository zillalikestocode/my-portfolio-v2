import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const MenuItem = ({name, link, icon, toggle, isOpen}) => {
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
		<>
		{link ? 
			<Link to={link} className={!isOpen && 'pointer-events-none cursor-none' } onClick={toggle}><motion.li variants={variants} className="flex items-center cursor-pointer my-5 text-xl font-medium opacity-0 text-violet-600" >
				{icon && <div className="p-3">{icon}</div>}{typeof(name) === 'string' ? (<label htmlFor="">{name}</label>) : name}
			</motion.li></Link> : <motion.li variants={variants} className={isOpen ? "flex items-center cursor-pointer my-5 text-xl font-medium opacity-0 text-violet-600" : "flex items-center cursor-none pointer-events-none my-5 text-xl font-medium opacity-0 text-violet-600"}>
				{icon && <div className="p-3">{icon}</div>}{typeof(name) === 'string' ? (<label htmlFor="">{name}</label>) : name}
			</motion.li>}

		</>
	)
}

export default MenuItem