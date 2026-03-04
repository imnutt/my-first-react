import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="profile-page">
      <main>
        <Hero likes={likes} onLike={() => setLikes((prev) => prev + 1)} />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
