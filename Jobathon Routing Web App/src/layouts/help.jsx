import { Outlet, NavLink } from 'react-router-dom'

const Help = () => {
    return (
        <div className = 'layout'>
            <p>
                Excepteur pariatur elit aliqua ullamco ut aliqua. Adipisicing laborum fugiat ad fugiat excepteur ullamco eu. 
                Sunt adipisicing aute consectetur Lorem veniam laborum adipisicing. Commodo cillum sint sit consectetur ullamco 
                anim proident consequat cillum dolore. Anim incididunt irure aute qui et excepteur tempor sint. Deserunt aute 
                proident cupidatat minim proident veniam ea tempor tempor. Amet cillum ut sint consectetur laborum. Consequat 
                ipsum excepteur occaecat qui magna mollit id. Minim sint ea ex eiusmod aliquip commodo officia exercitation mollit 
                velit dolore. Aliquip cupidatat anim eiusmod cupidatat minim ut magna fugiat irure ut ea consequat est. Commodo 
                consectetur velit deserunt sit eiusmod fugiat est fugiat duis incididunt nisi consectetur id consectetur.
            </p>
            <nav>
                <NavLink to = 'faq'>Read the FAQs</NavLink>
                <NavLink to = 'contact'>Get In Touch</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}
 
export default Help