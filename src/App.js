import './App.css';
import {useState, useEffect} from 'react'
import Home from './components/Home'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { Route, Routes, useLocation} from 'react-router-dom'
import { motion, AnimatePresence, useCycle} from 'framer-motion'
import { FaHome, FaLaptopCode, FaReact } from 'react-icons/fa'
import { TbWriting } from 'react-icons/tb'
import { BiNetworkChart } from 'react-icons/bi'
import Button from './components/Button'
import Skills from './components/Skills'
import { TbBrandJavascript, TbBrandHtml5, TbBrandCss3, TbBrandPython, TbBrandNextjs } from 'react-icons/tb'
import About from './components/About'
import glockchain from './images/Glockchain.com.png'
import todov2 from './images/Todo list 2.0.png'
import todo from './images/Todo list.png'
import portfolio from './images/Welcome to my Portfolio.png'
import Projects from './components/Projects'
import MenuToggle from './components/MenuToggle'
import cv from './docs/cv1.pdf'
import tic from './images/tic.png'
import weather from './images/weather.png'
import memories from './images/social1.png'

function App() {
	const iconSize= 20
	const [isOpen, toggleOpen] = useCycle(false, true);
	const location = useLocation()
	const [navlinks, setLInks] = useState([
	{
		id: 1,
		name: 'Home',
		link: '/',
		icon: <FaHome size={iconSize}/>
	},
	{
		id: 2,
		name: 'Skills',
		link: '/skills',
		icon: <BiNetworkChart size={iconSize}/>
	},
	{
		id: 3,
		name: 'Projects',
		link: '/projects',
		icon: <FaLaptopCode size={iconSize} />
	},
	{
		id: 4,
		name: 'About me',
		link: '/about',
		icon: <TbWriting size={iconSize}/>
	},
	{
		id: 5,
		name: <a href={cv} download><Button text="Download CV" styles="p-3 bg-violet-600 text-[#f5f5f5] rounded-md font-medium" /></a>,
		notALink: true,
	}
	])
	const [skills, setSkills] = useState([
	{
		id: 1,
		name: "ReactJS",
		pct: 70,
		icon: <FaReact size={40} />
	},
	{
		id: 6,
		name: "NextJS",
		pct: 50,
		icon: <TbBrandNextjs size={40} />
	},
	{
		id: 2,
		name: "VanillaJS",
		pct: 75,
		icon: <TbBrandJavascript size={40}/>
	},
	{
		id: 3,
		name: "HTML5",
		pct: 90,
		icon: <TbBrandHtml5 size={40}/>
	},
	{
		id: 4,
		name: "CSS3",
		pct: 80,
		icon: <TbBrandCss3 size={40}/>
	},
	{
		id: 5,
		name: "Python",
		pct: 55,
		icon: <TbBrandPython size={40}/>
	}
	])
	const [projects, setProjects] = useState([
	{
		id: 6,
		name: 'Memories app',
		ref: 'https://z-memories.netlify.app',
		desc: 'A fullstack social media web app with google authentication and sign in functionality that allows users to post, like and comment to posts.',
		img: memories
	},
	{
		id: 1,
		name: 'Blockchain.com clone',
		ref: 'https://glockchain.pages.dev',
		desc: 'A blockchain.com landing page clone made with ReactJS, SwiperJS and TailwindCSS.',
		img: glockchain
	},
	{
		id: 5,
		name: 'Weather widget',
		ref: 'https://weather-widg.netlify.app',
		desc: 'A weather widget with real time weather data updated every three hours.',
		img: weather
	},
	{
		id:6,
		name: 'Tic tac toe game',
		ref: 'https://zilla-tic.netlify.app',
		desc: 'A functional tic tac toe game',
		img: tic
	},
	{
		id: 2,
		name: 'To-do list V2',
		ref: 'https://zillastodo-v2.pages.dev',
		desc: "Improved version of my to-do list created with ReactJS and stores the generated list to the browser's local storage.",
		img: todov2
	},
	{
		id: 3,
		name: 'My Portfolio V1',
		ref: 'https://zillacodes.pages.dev',
		desc: 'My first Portfolio made with HTML, CSS and Javascript.',
		img: portfolio,
	},
	{
		id: 4,
		name: 'To-do list V1',
		ref: 'https://zillastodo.pages.dev',
		desc: 'A todo list made with HTML, CSS and Javascript. My first Javascript Project xD.',
		img: todo,
	}
	])

	const [extraSkills, setExtraSkills] = useState([
	{
		id: 1,
		title: 'Problem Solving',
		eps: 'Problems or bugs are unavoidable in development. Fixing bugs is a major part of my skillset.'
	},
	{
		id: 2,
		title: 'Project Management',
		eps: 'Some projects are so tedious and stressful to manage. I have a well defined and very productive system of managing projects.'
	},
	{
		id: 3,
		title: 'UI/UX Designing',
		eps: 'Need to design your website or apps before writing code? I can do that :)'
	},
	{
		id: 4,
		title: 'Graphic Designing',
		eps: "Want to design your flyers, posters, logos or merch? That's my job. I can also create 2D/3D art components for your sites."
	},
	{
		id: 4,
		title: 'Gaming',
		eps: "I'm also (partially)available for Esports gaming events and tournaments.(Mobile only for now)"
	}
	])

	const [width, setWidth] = useState(window.innerWidth)
	const [textSlide, setSlide] = useState(1)

	useEffect(() => {
		const interval = setInterval(()=> setSlide((prev)=> {
			if (prev < 3){
				prev ++
			}else {
				prev = 1
			}
			return prev
		}), 3200)
		return () => {
			clearInterval(interval) };
	}, [])
	window.addEventListener('resize', ()=>{
		setWidth(window.innerWidth)
	})
  return (
    <>
      <Header links={navlinks} width={width} location={location}/>
      { width < 650 && <SideBar links={navlinks} isOpen={isOpen} toggleOpen={toggleOpen} />}
      { width < 650 && <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />}
      <AnimatePresence exitBeforeEnter>
	      <Routes location={location} key={location.pathname}>
	      	<Route path='/' element={<Home slide={textSlide}/>} />
	      	<Route path='/skills' element={<Skills skills={skills} extraSkills={extraSkills}/>} />
	      	<Route path='/about' element={<About />} />
	      	<Route path="/projects" element={<Projects projects={projects} />} />
	      </Routes>
      </AnimatePresence>
      
    </>
  );
}
export default App;
