import Footer from './Footer'
import Nav from './Nav'

const Layout = (props) => (
    <div>
      <Nav/>
        {props.children}
      <Footer/>
    </div>
)

export default Layout