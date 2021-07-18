import React from 'react';
import ContentLoader from "react-content-loader";

const Loader = () => {
    return (
        <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"

        >
            <rect x="26" y="12" rx="0" ry="0" width="0" height="1" />
            <rect x="154" y="32" rx="0" ry="0" width="0" height="1" />
            <rect x="4" y="32" rx="0" ry="0" width="175" height="20" />
            <rect x="2" y="87" rx="0" ry="0" width="90" height="40" />
            <rect x="107" y="88" rx="0" ry="0" width="90" height="36" />
            <rect x="212" y="88" rx="0" ry="0" width="76" height="36" />
        </ContentLoader>
    )
}

export default Loader
