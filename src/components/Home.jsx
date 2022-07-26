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
			transition: {
				duration: 0.3
			}	
		}
	}
  return (
  	<motion.div className="pt-16 w-full absolute z-10  w-full">
	    <motion.div className="flex mx-auto w-[80%] lg:w-full items-center" variants={flex} initial="hidden" animate="visible" exit='exit'>
	    	<motion.div className=" lg:ml-auto flex flex-col pr-3"
	    		variants={socials} >
	    		
	    		<motion.a whileHover={{scale: 1.3,}} href="https://www.github.com/zillalikestocode" className="m-2 text-violet-600"><FaGithub size={20}/></motion.a>
	    		<motion.a whileHover={{scale: 1.3}} href="https://www.twitter.com/zillathefirstt" className="m-2 text-violet-600"><FaTwitter size={20} /></motion.a>
	    		<motion.a whileHover={{scale: 1.3}} href="https://www.instagram.com/the_emmanuelngoka" className="m-2 text-violet-600"><FaInstagram size={20} /></motion.a>
	    	</motion.div>
	    	<motion.div className="bg-violet-600 mr-5" variants={border} />
	    	<motion.div className="lg:mr-auto">
	    		<h4 className="text-4xl lg:text-5xl text-white font-semibold">Hi there,</h4>
	    		<div className="my-3 mb-1">
	    			<AnimatePresence>
	    			{slide === 1 && <motion.p className="text-white text-xl lg:text-2xl overflow-hidden inline-block whitespace-nowrap" variants={text} initial="hidden" animate="visible" exit="exit" >I'm Emmanuel Ngoka</motion.p>}
	    		</AnimatePresence>
	    		<AnimatePresence>
	    			{slide === 2 && <motion.p className="text-white text-xl lg:text-2xl overflow-hidden inline-block whitespace-nowrap" variants={text} initial="hidden" animate="visible" exit="exit" >I'm a <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">Web Developer</span></motion.p>}
	    		</AnimatePresence>
	    		<AnimatePresence>
	    			{slide === 3 && <motion.p className="text-white text-xl lg:text-2xl overflow-hidden inline-block whitespace-nowrap" variants={text} initial="hidden" animate="visible" exit="exit" >And a <span className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent">Graphic Designer</span></motion.p>}
	    		</AnimatePresence>
	    		</div>
	    		
	    		<p className="text-lg text-white mb-2">Let's work together</p>
	    	</motion.div>
	    </motion.div>
	    <ProjectSkills />
    </motion.div>
  )
}

export default Home