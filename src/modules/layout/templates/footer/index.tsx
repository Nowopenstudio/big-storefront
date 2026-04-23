import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"
import Image from "next/image"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import CTAScroll from "./ctaScroll"

export default async function Footer({data}:any) {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="fixed z-90 border-[--3px] left-0 bottom-0 h-[60px] navHold w-[100vw] bg-[--yellow] border-black flex items-center">
     <div className="w-auto flex h-full relative z-10">
      <div className="h-full w-auto bg-[--red] aspect-square border-r-[3px] border-black">
      </div>
      <div className="bg-[--orange] max-w-full w-full h-full px-4 flex gap-6 justify-between items-center border-r-[3px] border-black relative z-10">
      {data.footerLogo.map((item:any,i:number)=>{
        return(
          <div className="h-auto w-auto" key={i}>
            <Image alt="footer logo" src={item.image} width={100} height={100} sizes="100vw"  className={`fadeOn w-auto h-full`} />
          </div>
        )
      })}
      </div>
      
     </div>
     <div className="absolute z-0 left-0 top-0 w-full h-full overflow-hidden">
        <CTAScroll data={data.marquee} time={20} />
      </div>
      

     
    </footer>
  )
}
