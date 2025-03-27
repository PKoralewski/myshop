import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import ProductProps from "../components/products/shared/ProductProps"
import { useProductById } from "../hooks/useProductById"

const withProductDetails = <T extends object>(WrappedComponent: React.ComponentType<T & { product: ProductProps }>) => {
	const WithProductDetails: React.FC<T> = (props) => {
		const { id } = useParams<{ id?: string }>()

		if (!id) {
			return <div>Błędne id</div>
		}

		const [productData, setProductData] = useState<ProductProps | null | undefined>(null)
		const product = useProductById(id)

		useEffect(() => {
			if (product !== null) {
				setProductData(product)
			}
		}, [product])

		if (productData === null) {
			return <div>Ładowanie...</div>
		}

		if (productData === undefined) {
			return <div>Nie znaleziono produktu</div>
		}

		return <WrappedComponent product={productData} {...props} />
	}

	WithProductDetails.displayName = `WithProductDetails(${WrappedComponent.displayName || WrappedComponent.name})`

	return WithProductDetails
}

export default withProductDetails
