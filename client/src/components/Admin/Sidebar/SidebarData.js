import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import UserIcon from '@mui/icons-material/Person'
import ProductIcon from '@mui/icons-material/GifBox'
import OrderIcon from '@mui/icons-material/LocalShipping'

export const SidebarData = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon />,
        linkTo: "home"
    },
    {
        id: 2,
        title: "Users",
        icon: <UserIcon />,
        linkTo: "user"
    },
    {
        id: 3,
        title: "Products",
        icon: <ProductIcon />,
        linkTo: "products"
    },
    {
        id: 4,
        title: "Orders",
        icon: <OrderIcon />,
        linkTo: "orders"
    },
]