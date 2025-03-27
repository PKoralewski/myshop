import { CartProductProps } from "../../../store/CartProductProps"

export interface CartModalProps {
	onClose: () => void
	cartProducts: CartProductProps[]
}
