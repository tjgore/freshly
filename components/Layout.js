import Nav from './Nav'
import Footer from './Footer'
import '../static/styles.css'

const Layout = (props) => (
    <div className="text-gray-700 leading-relaxed">
        <Nav/>
            {props.children}
        <Footer/>
    </div>
)

export default Layout