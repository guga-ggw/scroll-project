import { useRef } from 'react';
import './App.css';
import myphoto from './assets/i.png';
import { motion, useScroll, useTransform } from 'framer-motion';

import css from './assets/css.png'
import framermotion from './assets/framer-motion.png'
import git from './assets/git.png'
import html from './assets/html.png'
import js from './assets/js.png'
import npm from './assets/npm.png'
import react from './assets/react.png'
import reactrouter from './assets/react-router.png'
import Redux from './assets/Redux.png'
import sass from './assets/sass.png'

const data = [
  {
    property: "CSS",
    image: css
  },
  {
    property: "Framer Motion",
    image: framermotion
  },
  {
    property: "Git",
    image: git
  },
  {
    property: "HTML",
    image: html
  },
  {
    property: "JavaScript",
    image: js
  },
  {
    property: "npm",
    image: npm
  },
  {
    property: "React",
    image: react
  },
  {
    property: "React Router",
    image: reactrouter
  },
  {
    property: "Redux",
    image: Redux
  },
  {
    property: "Sass",
    image: sass
  }
];

function App() {
  const dl = useRef();
  const { scrollYProgress } = useScroll({ target: dl, offset: ['start end', 'end start'] });
  const FrontendDeveloperX = useTransform(scrollYProgress, [0, 1], [400, -1500]);
  const GugaMuchiashviliX = useTransform(scrollYProgress, [0, 1], [-300, 1500]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.4], [2, 0])


  return (
    <motion.div className='MainContent' ref={dl}>
      <div className="starting_container">
        <div className="content_txt_box">
          <motion.h1 style={{ x: FrontendDeveloperX }}>Frontend Developer</motion.h1>
          <motion.h1 style={{ x: GugaMuchiashviliX }}>Guga Muchiashvili</motion.h1>
        </div>
        <motion.img style={{opacity : imgOpacity, y: FrontendDeveloperX}} src={myphoto} alt="" />
      </div>
      <div className="skill_container">
        <motion.h1 initial={{opacity : 0}} whileInView={{opacity : 1, transition : {duration : 1}}} viewport={{once : true}}>Skills</motion.h1>
        <div className="skills_box">
          {data.map((item, i) => (
            <motion.img viewport={{once : true}} whileInView={{opacity : 1, x : 0}} initial ={{opacity : 0, x : -40}} transition={{delay : 0.1 * i, duration : 1.2, type : "spring", stiffness : 60}} id={item.property == "Framer Motion" ? "framermotion_img" : item.property == "HTML" ? "hc_img" : item.property == "CSS" ? "hc_img" : item.property == "React" ? "React_img" : item.property == "Redux" ? "Redux_img" : item.property == "React Router" ? "router_img" : "" } src={item.image}/>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default App;
