import React from 'react';
import LikeButton from './LikeButton';

function Hero({ likes, onLike }) {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero-avatar-wrapper">
        <img
          src="/avatar.jpg"
          alt="Nutt's profile photo"
          className="hero-avatar"
          crossOrigin="anonymous"
        />
        <span className="status-dot" aria-label="Online status" />
      </div>

      <h1 className="hero-name">Nutt</h1>
      <p className="hero-tagline">
        Developer & creator. Learning to build{' '}
        <span className="highlight">pixel-perfect</span> digital experiences
        for the web.
      </p>

      <div className="button-group">
        <a
          href="https://github.com/imnutt"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          aria-label="Follow Nutt on GitHub"
        >
          <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          Follow Me
        </a>

        <LikeButton likes={likes} onLike={onLike} />
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <svg className="scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
