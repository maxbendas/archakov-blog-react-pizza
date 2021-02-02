import React from 'react';
import ContentLoader from "react-content-loader"

const LoadingPizzaBlock = () => {
    return (
        <ContentLoader
            className='pizza-block'
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="260" rx="6" ry="6" width="280" height="24" />
            <circle cx="138" cy="122" r="115" />
            <rect x="-1" y="300" rx="6" ry="6" width="280" height="85" />
            <rect x="4" y="407" rx="6" ry="6" width="90" height="30" />
            <rect x="136" y="402" rx="25" ry="25" width="140" height="43" />
        </ContentLoader>
    )
};

export default LoadingPizzaBlock;