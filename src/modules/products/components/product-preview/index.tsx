import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} >
      <div data-testid="product-wrapper" className="relative singleProduct">
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="full"
          isFeatured={isFeatured}
        />
        <div className="flex mt-4 absolute bottom-0 left-0 gap-x-4 w-full h-[55px]  border-t-[3px] border-black bg-[--blue] border-r-[3px]">
        <div className="flex justify-start items-center  bg-[--green] border-r-[3px] border-black viewButton">
              <Text className="navHold px-8 " data-testid="product-title">
                View →
              </Text>
            </div>
         <div className="flex h-full px-6 ">
            <div className="flex items-center flex-grow-2 ">
              <Text className="navHold " data-testid="product-title">
                {product.title}
              </Text>
            </div>
            <div className="flex items-center flex-grow-2 px-6 navHold text-white ">
              {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
            </div>
            
         </div>
        
        </div>
      </div>
    </LocalizedClientLink>
  )
}
