import { useLoaderData } from 'react-router-dom'

const Detail = () => {
    const data = useLoaderData()
    
    return (
        <div className = 'info'>
            <h2>Details for { data.body }.</h2>
            <p>By { data.user.username }</p>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, odio accusamus nostrum totam 
                    perspiciatis ab atque aut natus beatae accusantium laboriosam vero eum consectetur assumenda nihil sequi.
                    Molestias asperiores debitis labore! Nam, aperiam quisquam eveniet voluptates praesentium veniam hic earum 
                    eum illum natus eos saepe nostrum ad enim dolorum.
                </p>
            </div>
        </div>
    )
}
 
export default Detail