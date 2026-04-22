'use client'

import { MuxVideoBG } from "@lib/util/muxPlayer";
import { Logo, ShapeA } from "@modules/assets/assets";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import { usePathname } from "next/navigation";
import React from "react";





export default function Banner({cover}:any) {
  const page = usePathname();
  return (

<React.Fragment>
  {cover && page === '/us' ?(
      <div className="w-[100vw] h-[500px] grid grid-cols-12 left-0 border-black border-[3px] relative navHold">
              
              <LocalizedClientLink
                href="/"
                className="col-span-4 border-r-[3px] border-black uppercase bg-[--blue] relative overflow-hidden p-8 h-auto "
                data-testid="nav-store-link"
              >
                <ShapeA fill="#fd8026" className="absolute top-0 left-0 w-full h-full z-0 object-fill" preserveAspectRatio="none"/>
                <Logo className='w-full h-auto z-10 relative' fill='black' />
              </LocalizedClientLink>
     
      <div className="col-span-8 col-end-13 h-full bg-[--red] relative">
                
                  
                    <div className="h-full w-full bgMux noControl z-0"> <MuxVideoBG playbackId={cover.vid} title={`Shows Video`} ratio={cover.ratio}/></div>
                   
              
              </div>
              </div>):(

<div className="w-[100vw] h-[200px] left-0 border-black border-[3px] relative navHold bg-[--white]">
   <LocalizedClientLink
                href="/">
    <div className="h-full uppercase relative overflow-hidden px-4 py-2">
        <Logo className='w-auto h-full z-10 relative' fill='black' />
    </div>
    </LocalizedClientLink>
</div>
              )}
    
</React.Fragment>


);
}
