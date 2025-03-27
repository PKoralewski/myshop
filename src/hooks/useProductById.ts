import { useSelector } from "react-redux"
import ProductProps from "../components/products/shared/ProductProps"
import { RootState } from "../store"

export const useProductById = (id: string): ProductProps | undefined => {
	const product = useSelector((state: RootState) =>
		state.products.products.find((product) => product.id === parseInt(id)),
	)

	return product
}
