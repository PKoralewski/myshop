import ProductProps from "../components/ProductProps"

export interface CartItemProps extends ProductProps {
	quantity: number
}
