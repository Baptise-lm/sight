import Navbar from '../navigation/Navbar'

function GlobalLayout({ children }) {
    return (
        <>
            <header className=''>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
        </>
    )
}

export default GlobalLayout