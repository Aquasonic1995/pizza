import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props:any) => (
    <ContentLoader
        speed={2}
        width={280}
        height={466.67}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="4" y="261" rx="3" ry="3" width="218" height="68" />
        <circle cx="109" cy="107" r="105" />
        <rect x="23" y="220" rx="0" ry="0" width="174" height="18" />
        <rect x="72" y="394" rx="0" ry="0" width="0" height="2" />
        <rect x="73" y="390" rx="0" ry="0" width="1" height="1" />
        <rect x="56" y="371" rx="0" ry="0" width="0" height="1" />
        <rect x="3" y="336" rx="10" ry="10" width="100" height="35" />
        <rect x="119" y="335" rx="10" ry="10" width="100" height="35" />
    </ContentLoader>
)

export default Skeleton

