import React from 'react'
import "./Layout.css"
import { Outlet, Link  } from "react-router-dom"

/**
 * Header for every pages
 * @returns 
 */
const Header = () => {
    return (
        <>
            <header className='header'>
                <article className="header-container">
                    <aside className="header-left">
                        <span className="logo">AQ54</span>
                        <ul className='header-left-items'>
                            <Link className='header-left-item' to="/">Temps réel</Link>
                            <Link className='header-left-item' to="/differTime">Temps différé</Link>
                            <Link to="historic" className='header-left-item'>Historique</Link>
                        </ul>
                    </aside>
                    <aside className="header-right">
                        <div className="search-bar">
                            <img className='search-img' src="/icons/search.svg" alt="Search Icon" />
                            <input className='search-input' placeholder='Rechercher...' type="text" />
                        </div>
                        {/* <div className="username">Kamate</div> */}
                    </aside>
                </article>
            </header>
            <article className="body">
                <Outlet />
            </article>

        </>


    )
}

export default Header

