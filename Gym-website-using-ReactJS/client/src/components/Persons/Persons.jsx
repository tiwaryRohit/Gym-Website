import React from 'react'
import './Persons.css'
import { personsData } from '../../data/personsData'
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'
const Persons = () => {
    const transition ={type:'spring', duration:3}
    const [selected, setSelected] = useState(0);
    const tLength = personsData.length;

    return (

    <div className="Persons">
        <div className="left-t">
            <span className='stroke'>WHAT THEY</span>
            <span>SAY</span>
            <span>ABOUT US</span>
            <motion.span
            key={selected}
            initial={{opacity:0, x:-100}}
            animate={{opacity:1, x:0}}
            exit={{opacity: 0, x: 100}}
            transition={transition}>{personsData[selected].review}</motion.span>
            <span>
                <span style={{color: 'var(--orange)'}}>{personsData[selected].name}
                </span>{" "} - {personsData[selected].status}
            
            </span>
        </div>
        <div className="right-t">
            <motion.div
                initial={{opacity:0, x:-100}}
                transition={{...transition, duration:2}}
                whileInView={{opacity:1, x:0}}
                ></motion.div>
            <motion.div
                initial={{opacity:0, x:100}}
                transition={{...transition, duration:2}}
                whileInView={{opacity:1, x:0}}
                ></motion.div>
             <motion.img 
             key={selected}
             initial={{opacity:0, x:100}}
             animate={{opacity:1, x:0}}
             exit={{opacity: 0, x: -100}}
             transition={transition}
             src={personsData[selected].image} alt="" />
            <div className='arrows'>
                <img onClick={()=>{
                    selected===0
                        ? setSelected(tLength - 1)
                        : setSelected((prev) => prev - 1);
                }
                } src={leftArrow} alt="" />
                <img onClick={()=>{
                    selected===tLength - 1
                        ? setSelected(0)
                        : setSelected((prev) => prev + 1);
                }
                } src={rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Persons