import {useEffect} from 'react'
import { motion } from 'framer-motion'
import Extra from './Extra'

const variants = {
	visible: {
		transition: {
			staggerChildren: 0.3
		}
	},
	hidden: {
		x: 0,
	}
}
const ExtraSkill = ({extraSkills}) => {
	return (
		<motion.div>
			<h4 className='text-xl font-medium text-white'>Extra useful Skills</h4>
			<motion.div className=" text-left lg:flex lg:flex-wrap m-auto lg:m-0 lg:gap-7 lg:mx-5 lg:justify-center lg:shrink-0" variants={variants} initial="hidden" animate="visible" >
				{ extraSkills.map(({title, id, eps}) => {
					return (
						<Extra title={title} id={id} eps={eps} />
					)
				})}
			</motion.div>
		</motion.div>
	)
}

export default ExtraSkill