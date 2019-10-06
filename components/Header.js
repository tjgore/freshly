
import Link from 'next/link'
const Header = () => (

    <section className="bg-transparent bg-center bg-no-repeat bg-cover mb-20" style={{ backgroundImage: "url(/static/images/food-background.jpg)" }}>
        <div className="h-full bg-grad-purple">
            <div className="pt-24 lg:pb-32 pb-28 text-white p-8 lg:px-32 text-center">
                <h4 className="font-extrabold text-2xl">Discover Bestselling Books</h4>
                <h1 className="text-5xl lg:text-6xl leading-tight font-black py-3"> Read <span className="text-green-400">more</span>, Learn  <span className="text-green-400">more</span>, and be on your way to feeling your <span className="text-green-400">best!</span> </h1>
                <h6 className="font-bold mb-4">It's time to change what we know!</h6>
                <div className="pt-10">
                    <Link href="/#popular">
                        <a className="lg:inline-block block px-8 py-4 bg-white m-4 text-purple-600 font-medium hover:bg-gray-200">Browser Books</a>
                    </Link>
                    <Link href="/why">
                        <a className="lg:inline-block block px-8 py-4 bg-purple-400 m-4 hover:bg-purple-500 font-medium">Why Freshly?</a>
                    </Link>
                </div>
            </div>
        </div>
    </section>
)

export default Header