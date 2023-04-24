import { useLoaderData, Link } from 'react-router-dom'

const Jobs = () => {
    const data = useLoaderData()

    return (
        <div className = 'jobs'>
            {
                data.comments.map(job => <Link to = { job.id.toString() } key = { job.id }>
                    <h4>{ job.body }</h4>
                    <p>By { job.user.username }</p>
                </Link>)
            }
        </div>
    )
}
 
export default Jobs