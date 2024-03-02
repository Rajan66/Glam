import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../../actions/order'
import OrderItem from './OrderItem';

const Orders = () => {
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.orders)

  useEffect(() => {
    dispatch(getOrders())
  }, [])

  return (
    <>
      {orders ? (
        <div class="relative overflow-x-auto my-4">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Order Id
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Address
                </th>
                <th scope="col" class="px-6 py-3">
                  Product
                </th>
                <th scope="col" class="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                  Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Complete</span>
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (

                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowra">
                    {order._id}
                  </th>
                  <td class="px-6 py-4">
                    {order.shippingAddress.name}
                  </td>
                  <td class="px-6 py-4">
                    {order.shippingAddress.address}, {order.shippingAddress.city}
                  </td>
                  <td class="px-6 py-4">
                    {order.products.map((product) => (
                      <>

                        {product.title}
                        <br />
                      </>
                    ))}
                  </td>
                  <td class="px-6 py-4">
                    {order.products.map((product) => (
                      <>
                        {product.quantity}
                        <br />
                      </>
                    ))}
                  </td>
                  <td class="px-6 py-4">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                  <td class="px-6 py-4">
                    {order.status}
                  </td>
                  <td class="px-6 py-4 text-right">
                    <a href="#" style={{ textDecoration: 'none' }} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <a href="#" style={{ textDecoration: 'none' }} class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          No orders
        </div>
      )}

    </>
  );
};


export default Orders