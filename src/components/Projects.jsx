import React from 'react'
import { motion} from 'framer-motion'
import Project from './Project'

const Projects = ({projects}) => {
	return (
		<motion.div className="">
		<h4 className="text-2xl text-[#f5f5f5] my-5 font-semibold w-full text-center">My Projects</h4>
			<motion.div className="flex flex-wrap lg:items-start lg:justify-center lg:shrink-0">
				{ projects.map((project)=>{
					return (
						<Project project={project} id={project.id}/>
					)
				})}
			</motion.div>
		</motion.div>
	)
}

export default Projects