import { H1Stroke, H3Stroke } from "@lib/util/misc"
import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
  sanity?: {
    content: string
  }
}

const ProductInfo = ({ product, sanity }: ProductInfoProps) => {
  return (
    <div id="product-info ">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] ">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <H3Stroke text={product.title} color="black" bg="#FE97DB" />
        
         

       
      </div>
    </div>
  )
}

export default ProductInfo
