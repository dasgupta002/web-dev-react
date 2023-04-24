import { redirect } from 'react-router-dom'

export const response = async ({ request }) => {
    const data = await request.formData()
    const submission = {
        name: data.get('name'),
        message: data.get('message')
    }

    if(submission.name.length < 5 || submission.message.length < 20) {
        return { error: 'Insufficient characters.' }
    }

    return redirect('/')
}