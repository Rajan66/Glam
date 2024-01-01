import React from 'react'
import "./Sidebar.css"

const Sidebar = ({ SidebarData, handleSidebarClick, currentComponent }) => {
    return (
        <div className='Sidebar'>
            <ul className='SidebarList'>
                {SidebarData.map((val) => {
                    return (
                        <li
                            className='row'
                            id={currentComponent === val.linkTo ? "active" : ""}
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