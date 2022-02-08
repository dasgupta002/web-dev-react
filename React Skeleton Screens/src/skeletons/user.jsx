import React from "react"
import Skeleton from "./base"
import Shimmer from "./shimmer"

const UserSkeleton = () => {
    return(
        <div className = "wrapper">
            <div className = "content">
                <div>
                    <Skeleton type = "avatar" />
                </div>
                <div>
                    <Skeleton type = "title" />
                    <Skeleton type = "text" />
                    <Skeleton type = "text" />
                </div>    
            </div>
            <Shimmer />
        </div>
    )
}

export default UserSkeleton