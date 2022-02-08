import React, { useState, useEffect } from 'react'
import ArticleSkeleton from '../skeletons/article'

const Article = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data))
    }, [])

    return(
        <div>
            <h2>Articles</h2>

            { posts.length > 0 && posts.map((post) => (
                <div className = "article" key = { post.id }>
                    <h3>{ post.title }</h3>
                    <p>{ post.body }</p>
                </div>
            )) }

            { posts.length === 0 && [1, 2, 3, 4, 5].map((item) => <ArticleSkeleton key = { item } />) }
        </div>
    )
}

export default Article