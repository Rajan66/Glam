import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { updatedUser } from '../../actions/user';


const AccountPage = ({ user }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const [newProfile,setNewProfile] = useState({email:'',name:'',contact:''})

    useEffect(() => {
        if (!user) {
            setLoading(true);
        }else{
            setNewProfile(user)
            setLoading(false)
        }
    }, [user])

    const handleSubmit = () => {
        dispatch(updatedUser(user._id,newProfile))
    }

    if (loading) {
        return <div>Loading...</div>; // Show loading screen while data is being fetched
    }

    return (
        <div className="container h-screen">

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
                            value={newProfile.email}
                            onChange={(e) => setNewProfile({ ...newProfile, email: e.target.value })}
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
                            value={newProfile.name}
                            onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
                        />
                    </div>
                    <label for="name" className="mt-4 mb-2 block text-sm font-medium">Contact No.</label>
                    <div className="relative">
                        <input
                            required
                            type="text"
                            id="contact"
                            name="contact"
                            className="w-full rounded-md border border-gray-200 px-3 py-3 pl-11 text-sm  shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Your contact number"
                            value={newProfile.contact}
                            onChange={(e) => setNewProfile({ ...newProfile, contact: e.target.value })}

                        />
                    </div>
                    <div className='relative mt-10'>
                    <input type="submit" value="Save"
                     className='bg-red-600 text-white px-6 py-1 rounded-sm' onClick={handleSubmit} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AccountPage