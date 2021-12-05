import React from 'react'

const Header = () => {
    return (
        <header className="container mx-auto px-8 py-8 flex flex-row flex-wrap gap-x-2 items-center">
            <h1 className="font-bold text-2xl flex-auto">
                <a href="/" className="flex flex-row flex-wrap gap-x-2 items-center text-accent">
                    <img src="/assets/daeitto_mobile_logo.svg" alt="Daeitto" />
                    <span>Daeitto</span>
                </a>
            </h1>
            <div>
                <img src="/assets/hamburger_menu.svg" alt="Daeitto menu" />
            </div>
        </header>
    )
}

export default Header
