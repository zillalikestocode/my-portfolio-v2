import {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from './Button'


const variants = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			ease: 'easeInOut'
		}
	}
}
const Project = ({project}) => {
	const control = useAnimation();
	const [ref, inView] = useInView()
	useEffect(() => {
	if (inView) {
		control.start('visible')
	}
}, [control, inView])
	return (
		<motion.div ref={ref} variants={variants} initial="hidden" animate={control} className="p-3 bg-slate-900 w-[80%] rounded-lg m-4 mx-auto">
			<motion.div className="max-h-80 overflow-hidden">
				<img className="h-fit rounded-t-lg" src={project.img} alt="" />
			</motion.div>
			<motion.div className="my-2">
				<span className="text-xl font-semibold text-violet-600 my-2 project-title">{project.name}</span>
				<p className="mt-2 text-md font-medium text-white">{project.desc}</p>
				<a href={project.ref}><Button styles="p-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text my-3 font-medium text-md text-transparent border-2 rounded-md border-violet-600" text="Launch" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} /></a>
			</motion.div>
		</motion.div>
	)
}

export default Project