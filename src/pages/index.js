import Layout from '../../components/Layout'
import Head from '../../components/Head'
import Header from '../../components/Header'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import PopularBooksCard from '../../components/PopularBooksCard'
import RecentBooksCard from '../../components/RecentBooksCard'

const Index = ({ recentBooks, popularBooks }) => (
    <Layout>
        <Head title="Home"/>
        <Header/>
        
        <RecentBooksCard recentBooks={recentBooks} />

        <PopularBooksCard popularBooks={popularBooks} />

        <section className="lg:px-20 px-8 text-center mb-20">
            <h1 id="popular" className="pb-6 text-4xl text-center lg:text-left font-bold text-green-400">
                \\ Categories
            </h1>
            <div className="flex justify-around lg:flex-row flex-col pt-5">
                <Link href="/book/[category]" as="/book/fiction">
                    <div className="p-10 shadow-lg mb-6 cursor-pointer">
                        <i className="lni-syringe text-4xl text-purple-500"></i>
                        <h4 className="text-2xl font-bold">Fiction</h4>
                    </div>
                </Link>
                <Link href="/book/[category]" as="/book/nonfiction">
                    <div className="p-10 shadow-lg mb-6 cursor-pointer">
                        <i className="lni-sun text-4xl text-yellow-500"></i>
                        <h4 className="text-2xl font-bold">Non Fiction</h4>
                    </div>
                </Link>
                <Link href="/book/[category]" as="/book/advice-how-tos">
                    <div className="p-10 shadow-lg mb-6 cursor-pointer">
                        <i className="lni-thumbs-up text-4xl text-green-500"></i>
                        <h4 className="text-2xl font-bold">Advice, How tos</h4>
                    </div>
                </Link>
                <Link href="/book/[category]" as="/book/children">
                    <div className="p-10 shadow-lg mb-6 cursor-pointer">
                        <i className="lni-baloon text-4xl text-blue-500"></i>
                        <h4 className="text-2xl font-bold">Children</h4>
                    </div>
                </Link>
               
            </div>
        </section>

    </Layout>
)


Index.getInitialProps = async ({ req }) => {

    const [recentBooks, popularBooks] = await Promise.all([
        fetch(`https://api.nytimes.com/svc/books/v3/lists.json?list=Combined%20Print%20and%20E-Book%20Nonfiction&api-key=${process.env.NYT_API_KEY}`).then(response => response.json()),
        fetch(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${process.env.NYT_API_KEY}`).then(response => response.json()),
    ])

    return { recentBooks, popularBooks }
}

export default Index