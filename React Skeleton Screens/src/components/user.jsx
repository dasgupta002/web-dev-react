import React, { useState, useEffect } from 'react'
import UserSkeleton from '../skeletons/user'

const User = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => response.json())
            .then((data) => setUser(data))
    }, [])

    return(
        <div className = "profile">
            <h2>User Details</h2>
            
            { user && (
                <>
                  <h3>{ user.username }</h3>
                  <p>{ user.email }</p>
                  <a href = { user.website }>{ user.website }</a>
                </>
            ) }

            { !user && <UserSkeleton /> }
        </div>
    )
}

export default User