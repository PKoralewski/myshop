import { CartModalProps } from "./CartModalProps"

export interface CartSummaryProps extends CartModalProps {
	onClearCart: () => void
}
