import React from 'react'
import { motion} from 'framer-motion'
import Project from './Project'

const variants={
		initial: {
			x: '100%',
		},
		animate: {
			x: 0,
			transition: {
				duration: 0.5,
			}
		},
		exit: {
			x: '-100%',
			ease: 'easeInOut'
		}
	}
const Projects = ({projects}) => {
	return (
		<motion.div className="" variants={variants} initial='initial' animate="animate" exit="exit" >
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