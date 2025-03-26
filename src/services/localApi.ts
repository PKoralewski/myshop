import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react"
import products from "../data/products"

export const localApi = createApi({
	reducerPath: "localApi",
	baseQuery: fakeBaseQuery(),
	endpoints: (builder) => ({
		getProducts: builder.query<typeof products, void>({
			queryFn: () => ({ data: products }),
		}),
	}),
})

export const { useGetProductsQuery } = localApi
