import React from 'react'
import { motion } from 'framer-motion'

const Project = ({project}) => {
	return (
		<motion.div className="p-3 bg-[#f5f5f5] w-[80%] rounded-lg m-4 mx-auto">
			<motion.div>
				<img src={project.img} alt="" />
			</motion.div>
			<motion.div className="my-2">
				<h4 className="text-xl font-semibold my-2">{project.name}</h4>
				<p className="text-md font-medium text-violet-600">{project.desc}</p>
				<p className="text-violet-600 text-sm"><a href={project.ref}>{project.ref}</a></p>
			</motion.div>
		</motion.div>
	)
}

export default Project