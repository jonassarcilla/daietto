import React from 'react'

const Footer = () => {
    return (
        <footer className="relative flex flex-col container mx-auto px-8 items-center">
            <div className="text-center py-8">
                <h2 className="font-bold text-4xl flex-auto justify-center items-center py-6">
                    <a href="/" className="flex flex-row flex-wrap gap-x-6 items-center text-accent">
                        <img src="/assets/daietto_footer_logo.svg" alt="Daeitto" />
                        <span>Daeitto</span>
                    </a>
                </h2>
                <div class="grid grid-cols-4 gap-8 justify-center justify-items-center items-center pl-8">
                        <a href="#">
                            <img className="object-fit" src="/assets/icon_fb.svg" alt="Daietto - Facebook"/>
                        </a>
                        
                        <a href="#">
                            <img className="object-fit" src="/assets/icon_ig.svg" alt="Daietto - Instagram"/>
                        </a>

                        <a href="#">
                            <img className="object-fit" src="/assets/icon_tw.svg" alt="Daietto - Twitter"/>
                        </a>
                </div>
            </div>

            <div className="pt-6 pb-24">
                <p className="text-tertiary text-sm">© 2021 Daietto Derechos Reservados.</p>
            </div>
        </footer>
    )
}

export default Footer
