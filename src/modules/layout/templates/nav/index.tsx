
import React, { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { Logo, ShapeA } from "@modules/assets/assets"
import { MuxVideoBG } from "@lib/util/muxPlayer"
import Banner from "./Banner"

export default async function Nav({cover}:any) {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <React.Fragment>
      <header className="h-16  w-full fixed top-0 z-50 group navHold text-white mix-blend-difference">
        <nav className=" flex items-start justify-between w-full h-full px-6">
          

         

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full uppercase">
            <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/products"
                data-testid="nav-account-link "
              >
                Products
              </LocalizedClientLink>
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/info"
                data-testid="nav-account-link"
              >
                Info
              </LocalizedClientLink>
              <a
                className="hover:text-ui-fg-base"
                href="https://bigcaf.com/"
                target="_blank"
                data-testid="nav-account-link"
              >
                Festival
              </a>
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link uppercase"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>

      </header>
      
            <Banner cover={cover} />
     
      

    </React.Fragment>
  )
}
