import React from 'react'
import './ProductsView.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../../../actions/products'


const AllProducts = ({ setCurrentId }) => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    return (
        <div className='container'>


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Delete</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium">
                                    <img src={product.productImage} />
                                </th>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {product.title}
                                </th>
                                <td class="px-6 py-4 ">
                                    {product.description.split(' ').slice(0, 2).join(' ')}...
                                </td>
                                <td class="px-6 py-4">
                                    {product.category}
                                </td>
                                <td class="px-6 py-4">
                                    {product.status}
                                </td>
                                <td class="px-6 py-4">
                                    {product.price}
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <a href="#" style={{ textDecoration: 'none' }} class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => setCurrentId(product._id)} >Edit</a>
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <a href="#" style={{ textDecoration: 'none' }} class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => dispatch(deleteProduct(product._id))}> Delete</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllProducts