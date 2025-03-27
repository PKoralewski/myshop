import "./ProductTable.css"
import ProductRow from "./ProductRow"
import { useProductPagination } from "../../../hooks/useProductPagination"

const ProductTable = () => {
	const { currentProducts, currentPage, totalPages, nextPage, prevPage } = useProductPagination(5)

	return (
		<div className='product-table-container'>
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
					{currentProducts.map((product) => (
						<ProductRow key={product.id} product={product} />
					))}
				</tbody>
			</table>
			<div className='product-pagination'>
				<button onClick={prevPage} disabled={currentPage === 1}>
					← Poprzednia
				</button>
				<span>
					Strona {currentPage} z {totalPages}
				</span>
				<button onClick={nextPage} disabled={currentPage === totalPages}>
					Następna →
				</button>
			</div>
		</div>
	)
}

export default ProductTable
