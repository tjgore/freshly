import fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'
import RecentBooksCard from '../../components/RecentBooksCard'
import Head from '../../components/Head'


const niceNameToCategory = {
    'fiction':           'Combined%20Print%20and%20E-Book%20Fiction',
    'nonfiction':        'Combined%20Print%20and%20E-Book%20Nonfiction',
    'advice-how-tos':    'Advice%20How-To%20and%20Miscellaneous',
    'children':          'Paperback%20Books'
};

const Category = ({ recentBooks, categoryName }) => {

    return (
        <Layout>
            <Head title={categoryName} />
            <div className="pt-20">
                <RecentBooksCard recentBooks={recentBooks} showCount={12} />
            </div>
        </Layout>
    )
}

Category.getInitialProps = async ({ query }) => {
    
    const categoryName = query.category

    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists.json?list=${niceNameToCategory[categoryName]}&api-key=q8SMwqedky3NonOli3bONlnG7qUU1jDi`)

    const recentBooks = await response.json()

    return { recentBooks, categoryName }
}

export default Category