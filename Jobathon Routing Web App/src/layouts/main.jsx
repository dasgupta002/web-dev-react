import { Outlet, NavLink } from 'react-router-dom'
import BreadCrumbs from '../components/bread'

const Layout = () => {
    return (
        <div>
            <header>
                <nav>
                    <h1>Job-A-Thon</h1>
                    <NavLink to = '/'>Home</NavLink>
                    <NavLink to = 'about'>About</NavLink>
                    <NavLink to = 'jobs'>Jobs</NavLink>
                    <NavLink to = 'help'>Help</NavLink>
                </nav>
                <BreadCrumbs />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
 
export default Layout