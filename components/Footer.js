import Nav from './Nav'
import Link from 'next/link'

const Footer = () => (
    <div className="mt-20 bg-gray-800 text-white text-center py-12 text-sm">
        <h1 className="text-2xl text-purple-400 mb-2 font-bold">
                <Link href="/">
                    <a>Freshly</a>
                </Link>
            </h1>
        <ul className="w-full md:w-1/3 m-auto text-center text-md">
            <li className="inline-block mx-4 lg:mb-0 mb-4">
                <Link href="/about">
                    <a className="hover:text-gray-300">About</a>
                </Link>
            </li>
            <li className="inline-block mx-4">
                <Link href="/why">
                    <a className="hover:text-gray-300">Why Freshly</a>
                </Link>
            </li>
            <li className="inline-block mx-4">
                <Link href="/#latest">
                    <a className="hover:text-gray-300">Latest</a>
                </Link>
            </li>
            <li className="inline-block mx-4">
                <Link href="/#popular">
                    <a className="hover:text-gray-300">Popular</a>
                    </Link>
            </li>
        </ul>
        <p className="pt-8">
            Hope you enjoyed our Site!
            <br/>
            Made with Nextjs
        </p>
    </div>
)

export default Footer