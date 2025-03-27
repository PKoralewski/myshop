import { useState, useMemo, useCallback } from "react"

export const usePagination = (totalItems: number, itemsPerPage: number = 5) => {
	const [currentPage, setCurrentPage] = useState(1)

	const totalPages = useMemo(
		() => (totalItems > 0 ? Math.ceil(totalItems / itemsPerPage) : 1),
		[totalItems, itemsPerPage],
	)
	const indexOfLastItem = useMemo(() => currentPage * itemsPerPage, [currentPage, itemsPerPage])
	const indexOfFirstItem = useMemo(() => indexOfLastItem - itemsPerPage, [indexOfLastItem, itemsPerPage])

	const nextPage = useCallback(() => setCurrentPage((prev) => Math.min(prev + 1, totalPages)), [totalPages])
	const prevPage = useCallback(() => setCurrentPage((prev) => Math.max(prev - 1, 1)), [])
	const goToPage = useCallback(
		(page: number) => setCurrentPage(Math.min(Math.max(page, 1), totalPages)),
		[totalPages],
	)

	return {
		currentPage,
		totalPages,
		indexOfFirstItem,
		indexOfLastItem,
		nextPage,
		prevPage,
		goToPage,
	}
}
