import React from 'react'

const AccountPage = () => {
    

    return (
        <div className="container mx-auto">

            <form className="grid gap-4">
                <div className="">
                    {/* Email */}
                    <label for="email" className="mt-0 mb-2 block text-sm font-medium">Email</label>
                    <div className="relative">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="w-full rounded-md border border-gray-200 px-3 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="your.email@gmail.com"
                            // value={productData.title} onChange={(e) => setProductData({ ...productData, title: e.target.value })}
                        />

                    </div>
                    <label for="name" className="mt-4 mb-2 block text-sm font-medium">Full Name</label>
                    <div className="relative">
                        <input
                            required
                            type="text"
                            id="name"
                            name="name"
                            className="w-full rounded-md border border-gray-200 px-3 py-3 pl-11 text-sm  shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Your full name"
                        />
                    </div>
                    <label for="name" className="mt-4 mb-2 block text-sm font-medium">Contact No.</label>
                    <div className="relative">
                        <input
                            required
                            type="text"
                            id="phone"
                            name="phone"
                            className="w-full rounded-md border border-gray-200 px-3 py-3 pl-11 text-sm  shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Your contact number"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AccountPage