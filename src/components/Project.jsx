import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

const Project = ({project}) => {
	return (
		<motion.div className="p-3 bg-slate-900 w-[80%] rounded-lg m-4 mx-auto">
			<motion.div className="max-h-80 overflow-hidden">
				<img className="h-fit rounded-t-lg" src={project.img} alt="" />
			</motion.div>
			<motion.div className="my-2">
				<h4 className="text-xl font-semibold my-2 text-violet-600">{project.name}</h4>
				<p className="text-md font-medium text-white">{project.desc}</p>
				<a href={project.ref}><Button styles="p-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text my-3 font-medium text-md text-transparent border-2 rounded-md border-violet-600" text="Launch" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} /></a>
			</motion.div>
		</motion.div>
	)
}

export default Project