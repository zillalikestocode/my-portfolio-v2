import './App.css';
import {useState, useEffect} from 'react'
import Home from './components/Home'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { Route, Routes} from 'react-router-dom'
import { motion, AnimatePresence} from 'framer-motion'

function App() {
	const [navlinks, setLInks] = useState([
	{
		id: 1,
		name: 'Home',
		link: '/'
	},
	{
		id: 2,
		name: 'Skills',
		link: '/skills'
	},
	{
		id: 3,
		name: 'Projects',
		link: '/about'
	},
	{
		id: 4,
		name: 'About me',
		link: '/about'
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
		}), 3500)
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
      </Routes>
    </>
  );
}
export default App;
