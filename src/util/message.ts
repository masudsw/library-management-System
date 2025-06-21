export const message=`
  <div style="
    font-family: 'Arial', sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  ">
    <h1 style="
      color: #2c3e50;
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    ">
      📚 Welcome to Library Management System
    </h1>
    
    <div style="
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      margin: 1rem 0;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    ">
      <p style="font-size: 1.2rem; color: #34495e;">
        Explore our API endpoints:
      </p>
      
      <div style="
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
      ">
        <a href="/api/books" style="
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: #3498db;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: bold;
          transition: all 0.3s ease;
        " onmouseover="this.style.background='#2980b9'" onmouseout="this.style.background='#3498db'">
          📖 Book Collection
        </a>
        
        <a href="/api/borrow" style="
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: #2ecc71;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: bold;
          transition: all 0.3s ease;
        " onmouseover="this.style.background='#27ae60'" onmouseout="this.style.background='#2ecc71'">
          🔄 Borrow System
        </a>
      </div>
    </div>
    
    <p style="color: #7f8c8d; margin-top: 2rem;">
      Happy reading! ✨
    </p>
  </div>
`