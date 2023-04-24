import { Form, useActionData } from 'react-router-dom'

const Contact = () => {
    const data = useActionData()

    return (
        <Form method = 'post' action = '/help/contact'>
            <label>
                <span>Name</span>
                <input type = 'text' name = 'name' required />
            </label>
            <label>
                <span>Message</span>
                <textarea name = 'message' rows = '7' required></textarea>
            </label>
            <button>Share</button>
            { data && data.error && <p>{ data.error }</p> }
        </Form>
    )
}
 
export default Contact