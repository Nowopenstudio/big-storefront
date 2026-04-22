import { PortableText } from "next-sanity";
import {getData} from "@lib/util/sanity";
import React from "react";
import { LogoSolo } from "@modules/assets/assets";
import ScrollUp, { H1Stroke } from "@lib/util/misc";


export default async function Home() {
  const query = await getData(`{
    'data':*[_type=='info'][0]{prime{hex},sec{hex}, specs[]{title,copy,prime{hex},sec{hex}}}
    }`)

 const {data} = query.data  
  return (

  
  <React.Fragment>
    
         <div className="w-full h-auto min-h=[100vh] grid grid-cols-2 border=[3px] border-black">
         <div className="col-span-1 relative border-r-[3px] border-black" style={{backgroundColor: data.prime.hex}}>
          <div className="w-full sticky top-0 p-6">
            <LogoSolo fill={data.sec.hex} className="w-full h-auto" />
          </div>
         </div>
         <div className="col-span-1 min-h-[100dvh] " style={{backgroundColor: data.specs[0]?.prime.hex}}>
           {data.specs.length > 0 && data.specs.map((spec:any, index:number) => (
            <div key={index} className="w-full h-auto text-black grid grid-cols-6 p-12 border-b-[3px] border-black" style={{backgroundColor: spec.prime.hex}}>
              <div className="col-span-5 mb-4"><H1Stroke text={spec.title} color={'#000000'} bg={spec.sec.hex} time={0.5*index} /></div>
              <div className={`w-full h-auto col-span-5 richText ${index == data.specs.length - 1 ? 'pb-24' : ''}`} >
                <PortableText value={spec.copy} />
              </div>
            </div>
           ))}
         </div>
          <ScrollUp />
          </div>
  </React.Fragment>

  );
}






