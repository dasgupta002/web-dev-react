import { useLocation, Link } from 'react-router-dom'

const BreadCrumbs = () => {
    const location = useLocation()
    let currentLink = ''
    let crumbs = location.pathname.split('/').filter((crumb) => crumb !== '').map((crumb) => {
        currentLink += `/${crumb}`
        
        return (
            <div key = { crumb } className = 'crumb'>
                <Link to = { currentLink }>{ crumb }</Link>
            </div>
        )
    })

    return (
        <div className = 'breadcrumbs'>
            { crumbs }
        </div>
    )
}
 
export default BreadCrumbs