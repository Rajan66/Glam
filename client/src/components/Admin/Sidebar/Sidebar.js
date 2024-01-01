import React from 'react'
import "./Sidebar.css"

const Sidebar = ({ SidebarData, handleSidebarClick }) => {
    return (
        <div className='Sidebar'>
            <ul className='SidebarList'>
                {SidebarData.map((val) => {
                    return (
                        <li
                            className='row'
                            id={window.location.pathname === val.linkTo ? "active" : ""}
                            onClick={() => {
                                handleSidebarClick(val.linkTo)
                            }}
                        >
                            {" "}
                            <div id='icon'>{val.icon}</div>
                            {" "}
                            <div id='title'>{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar