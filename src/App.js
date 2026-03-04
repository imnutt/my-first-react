import React, { useState } from 'react'; // นำเข้า useState เพื่อใช้เก็บความจำของแอป
import './App.css';

function App() {
  // 1. สร้าง State สำหรับเก็บจำนวน "คนมากดทักทาย"
  const [likes, setLikes] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>สวัสดีครับ ยินดีต้อนรับสู่โปรเจกต์ของ imnutt!</h1>
        <p>ผมกำลังหัดเขียน React บน Chromebook ครับ 🚀</p>
        
        <div className="card">
          <h3>ทักทายกันได้ที่นี่</h3>
          <p>มีคนทักทายแล้ว: {likes} คน</p>
          
          {/* 2. เมื่อกดปุ่ม จะไปเพิ่มค่าใน likes */}
          <button 
            onClick={() => setLikes(likes + 1)}
            style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer', borderRadius: '8px' }}
          >
            กดปุ่มเพื่อทักทาย 👋
          </button>
        </div>

        <a className="App-link" href="https://github.com/imnutt" target="_blank" rel="noopener noreferrer">
          ไปดู GitHub ของผม
        </a>
      </header>
    </div>
  );
}

export default App;