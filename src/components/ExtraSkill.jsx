import {useEffect} from 'react'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const variants = {
		hidden: {
			opacity: 0,
			y: 100
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
				ease: "easeInOut"
			}
		}
	}

const ExtraSkill = ({extraSkills}) => {
	const controls = useAnimation();
	const [viewRef, view] = useInView()
	useEffect(() => {
		if (view) {
			controls.start('visible')
		}
	}, [controls, view])
	
	
	return (
		<motion.div>
			<h4 className='text-xl font-medium text-white'>Extra useful Skills</h4>
			<motion.ul className="extra-skill text-left">
				{ extraSkills.map(({title, id, eps}) => {
					return (
						<motion.li key={id} ref={viewRef} className="my-7 text-[#f5f5f5] w-[90%] m-auto bg-slate-900 rounded-lg p-3" variants={variants} initial="hidden" animate={controls} whileHover={{scale: 1.05,}} whileTap={{scale: 1.05,}}>
							<span className="font-medium text-violet-600 text-lg project-title py-3">{title}</span>
							<p className="text-base my-3">{eps}</p>
						</motion.li>
					)
				})}
			</motion.ul>
		</motion.div>
	)
}

export default ExtraSkill