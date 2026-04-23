import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  images: HttpTypes.StoreProductImage[]
  sanity?:any
  

}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
  images,
  sanity,
  
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="grid grid-cols-2 relative items-start"
        data-testid="product-container"
      >
      
        <div className="w-full relative col-span-1 h-auto">
          <ImageGallery images={images} />
        </div>
        <div className="col-span-1 h-[calc(100vh_-_255px)] sticky top-[200px]">
          <div className="flex flex-col w-full p-6 py-6">
            <ProductInfo product={product} sanity={sanity} />
            {/* <ProductTabs product={product} /> */}
          </div>
          <div className=" w-full">
            <ProductOnboardingCta />
            <Suspense
              fallback={
                <ProductActions
                  disabled={true}
                  sanity={sanity} 
                  product={product}
                  region={region}
                />
              }
            >
              <ProductActionsWrapper id={product.id} region={region} />
            </Suspense>
          </div>
        </div>
      </div>
      <div
        
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
    
  )
  
}

export default ProductTemplate
