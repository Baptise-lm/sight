import { Link } from 'react-router'

function Navbar() {
    return (
        <nav className='flex flex-row w-full justify-center items-center px-6 max-w-[1440px]'>
            <div className='flex flex-row w-full justify-between items-center'>
                <Link to='/'>
                    Home
                </Link>
                <Link to='/items'>
                    Items
                </Link>
                <Link to='/map'>
                    Map
                </Link>
            </div>
        </nav>
    )
}

export default Navbar