import React from 'react';

const TECH_STACK = [
  'JavaScript',
  'React',
  'HTML',
  'CSS',
  'Node.js',
  'Git',
  'Chromebook',
];

function About() {
  return (
    <section className="about" aria-label="About section">
      <div className="about-inner">
        <p className="section-label">About</p>
        <p className="about-text">
          I'm <strong>Nutt</strong>, a developer who's passionate about building
          things for the web. Currently learning <strong>React</strong> and
          exploring front-end development from my Chromebook.
        </p>
        <p className="about-text">
          I enjoy turning ideas into clean, functional interfaces. Every project
          is a chance to learn something new and push my skills further.
        </p>

        <div className="tech-stack" role="list" aria-label="Technologies">
          {TECH_STACK.map((tech) => (
            <span className="tech-tag" role="listitem" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
