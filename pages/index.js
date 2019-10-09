import Layout from '../components/Layout'
import Head from '../components/Head'
import Header from '../components/Header'
import fetch from 'isomorphic-unfetch'

const Index = ({ recentBooks, popularBooks }) => (
    <Layout>
        <Head title="Home"/>
        <Header/>
        <section className="lg:px-20 px-8 mb-24 text-center lg:text-left">
            <h1 id="latest" className="pb-4 text-4xl text-center lg:text-left font-bold text-green-400">\\ Latest Bestselling</h1>
            <div className="flex justify-center lg:flex-row flex-col">
                { recentBooks.results.slice(0, 4).map((book, key) => (
                    <div key={key} className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:ml-0 lg:m-3 mb-8 lg:w-1/4 w-full">
                        <div>
                            <img src={`https://s1.nyt.com/du/books/images/${book.book_details[0].primary_isbn13}.jpg`} alt="{book.book_details[0].title}" className="m-auto"/>
                            <p className="pt-2 pb-0 text-xl font-extrabold">{book.book_details[0].title}</p>
                            <p className="text-gray-600 text-xs pb-3">
                                <i class="lni-user mr-1"></i>{book.book_details[0].author}
                            </p>
                            <p className="text-gray-600 pb-4">{book.book_details[0].description}</p>
                        </div>
                        <div className="lg:self-end mt-4 lg:mr-auto lg:m-0 m-auto">
                            <a href={book.amazon_product_url} target="_blank" className="text-sm bg-purple-500 text-white px-4 py-2 hover:bg-purple-600">
                            <i className="lni-amazon mr-1 font-bold"></i> Buy on Amazon
                            </a>
                        </div>
                    </div>
                ))}
               
            </div>
        </section>

        <section className="lg:px-20 px-8 text-center mb-20">
            <h1 id="popular" className="pb-4 text-4xl text-center lg:text-left font-bold text-green-400">
                \\ Popular Collection
            </h1>
            <div className="flex justify-center lg:justify-start flex-wrap">
                { popularBooks.results.lists.slice(0, 4).map(list => (
                    list.books.slice(0, 5).map((book, key) => (
                        <div key={key} className="lg:w-1/5 md:w-1/2 w-full">
                            <div className="m-3 lg:ml-0 mb-8 bg-transparent bg-center bg-no-repeat bg-cover h-64" style={{ backgroundImage: `url(${book.book_image})` }}>
                                <div className="flex flex-wrap h-full bg-grad-dark text-white p-4">
                                    <div>
                                        <p className="pt-4 pb-2 text-xl font-extrabold">{book.title}</p>
                                        <p className="text-xs"><i class="lni-user mr-1"></i> {book.author}</p>
                                        <p className="text-xs"><i class="lni-library mr-1"></i> {list.list_name}</p>
                                    </div>
                                    <a href={book.amazon_product_url} className="self-end mt-4 block text-sm bg-purple-500 text-white px-4 py-1 hover:bg-purple-600">
                                        <i className="lni-amazon mr-1 font-bold"></i>
                                        Buy on Amazon
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ))}
            </div>
        </section>

    </Layout>
)


Index.getInitialProps = async ({ req }) => {

    const [recentBooks, popularBooks] = await Promise.all([
        fetch('https://api.nytimes.com/svc/books/v3/lists.json?list=Combined%20Print%20and%20E-Book%20Nonfiction&api-key=q8SMwqedky3NonOli3bONlnG7qUU1jDi').then(response => response.json()),
        fetch('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=q8SMwqedky3NonOli3bONlnG7qUU1jDi').then(response => response.json()),
    ])

    return { recentBooks, popularBooks }
}

export default Index