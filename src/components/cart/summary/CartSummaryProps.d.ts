import { CartModalProps } from "../modal/CartModalProps"

export interface CartSummaryProps extends CartModalProps {
	onClearCart: () => void
}
