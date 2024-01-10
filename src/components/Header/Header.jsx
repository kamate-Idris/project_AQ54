import React from 'react'
import "./Header.css"


const Header = () => {

    return (
        <header className='header'>
            <article className="header-container">
                <aside className="header-left">
                    <span className="logo"><img src="/img/logo.png" alt="Image du logo"  /></span>
                    <ul className='header-left-items'>
                        <li>Temps réel</li>
                        <li>Temps différé</li>
                        <li>Historique</li>
                    </ul>
                </aside>
                <aside className="header-right">
                    <div className="search-bar">
                        <img className='search-img' src="/img/search.svg" alt="Search Icon" />
                        <input className='search-input' placeholder='Rechercher...' type="text" />
                    </div>
                    {/* <div className="username">Kamate</div> */}
                </aside>
            </article>
        </header>
    )
}

export default Header

