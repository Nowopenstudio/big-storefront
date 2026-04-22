'use client'

import { animate, useMotionValue, motion } from "framer-motion";

import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import { Star } from "@modules/assets/assets";





export default function CTAScroll({data,time}:any) {
  const [ref, {width}] = useMeasure();
  const xTranslation = useMotionValue(0)
  useEffect(()=>{
    const finalPos = -width/3  ;
    
    
    const controls = animate(xTranslation, [-width+(width/3), finalPos],{
      ease:'linear', duration:time, repeat:Infinity, repeatType:'loop', repeatDelay:0
    })
    
    
      return controls.stop;
    }, [xTranslation, width])
  
  return (
   
    
      <motion.div  className="flex left-0 items-center top-[0] z-[1 gap-4 w-max h-full navHold" ref={ref} style={{x:xTranslation,color:`black`}}>
          
        
          <div  className="flex flex-shrink-0 items-center uppercase gap-4 "><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
          <div  className="flex flex-shrink-0 items-center uppercase gap-4"><p>{data.text}</p><Star className="w-[26px] h-auto" fill={`lack`}/></div>
      
       </motion.div>
  


);
}
