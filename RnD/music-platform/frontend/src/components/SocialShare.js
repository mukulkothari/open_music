import React from 'react';

const SocialShare = ({ playlist }) => {
    const shareOnTwitter = () => {
        const url = `https://twitter.com/intent/tweet?text=Check%20out%20my%20playlist%20${playlist.name}%20${window.location.href}`;
        window.open(url, '_blank');
    };

    return (
        <div>
            <button onClick={shareOnTwitter}>Share on Twitter</button>
        </div>
    );
};

export default SocialShare;
