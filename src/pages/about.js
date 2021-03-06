import Layout from '../../components/Layout'
import Head from '../../components/Head'

const About = () => (
    <Layout>
        <Head title="About Us"/>
        <div className="lg:px-20 px-8 mb-24">
        <img src="/static/images/book.svg" className="h-16 mt-16 m-auto" alt="book"/>
        <h1 className="text-6xl text-center mb-12 font-extrabold">About Freshly</h1>
            <div className="lg:w-2/3 m-auto w-full text-lg">
                <p className="mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque turpis tortor, hendrerit mattis tellus et, aliquam placerat purus. Donec felis nisi, iaculis sed laoreet id
                </p>
                <p className="mb-8">
                    Etiam dictum porta enim, vel maximus nunc faucibus at. 
                    Nam semper non massa a pretium. Nunc vel ullamcorper enim. In et pharetra tortor.
                    Sed ipsum sapien, mollis nec dui sed, feugiat porttitor velit. Vestibulum dolor dolor, 
                    tempor nec sem nec, hendrerit congue risus. Cras sem nibh,  
                </p>
                <p className="mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque turpis tortor, hendrerit mattis tellus et, aliquam placerat purus. Donec felis nisi, iaculis sed laoreet id
                </p>
            </div>
        </div>
    </Layout>
)

export default About