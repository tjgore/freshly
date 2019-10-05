import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import '../static/styles.css'

const Layout = (props) => (
    <div>
        <Nav/>
        <Header/>
            {props.children}
        <Footer/>
    </div>
)

export default Layout