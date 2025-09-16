import { ProductImageDto } from "./product-image.dto"

export interface ProductDto {
    nameProduct: string
    price: number
    img: ProductDto[]
    description: string
    stock_quantity: number            
}