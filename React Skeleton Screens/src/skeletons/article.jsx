import React from "react"
import Skeleton from "./base"
import Shimmer from "./shimmer"

const ArticleSkeleton = () => {
    return(
        <div className = "wrapper">
            <div>
                <Skeleton type = "title" />
                <Skeleton type = "text" />
                <Skeleton type = "text" />
                <Skeleton type = "text" />
            </div>
            <Shimmer />
        </div>
    )
}

export default ArticleSkeleton