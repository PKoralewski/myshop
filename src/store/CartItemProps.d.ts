import ProductProps from "../components/products/shared/ProductProps"

export interface CartItemProps extends ProductProps {
	quantity: number
}
