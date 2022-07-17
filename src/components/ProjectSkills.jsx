import Button from './Button'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ProjectSkills = () => {
	const variants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.08,
			}
		}
	}
	const button = {
		hidden: {
			y: 100,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				ease: 'easeInOut',
				duration: 0.2
			}
		}
	}
	
	return (
		<motion.div className="flex flex-col ml-20 mt-5 " variants={variants} initial="hidden" animate="visible">
		<Link to="/projects" >
			<Button variants={button} styles=" my-3 rounded-md p-3 px-4 bg-violet-600 text-[#f5f5f5] font-medium w-fit" text="View my projects" whileHover={{scale: 1.1}}  />
		</Link>
			<Link to="/skills">
				<Button variants={button} styles=" my-3 rounded-md p-3 text-violet-600 border-2 border-violet-600 font-medium w-fit" text="View my skills" whileHover={{scale: 1.1}}  />
			</Link>

		</motion.div>
	)
}

export default ProjectSkills