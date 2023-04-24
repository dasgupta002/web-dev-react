import { Outlet } from 'react-router-dom'

const List = () => {
    return (
        <div className = 'list'>
            <p>
                Amet sint eiusmod veniam ea cillum anim mollit cupidatat minim amet do incididunt. Nostrud qui do ullamco 
                incididunt sint proident eu eiusmod nisi ullamco adipisicing consectetur cillum aliqua. Proident ut in veniam
                ex. Sunt nisi cillum anim sit velit dolore sint et nisi esse est laborum. Labore pariatur cupidatat duis incididunt 
                tempor non amet labore aute minim exercitation velit ex est. Laborum adipisicing veniam dolor anim reprehenderit culpa.
            </p>
            <Outlet />
        </div>
    )
}
 
export default List