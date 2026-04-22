import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="relative border-r-[3px]  border-black">
      <div className="w-full">
        {images.map((image, index) => {
          return (
            <Container
              key={image.id}
              className="relative w-full overflow-hidden h-auto p-0 rounded-none"
              id={image.id}
            >
              {!!image.url && (
                <Image
                  src={image.url}
                  priority={index <= 2 ? true : false}
                  className="w-full h-auto reltaive border-b-[3px] border-black"
                  alt={`Product image ${index + 1}`}  
                  width={100}
                  height={100}
                  sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                  style={{
                    objectFit: "contain",
                  }}
                />
              )}
            </Container>
          )
        })}
      </div>
    </div>
  )
}

export default ImageGallery
