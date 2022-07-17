import './App.css';
import {useState, useEffect} from 'react'
import Home from './components/Home'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { Route, Routes} from 'react-router-dom'
import { motion, AnimatePresence} from 'framer-motion'
import { FaHome, FaLaptopCode, FaReact } from 'react-icons/fa'
import { TbWriting } from 'react-icons/tb'
import { BiNetworkChart } from 'react-icons/bi'
import Button from './components/Button'
import Skills from './components/Skills'
import { TbBrandJavascript, TbBrandHtml5, TbBrandCss3, TbBrandPython } from 'react-icons/tb'

function App() {
	const iconSize= 20
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
		name: <Button text="Download CV" styles="p-3 bg-violet-600 text-[#f5f5f5] rounded-md font-medium" />,
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
      <Header links={navlinks} width={width}/>
      { width < 650 && <SideBar links={navlinks} />}
      <Routes>
      	<Route path='/' element={<Home slide={textSlide}/>} />
      	<Route path='/skills' element={<Skills skills={skills}/>} />
      </Routes>
    </>
  );
}
export default App;
