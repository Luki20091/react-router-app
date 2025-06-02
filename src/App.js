import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, Navigate } from 'react-router-dom';

// Komponenty stron
const Home = () => <h2>Strona główna</h2>;
const About = () => <h2>O nas</h2>;
const Contact = () => <h2>Kontakt</h2>;

const User = () => {
  const { name } = useParams();
  return <h2>Witaj, {name}!</h2>;
};

const NotFound = () => <h2>404 – Nie znaleziono strony</h2>;

// Komponent nawigacji
const Navigation = () => (
  <nav style={{ marginBottom: '20px' }}>
    <Link to="/" style={{ marginRight: 10 }}>Home</Link>
    <Link to="/about" style={{ marginRight: 10 }}>About</Link>
    <Link to="/contact" style={{ marginRight: 10 }}>Contact</Link>
    <Link to="/user/Janek" style={{ marginRight: 10 }}>User Janek</Link>
  </nav>
);

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="*" element={<NotFound />} /> {/* catch-all */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
