export const listLoader = async () => {
    const res = await fetch('https://dummyjson.com/comments?limit=11')
    
    if(!res.ok) {
        throw new Error('Network issue!')
    }
    
    return res.json()
}

export const jobLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch(`https://dummyjson.com/comments/${id}`)
    
    if(!res.ok) {
        throw new Error('No data!')
    }

    return res.json()
}