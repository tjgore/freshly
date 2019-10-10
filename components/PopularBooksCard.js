const PopularBooksCard = ({ popularBooks }) => (
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
                                    <p className="text-xs"><i className="lni-user mr-1"></i> {book.author}</p>
                                    <p className="text-xs"><i className="lni-library mr-1"></i> {list.list_name}</p>
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
)

export default PopularBooksCard