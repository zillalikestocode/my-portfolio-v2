import React from 'react'
import { motion } from 'framer-motion'

const Button = ({text, initial, animate, transition, styles, whileHover, whileTap, variants}) => {
	return (
		<motion.button initial={initial} animate={animate} transition={transition} className={styles} whileHover={whileHover} whileTap={whileTap} variants={variants} >
			{text}
		</motion.button>
	)
}

export default Button