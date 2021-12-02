import React from 'react'
import Image from 'next/image'

const Main = () => {
    return (
        <main className="relative flex flex-col container mx-auto px-6 max-w-screen-sm">
            {/* Hero Section */}
           <section className="flex flex-col">
                <div className="flex flex-col">
                    <div>
                        <img src="/assets/top_divider.svg" alt="Daeitto - Top divider" />
                        <h3 className="text-muted text-xl py-4">
                            The diet app, perfect for you
                        </h3>
                    </div>

                    <div>
                        <h2 className="text-accent text-6xl font-bold">
                            <strong className="text-primary">Delicious </strong>
                            healthy food recipes
                        </h2>
                    </div>
                    <div>
                        <p className="text-muted text-xl py-6">Find the best recipes to take your diet to another level, without affecting your health</p>
                    </div>
                </div>

                
                <div className="relative flex flex-row flex-wrap gap-x-2 items-center pb-1/4">
                    <div className="relative flex-auto pb-11/12">
                        <img src="/assets/app_login.png" className="absolute top-0 left-1/12 w-3/4 h-full object-cover rounded-xl" alt="Daietto - App Login" />
                    </div>
                    <div className="relative flex-auto pb-11/12">
                        <img src="/assets/app_homescreen.png" className="absolute top-3/12 left-1/12 w-10/12 h-full object-cover rounded-xl" alt="Daietto - App Login" />
                    </div>

                    {/* <div className="flex flex-row flex-wrap content-start justify-start absolute bottom-0 left-0 w-full h-full">
                        <img src="/assets/app_results.svg" className="app_results absolute w-full h-full" alt="Daietto - App Results"/>
                    </div> */}
                </div>
           </section>
           
           {/* Feature 1 */}
           <section className="z-10">
                <div className="my-4">
                    <img src="/assets/top_divider.svg" alt="Daeitto - Top divider" />
                    <h2 className="text-accent text-6xl font-bold my-4">
                        <strong className="text-primary">Discover </strong>
                        how easy it is to create healthy foods
                    </h2>
                    <p className="text-muted text-xl py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas accumsan odio, cursus laoreet mauris porttitor non. Aliquam eu neque nibh. Aenean non pellentesque justo.</p>
                </div>
                <div>
                    <div></div>
                </div>
           </section>

           {/* Feature 2 */}
           <section className="z-10">
                <div className="my-4">
                    <img src="/assets/top_divider.svg" alt="Daeitto - Top divider" />
                    <h2 className="text-accent text-6xl font-bold my-4">
                        <strong className="text-primary">Conoce </strong>
                        el detalle de los alimentos que consumes
                    </h2>
                    <p className="text-muted text-xl py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas accumsan odio, cursus laoreet mauris porttitor non. Aliquam eu neque nibh. Aenean non pellentesque justo.</p>
                </div>
           </section>
        </main>
    )
}

export default Main
