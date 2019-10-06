import Layout from '../components/Layout'
import Head from '../components/Head'
import Header from '../components/Header'


const Index = () => (
    <Layout>
        <Head title="Home"/>
        <Header/>
        <section className="lg:px-20 px-8 mb-24">
            <h1 id="latest" className="pb-4 text-4xl text-center lg:text-left font-bold text-green-400">\\ Latest Bestselling</h1>
            <div className="flex justify-center lg:flex-row flex-col">
                <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:ml-0 lg:m-3 m-auto mb-8">
                    <div>
                        <img src="https://s1.nyt.com/du/books/images/9780399588181.jpg" alt="title"/>
                        <p className="pt-4 pb-2 text-xl">Born A Crime Story Childhood</p>
                        <span className="text-gray-600 text-xs">
                            <span className="lnr lnr-user"></span> Trevor Noah
                            <span className="lnr lnr-history ml-2"></span> Sept 12, 2017
                        </span>
                    </div>
                    <div className="lg:self-end mt-4">
                        <a href="#" className="text-sm bg-purple-500 text-white px-4 py-2 hover:bg-purple-600">Buy on Amazon</a>
                    </div>
                </div>

                <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:m-3 m-auto mb-8">
                    <div>
                        <img src="https://s1.nyt.com/du/books/images/9781501190643.jpg" alt="title"/>
                        <p className="pt-4 pb-2 text-xl">Lethal Agent Coke</p>
                        <span className="text-gray-600 text-xs">
                            <span className="lnr lnr-user"></span> Trevor Noah
                            <span className="lnr lnr-history ml-2"></span> Sept 12, 2017
                        </span>
                    </div>
                    <div className="lg:self-end mt-4">
                        <a href="#" className="text-sm bg-purple-500 text-white px-4 py-2 hover:bg-purple-600">Buy on Amazon</a>
                    </div>
                </div>

                <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:m-3 m-auto mb-8">
                    <div>
                        <img src="https://s1.nyt.com/du/books/images/9781538728529.jpg" alt="title"/>
                        <p className="pt-4 pb-2 text-xl">Born A Crime Story Childhood world</p>
                        <span className="text-gray-600 text-xs">
                            <span className="lnr lnr-user"></span> Trevor Noah
                            <span className="lnr lnr-history ml-2"></span> Sept 12, 2017
                        </span>
                    </div>
                    <div className="lg:self-end mt-4">
                        <a href="#" className="text-sm bg-purple-500 text-white px-4 py-2 hover:bg-purple-600">Buy on Amazon</a>
                    </div>
                </div>

                <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:m-3 m-auto mb-8">
                    <div>
                        <img src="https://s1.nyt.com/du/books/images/9781580056786.jpg" alt="title"/>
                        <p className="pt-4 pb-2 text-xl">Lethal Agent Coke</p>
                        <span className="text-gray-600 text-xs">
                            <span className="lnr lnr-user"></span> Trevor Noah
                            <span className="lnr lnr-history ml-2"></span> Sept 12, 2017
                        </span>
                    </div>
                    <div className="lg:self-end mt-4">
                        <a href="#" className="text-sm bg-purple-500 text-white px-4 py-2 hover:bg-purple-600">Buy on Amazon</a>
                    </div>
                </div>
            </div>
        </section>

       

        <section className="lg:px-20 px-8 text-center mb-20">
        <h1 id="popular" className="pb-4 text-4xl text-center lg:text-left font-bold text-green-400">\\ Popular Catch</h1>
            <div className="flex justify-center lg:justify-start flex-wrap">
                <div className="lg:w-1/5 md:w-1/2 w-full">
                    <div className="m-3 lg:ml-0 mb-8 bg-transparent bg-center bg-no-repeat bg-cover h-64" style={{ backgroundImage: "url(https://s1.nyt.com/du/books/images/9780399588181.jpg)" }}>
                        <div className="flex flex-wrap h-full bg-grad-dark text-white p-4">
                            <div>
                                <p className="pt-4 pb-2 text-xl">Born A Crime Story Childhood</p>
                                <span className="text-xs">
                                    <span className="lnr lnr-user"></span> Trevor Noah
                                    <span className="lnr lnr-history ml-2"></span> Sept 12, 2017
                                </span>
                            </div>
                            <a href="#" className="self-end mt-4 block text-sm bg-purple-500 text-white px-4 py-1 hover:bg-purple-600">Buy on Amazon</a>
                        </div>
                    </div>
                </div>
                
                <div className="lg:w-1/5 md:w-1/2 w-full">
                    <div className="m-3 lg:ml-0 mb-8 bg-transparent bg-center bg-no-repeat bg-cover h-64" style={{ backgroundImage: "url(https://s1.nyt.com/du/books/images/9781501190643.jpg)" }}>
                        <div className="flex flex-wrap h-full bg-grad-dark text-white p-4">
                            <div>
                                <p className="pt-4 pb-2 text-xl">Born A Crime Story Childhood</p>
                                <span className="text-xs">
                                    <span className="lnr lnr-user"></span> Trevor Noah
                                    <span className="lnr lnr-history ml-2"></span> Sept 12, 2017
                                </span>
                            </div>
                            <a href="#" className="self-end mt-4 block text-sm bg-purple-500 text-white px-4 py-1 hover:bg-purple-600">Buy on Amazon</a>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/5 md:w-1/2 w-full">
                    <div className="m-3 lg:ml-0 mb-8 bg-transparent bg-center bg-no-repeat bg-cover h-64" style={{ backgroundImage: "url(https://s1.nyt.com/du/books/images/9781580056786.jpg)" }}>
                        <div className="flex flex-wrap h-full bg-grad-dark text-white p-4">
                            <div>
                                <p className="pt-4 pb-2 text-xl">Born A Crime Story Childhood</p>
                                <span className="text-xs">
                                    <span className="lnr lnr-user"></span> Trevor Noah
                                    <span className="lnr lnr-history ml-2"></span> Sept 12, 2017
                                </span>
                            </div>
                            <a href="#" className="self-end mt-4 block text-sm bg-purple-500 text-white px-4 py-1 hover:bg-purple-600">Buy on Amazon</a>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/5 md:w-1/2 w-full">
                    <div className="m-3 lg:ml-0 mb-8 bg-transparent bg-center bg-no-repeat bg-cover h-64" style={{ backgroundImage: "url(https://s1.nyt.com/du/books/images/9780399588181.jpg)" }}>
                        <div className="flex flex-wrap h-full bg-grad-dark text-white p-4">
                            <div>
                                <p className="pt-4 pb-2 text-xl">Born A Crime Story Childhood</p>
                                <span className="text-xs">
                                    <span className="lnr lnr-user"></span> Trevor Noah
                                    <span className="lnr lnr-history ml-2"></span> Sept 12, 2017
                                </span>
                            </div>
                            <a href="#" className="self-end mt-4 block text-sm bg-purple-500 text-white px-4 py-1 hover:bg-purple-600">Buy on Amazon</a>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/5 md:w-1/2 w-full">
                    <div className="m-3 lg:ml-0 mb-8 bg-transparent bg-center bg-no-repeat bg-cover h-64" style={{ backgroundImage: "url(https://s1.nyt.com/du/books/images/9781501190643.jpg)" }}>
                        <div className="flex flex-wrap h-full bg-grad-dark text-white p-4">
                            <div>
                                <p className="pt-4 pb-2 text-xl">Born A Crime Story Childhood</p>
                                <span className="text-xs">
                                    <span className="lnr lnr-user"></span> Trevor Noah
                                    <span className="lnr lnr-history ml-2"></span> Sept 12, 2017
                                </span>
                            </div>
                            <a href="#" className="self-end mt-4 block text-sm bg-purple-500 text-white px-4 py-1 hover:bg-purple-600">Buy on Amazon</a>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/5 md:w-1/2 w-full">
                    <div className="m-3 lg:ml-0 mb-8 bg-transparent bg-center bg-no-repeat bg-cover h-64" style={{ backgroundImage: "url(https://s1.nyt.com/du/books/images/9781580056786.jpg)" }}>
                        <div className="flex flex-wrap h-full bg-grad-dark text-white p-4">
                            <div>
                                <p className="pt-4 pb-2 text-xl">Born A Crime Story Childhood</p>
                                <span className="text-xs">
                                    <span className="lnr lnr-user"></span> Trevor Noah
                                    <span className="lnr lnr-history ml-2"></span> Sept 12, 2017
                                </span>
                            </div>
                            <a href="#" className="self-end mt-4 block text-sm bg-purple-500 text-white px-4 py-1 hover:bg-purple-600">Buy on Amazon</a>
                        </div>
                    </div>
                </div>

               

            </div>
        </section>

    </Layout>
)

export default Index