import React, { useState } from 'react';

function LikeButton({ likes, onLike }) {
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    setAnimating(true);
    onLike();
    setTimeout(() => setAnimating(false), 300);
  };

  return (
    <button
      className="btn btn-secondary"
      onClick={handleClick}
      aria-label={`Like this profile. Current likes: ${likes}`}
      style={{
        transform: animating ? 'scale(1.08)' : 'scale(1)',
        transition: 'all 0.2s ease',
      }}
    >
      <svg
        className="btn-icon"
        viewBox="0 0 24 24"
        fill={likes > 0 ? '#f43f5e' : 'none'}
        stroke={likes > 0 ? '#f43f5e' : 'currentColor'}
        strokeWidth="2"
        aria-hidden="true"
        style={{
          transition: 'all 0.2s ease',
          transform: animating ? 'scale(1.2)' : 'scale(1)',
        }}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
      Like
      <span className="like-count">{likes}</span>
    </button>
  );
}

export default LikeButton;
