import {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion'
import {useInView} from 'react-intersection-observer'

const variants = {
		hidden: {
			opacity: 0,
			y: 100
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			}
		}
	}

const Extra = ({title, id, eps}) => {
	const controls = useAnimation();
	const [viewRef, view] = useInView();

	useEffect(() => {
		if (view) {
			controls.start('visible')
		}
	}, [controls, view])
	return (
		<motion.div key={id} ref={viewRef} className="my-7 lg:mb-1 text-[#f5f5f5] w-[90%] lg:w-64 bg-slate-900 rounded-lg p-3" variants={variants} initial="hidden" animate={controls} whileHover={{scale: 1.05,}} whileTap={{scale: 1.05,}}>
			<span className="font-medium bg-gradient-to-r from-violet-600 to-fuchsia-500 text-transparent bg-clip-text text-lg project-title py-3">{title}</span>
			<p className="text-base my-3">{eps}</p>
		</motion.div>
	)
}

export default Extra