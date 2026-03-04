import React from 'react';

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <nav className="footer-links" aria-label="Social links">
        <a
          href="https://github.com/imnutt"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          GitHub
        </a>
      </nav>
      <p>Built with React &mdash; Nutt</p>
    </footer>
  );
}

export default Footer;
