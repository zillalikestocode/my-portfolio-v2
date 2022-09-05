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
			zIndex: 7,
			transition: {
				ease: 'easeInOut',
				duration: 0.2
			}
		}
	}
	
	return (
		<motion.div className="flex flex-col lg:gap-3 lg:flex-row mx-auto mt-5 items-center" variants={variants} initial="hidden" animate="visible">
		<Link to="/projects" className="lg:ml-auto ">
			<Button whileTap={{scale: 0.9}} variants={button} styles=" my-3 rounded-lg p-3 px-4 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-[#f5f5f5] font-medium w-fit z-[9]" text="View my projects" whileHover={{scale: 1.1}}  />
		</Link>
			<Link to="/skills" className="lg:mr-auto">
				<Button whileTap={{scale: 0.9}} variants={button} styles="rounded-lg border-2 border-violet-600  my-3 p-3 font-medium viewSkills"  text="View my skills" whileHover={{scale: 1.1}}  />
			</Link>

		</motion.div>
	)
}

export default ProjectSkills