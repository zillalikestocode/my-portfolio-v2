import React from 'react'
import { motion } from 'framer-motion'
import ProgressRing from './ProgressRing'
import ExtraSkill from './ExtraSkill'

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
const Skills = ({skills, extraSkills}) => {
	return (
		<motion.div className="mx-3 text-center" variants={variants} initial="initial" animate="animate" exit="exit">
		<h4 className="text-2xl m-5 text-[#f5f5f5] font-semibold">My Skills</h4>
			<motion.div className='flex flex-wrap items-center justify-center text-center'>
				{skills.map(({name, pct, icon, id})=> {
					return (
						<motion.div key={id} className="m-auto relative px-1">
							<ProgressRing pct={pct} radius={40} />
							<motion.div className="absolute text-[#f5f5f5] top-[30%] left-[50%] translate-y-[-50%] translate-x-[-50%]">{icon}</motion.div>
							<h4 className="py-3 text-lg font-medium text-[#f5f5f5]">{name}</h4>
						</motion.div>
					)
				})}
			</motion.div>
			<ExtraSkill extraSkills={extraSkills} />
			<p className="italic text-[#f5f5f5] mt-10">"Learning has no time or age restriction, all that we need is a passion for lifelong learning."</p>
		</motion.div>
	)
}

export default Skills