import React from 'react'

const Footer = () => {
    return (
        <footer className="relative flex flex-col container mx-auto px-6 max-w-screen-sm items-center">
            <h2 className="font-bold text-5xl flex-auto justify-center items-center py-6">
                <a href="/" className="flex flex-row flex-wrap gap-x-6 items-center text-accent">
                    <img src="/assets/daietto_footer_logo.svg" alt="Daeitto" />
                    <span>Daeitto</span>
                </a>
            </h2>
            {/* Socials */}
            <div></div>

            <div className="py-6">
                <p className="text-tertiary text-xl">© 2021 Daietto Derechos Reservados.</p>
            </div>
        </footer>
    )
}

export default Footer
