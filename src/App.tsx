// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const App: React.FC = () => {
  // Inline Home Component
  const Home = () => {
    return (
      <div>
        <h1>Home Page</h1>
        <p>Welcome to the Home Page!</p>
        <a href="/about">Go to About Page</a>
      </div>
    );
  };

  // Inline About Component
  const About = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    const handleRedirect = () => {
      navigate('/'); // Redirects to Home
    };

    return (
      <div>
        <h1>About Page</h1>
        <p>This is the About Page!</p>
        <button onClick={handleRedirect}>Go back to Home</button>
      </div>
    );
  };

  // Inline NotFound Component
  const NotFound = () => {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
      </Routes>
    </Router>
  );
};

export default App;
