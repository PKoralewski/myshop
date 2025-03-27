import { useSelector } from "react-redux"
import { useMemo } from "react"

import { RootState } from "../store"
import { usePagination } from "./usePagination"

export const useProductPagination = (itemsPerPage: number = 5) => {
	const products = useSelector((state: RootState) => state.products.products) || []

	const { currentPage, totalPages, indexOfFirstItem, indexOfLastItem, nextPage, prevPage, goToPage } = usePagination(
		products.length,
		itemsPerPage,
	)

	const currentProducts = useMemo(
		() => products.slice(indexOfFirstItem, indexOfLastItem),
		[products, indexOfFirstItem, indexOfLastItem],
	)

	return {
		products,
		currentProducts,
		currentPage,
		totalPages,
		nextPage,
		prevPage,
		goToPage,
	}
}
