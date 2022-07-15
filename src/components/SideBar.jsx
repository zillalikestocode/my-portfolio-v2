import { useRef } from 'react'
import { motion, useCycle} from 'framer-motion'
import MenuToggle from './MenuToggle'
import useDimensions from './use-dimension'
import Navigation from './Navigation'
const sidebar = {
	open: (height = 1000)=> ({
			clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
			transition: {
				type: 'spring',
				stiffness: 20,
				restDelta: 2
			}
		}),
	closed: {		clipPath: 'circle(25px at 260px 40px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		}
	}
}

const slideIn = {
	initial: {
		x: "100%"
	},
	closed: {
		x: 0,
		transition: {
			type: 'spring',
			duration: 0.4
		}
	},
	open: {
		x: 0,	}
}

const SideBar = ({links}) => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null)
	const {height} = useDimensions(containerRef)
	return (
		<motion.nav
			initial='initial'
			animate={isOpen ? 'open' : 'closed'}
			custom={height}
			className="absolute top-0 bottom-0 right-0 w-[300px]"
			ref={containerRef}
			variants={slideIn}
			>
			<motion.div className="absolute top-0 right-0 bottom-0 w-[300px] bg-gray-700" variants={sidebar}/>
			<MenuToggle toggle={() => toggleOpen()} />
			<Navigation links={links} />
		</motion.nav>
	)
}

export default SideBar