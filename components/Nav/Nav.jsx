import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <>
            <header className='nav-wrap'>
                <nav>
                    <ul>
                        <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : null}>Bingo</NavLink></li>
                        <li><NavLink to="../suggestions" className={({isActive}) => isActive ? 'active' : null}>Suggestions</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}