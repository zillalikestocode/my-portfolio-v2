import React from 'react'
import { motion } from 'framer-motion'
import ProgressRing from './ProgressRing'

const Skills = ({skills}) => {
	return (
		<motion.div className="mx-3 text-center">
		<h4 className="text-2xl m-5 text-[#f5f5f5] font-semibold">My Skills</h4>
			<motion.div className='flex flex-wrap items-center text-center'>
				{skills.map(({name, pct, icon, id})=> {
					return (
						<motion.div key={id} className="m-auto relative">
							<ProgressRing pct={pct} radius={40} />
							<motion.div className="absolute text-[#f5f5f5] top-[30%] left-[50%] translate-y-[-50%] translate-x-[-50%]">{icon}</motion.div>
							<h4 className="py-3 text-lg font-medium text-[#f5f5f5]">{name}</h4>
						</motion.div>
					)
				})}
			</motion.div>
		</motion.div>
	)
}

export default Skills