import React from 'react'
import Image from 'next/image'

const Main = () => {
    return (
        <main className="relative flex flex-col container mx-auto px-4">
            {/* Hero Section */}
           <section className="flex flex-col">
                <div className="flex flex-col">
                    <div>
                        <img src="/assets/top_divider.svg" alt="Daeitto - Top divider" />
                        <h3 className="text-muted text-lg py-4">
                            The diet app, perfect for you
                        </h3>
                    </div>

                    <div>
                        <h2 className="text-accent text-3xl font-bold">
                            <strong className="text-primary">Delicious </strong>
                            healthy food recipes
                        </h2>
                    </div>
                    <div>
                        <p className="text-muted text-lg py-6">Find the best recipes to take your diet to another level, without affecting your health</p>
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
           <section className="z-10 grid grid-cols-1">
                <div className="mt-4 mb-8">
                    <img src="/assets/top_divider.svg" alt="Daeitto - Top divider" />
                    <h2 className="text-accent text-3xl font-bold my-4">
                        <strong className="text-primary">Discover </strong>
                        how easy it is to create healthy foods
                    </h2>
                    <p className="text-muted text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas accumsan odio, cursus laoreet mauris porttitor non. Aliquam eu neque nibh. Aenean non pellentesque justo.</p>
                </div>
                
                <div>
                    <div className="h-full relative overflow-hidden">
                        <div className="bg-recipe-bg pb-12">
                            <div className="relative z-10 flex flex-col justify-center justify-items-center items-center mx-24">
                                <img className="w-36 h-36 rounded-full" src="/assets/recipe_1.png" alt="Daietto - Recipe 1" width="250" height="250"/>
                            </div>
                            <div className="z-10 flex flex-col mx-12">
                                <h3 className="z-10 text-2xl font-bold">Ensalada mixta</h3>
                                <div className="flex z-10 space-x-8 pt-4">
                                    <p className="text-xl font-bold text-accent-2">243<span className="block text-xs font-normal text-right text-muted">calories</span></p>
                                    <p className="text-xl font-bold">2,8g<span className="block text-xs font-normal text-right text-muted">fats</span></p>
                                </div>
                            </div>
                            <div class="z-10 flex flex-col items-end">
                                <button class="z-10 rounded-full bg-accent w-12 h-12 mr-11 flex flex-col justify-center align-middle items-center">
                                    <Image className="z-10" src="/assets/arrow-right.svg" alt="Daietto - Read more" width="21" height="21"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="h-full relative overflow-hidden">
                        <div className="bg-recipe-bg pb-12">
                            <div className="relative z-10 flex flex-col justify-center justify-items-center items-center mx-24">
                                <img className="w-36 h-36 rounded-full" src="/assets/recipe_2.png" alt="Daietto - Recipe 2" width="250" height="250"/>
                            </div>
                            <div className="z-10 flex flex-col mx-12">
                                <h3 className="z-10 text-2xl font-bold">Ensalada con pollo</h3>
                                <div className="flex z-10 space-x-8 pt-4">
                                    <p className="text-xl font-bold text-accent-2">543<span className="block text-xs font-normal text-right text-muted">calories</span></p>
                                    <p className="text-xl font-bold">2,8g<span className="block text-xs font-normal text-right text-muted">fats</span></p>
                                </div>
                            </div>
                            <div class="z-10 flex flex-col items-end">
                                <button class="z-10 rounded-full bg-accent w-12 h-12 mr-11 flex flex-col justify-center align-middle items-center">
                                    <Image className="z-10" src="/assets/arrow-right.svg" alt="Daietto - Read more" width="21" height="21"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
           </section>

           {/* Feature 2 */}
           <section className="z-10">
                <div className="my-4">
                    <img src="/assets/top_divider.svg" alt="Daeitto - Top divider" />
                    <h2 className="text-accent text-3xl font-bold my-4">
                        <strong className="text-primary">Conoce </strong>
                        el detalle de los alimentos que consumes
                    </h2>
                    <p className="text-muted text-lg pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas accumsan odio, cursus laoreet mauris porttitor non. Aliquam eu neque nibh. Aenean non pellentesque justo.</p>
                </div>

                <div>
                    <img className="z-10 object-cover" src="/assets/app_details.png" alt="Daietto - App Details"/>
                </div>

                <div class="grid grid-cols-4 gap-4 justify-center justify-items-center items-center">
                    <div className="rounded-full w-32 h-32">
                        <img className="object-fit" src="/assets/ingredient_1.png" alt="Daietto - Recipe 1"/>
                    </div>
                    
                    <div className="rounded-full w-32 h-32">
                        <img className="object-fit" src="/assets/ingredient_2.png" alt="Daietto - Recipe 1"/>
                    </div>

                    <div className="rounded-full w-32 h-32">
                        <img className="object-fit" src="/assets/ingredient_3.png" alt="Daietto - Recipe 1"/>
                    </div>

                    <div className="rounded-full w-32 h-32">
                        <img className="object-fit" src="/assets/ingredient_4.png" alt="Daietto - Recipe 1"/>
                    </div>
                </div>
           </section>
        </main>
    )
}

export default Main
