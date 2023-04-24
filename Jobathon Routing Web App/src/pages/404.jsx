import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className = 'error'>
            <h2>Page not found, sorry!</h2>
            <p>
                Laborum dolore labore sint quis esse est ut anim esse sit. Adipisicing pariatur quis non magna cillum 
                consequat irure qui laborum. Nisi cupidatat nulla excepteur exercitation incididunt deserunt. Elit mollit 
                commodo quis ea excepteur reprehenderit do non. Nostrud consectetur in commodo minim enim nostrud ex sint
                incididunt adipisicing ut.
            </p>
            <Link to = '/'>Back to home</Link>
        </div>    
    )
}
 
export default NotFound