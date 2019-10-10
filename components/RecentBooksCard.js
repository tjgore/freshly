const RecentBooksCard = ({recentBooks, showCount = 4}) => (

    <section className="lg:px-20 px-8 mb-24 text-center lg:text-left">
        <h1 id="latest" className="pb-4 text-4xl text-center lg:text-left font-bold text-green-400">\\ Latest Bestselling</h1>
        <div className="flex justify-center lg:flex-row flex-col lg:flex-wrap">
            { recentBooks.results.slice(0, showCount).map((book, key) => (
                <div key={key} className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:ml-0 lg:p-3 mb-8 lg:w-1/4 w-full">
                    <div>
                        <img src={`https://s1.nyt.com/du/books/images/${book.book_details[0].primary_isbn13}.jpg`} alt={book.book_details[0].title}className="m-auto md:h-64 h-auto"/>
                        <p className="pt-2 pb-0 text-xl font-extrabold">{book.book_details[0].title}</p>
                        <p className="text-gray-600 text-xs pb-3">
                            <i className="lni-user mr-1"></i>{book.book_details[0].author}
                        </p>
                        <p className="text-gray-600 pb-4">{book.book_details[0].description ? book.book_details[0].description : 'No Description Available' }</p>
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
)

export default RecentBooksCard