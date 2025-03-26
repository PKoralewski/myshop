import { useSelector } from "react-redux"

import ProductRow from "./ProductRow"
import "./ProductTable.css"
import { RootState } from "../store"

const ProductTable = () => {
	const products = useSelector((state: RootState) => state.products.products)

	return (
		<table className='product-table'>
			<thead>
				<tr>
					<th></th>
					<th>Nazwa</th>
					<th>Cena</th>
					<th>Liczba sztuk</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{products.map((product) => (
					<ProductRow key={product.id} product={product} />
				))}
			</tbody>
		</table>
	)
}

export default ProductTable
