import React from 'react'
import {motion} from 'framer-motion'

const ProgressRing = ({ pct, radius}) => {
	const strokeDashoffset = (radius * 6) - ((radius * 6) * pct) / 100;
	const strokeDasharray = radius * 6

	const variants = {
		hidden: {
			strokeDashoffset: (radius * 6) - ((radius * 6) * 1) / 100,
		},
		animate: {
			strokeDashoffset: (radius * 6) - ((radius * 6) * pct) / 100,
			transition: {
				delay: 0.6,
				duration: 1,
				ease: 'easeInOut'
			}
		}
	}
	return (
		<div className="circle-box">
			<motion.svg className="circle" style={{width: `${radius * 2}px`, height: `${radius * 2}px`}}>
			<defs>
				<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" stop-color="#d946ef" />
					<stop offset="100%" stop-color="#7c3aed" />
				</linearGradient>
			</defs>
				<motion.circle cx={radius} cy={radius} r={radius - 5} variants={variants} initial="hidden" animate="animate" style={{strokeDasharray}} stroke="url(#gradient)" strokeLinecap="round"/>
			</motion.svg>
		</div>
		
	)
}

export default ProgressRing