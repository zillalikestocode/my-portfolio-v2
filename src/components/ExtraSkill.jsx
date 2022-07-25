import {useEffect} from 'react'
import { motion } from 'framer-motion'
import Extra from './Extra'

const ExtraSkill = ({extraSkills}) => {
	return (
		<motion.div>
			<h4 className='text-xl font-medium text-white'>Extra useful Skills</h4>
			<motion.div className=" text-left">
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