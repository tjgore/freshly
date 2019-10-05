import Link from 'next/link'

const Nav = () => (
    <nav className="flex flex-col md:flex-row items-baseline px-8 md:px-32 pt-6 border">
        <div className="pb-4 w-full md:w-1/3 md:text-left text-center">
            <h1 className="text-2xl text-purple-700 font-bold">
                <Link href="/">
                    <a>Freshly</a>
                </Link>
            </h1>
        </div>
        <ul className="w-full md:w-2/3 lg:text-right text-center text-md text-gray-700 lg:pb-0 pb-4">
            <li className="inline-block mx-4 lg:mb-0 mb-4">
                <Link href="/">
                    <a className="hover:text-gray-900">About</a>
                </Link>
            </li>
            <li className="inline-block mx-4">
                <Link href="/">
                    <a className="hover:text-gray-900">Why Freshly</a>
                </Link>
            </li>
            <li className="inline-block mx-4">
                <Link href="/">
                    <a className="hover:text-gray-900">Vegan</a>
                </Link>
            </li>
            <li className="inline-block mx-4">
                <Link href="/">
                    <a className="hover:text-gray-900">Healty Snacks</a>
                    </Link>
            </li>
            <li className="inline-block mx-4">
                <Link href="/">
                    <a className="hover:text-gray-900">Deserts</a>
                </Link>
            </li>
        </ul>
    </nav>
)

export default Nav