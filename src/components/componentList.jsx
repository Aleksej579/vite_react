import React from 'react'
import MenuItems from '../data/dataMenuItems'
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item_ = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function ListTools() {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
    >
      { MenuItems.map((item, index) => 
        <motion.li 
          className='mx-[5px] cursor-pointer flex items-center mb-2 hover:underline hover:underline-offset-8'
          key={index} variants={item_}
        >
          <img src={item.icon} className='w-5' />
          <a href={item.link} target='_blank' className='ml-2'>{item.name}</a>
        </motion.li>
      )}
    </motion.ul>
  )
}