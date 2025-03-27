import ProductProps from "../../products/shared/ProductProps"

export interface CartModalProps {
	onClose: () => void
	cartProducts: ProductProps[]
}
