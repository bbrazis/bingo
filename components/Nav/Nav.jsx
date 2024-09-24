import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <>
            <div className='nav-wrap'>
                <nav>
                    <ul>
                        <li><NavLink to="/">Bingo</NavLink></li>
                        <li><NavLink to="suggestions" >Suggestions</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}