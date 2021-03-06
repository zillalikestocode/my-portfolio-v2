import {useState} from 'react'
import { FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa'
import Button from './Button'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectSkills from './ProjectSkills'

const Home = ({slide}) => {
	const socials = {
		hidden: {
			x: "-100%"		},
		visible: {
			x: 0,
			transition: {
				duration: 0.4,
				ease: "easeInOut"
			}
		}
	}
	const border = {
		hidden: {
			minHeight: 0,
			minWidth: '2px',
		},
		visible: {
			minHeight: "100px",
			zIndex: -10,
			transition: {
				duration: 0.4,
				ease: 'easeInOut'
			}
		}
	}
	const flex = {
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,			
			}
		},
		hidden: {
			opacity: 0,
		},
		exit: {
			opacity: 0,
		}
	}
	const text = {
		hidden: {
			width: 0
		},
		visible: {
			width: "auto",
			transition: {
				duration: 0.8,
				delay: 0.5,
			}
		},
		exit: {
			width: 0,	
			transitiom: {
				duration: 0.3
			}	
		}
	}
  return (
  	<motion.div className="pt-16 w-full absolute z-10">
	    <motion.div className="flex mx-auto w-[80%] md:mx-20 items-center" variants={flex} initial="hidden" animate="visible" exit='exit'>
	    	<motion.div className="flex flex-col pr-3"
	    		variants={socials} >
	    		
	    		<motion.a whileHover={{scale: 1.3,}} href="https://www.github.com/zillalikestocode" className="m-2 text-violet-600"><FaGithub size={20}/></motion.a>
	    		<motion.a whileHover={{scale: 1.3}} href="https://www.twitter.com/zillathefirstt" className="m-2 text-violet-600"><FaTwitter size={20} /></motion.a>
	    		<motion.a whileHover={{scale: 1.3}} href="https://www.instagram.com/the_emmanuelngoka" className="m-2 text-violet-600"><FaInstagram size={20} /></motion.a>
	    	</motion.div>
	    	<motion.div className="bg-violet-600 mr-5" variants={border} />
	    	<motion.div>
	    		<h4 className="text-4xl text-white font-semibold">Hi there,</h4>
	    		<AnimatePresence>
	    			{slide === 1 && <motion.p className="text-white text-xl my-3 overflow-hidden inline-block whitespace-nowrap" variants={text} initial="hidden" animate="visible" exit="exit" >I'm Emmanuel Ngoka</motion.p>}
	    		</AnimatePresence>
	    		<AnimatePresence>
	    			{slide === 2 && <motion.p className="text-white text-xl my-3 overflow-hidden inline-block whitespace-nowrap" variants={text} initial="hidden" animate="visible" exit="exit" >I'm a Web Developer</motion.p>}
	    		</AnimatePresence>
	    		<AnimatePresence>
	    			{slide === 3 && <motion.p className="text-white text-xl my-3 overflow-hidden inline-block whitespace-nowrap" variants={text} initial="hidden" animate="visible" exit="exit" >Let's work together</motion.p>}
	    		</AnimatePresence>
	    	</motion.div>
	    </motion.div>
	    <ProjectSkills />
    </motion.div>
  )
}

export default Home