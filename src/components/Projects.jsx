import React from 'react'
import { motion} from 'framer-motion'
import Project from './Project'

const Projects = ({projects}) => {
	return (
		<motion.div className="absolute">
		<h4 className="text-2xl text-[#f5f5f5] my-5 font-semibold w-full text-center">My Projects</h4>
			<motion.div className="flex flex-wrap">
				{ projects.map((project)=>{
					return (
						<Project project={project} />
					)
				})}
			</motion.div>
		</motion.div>
	)
}

export default Projects