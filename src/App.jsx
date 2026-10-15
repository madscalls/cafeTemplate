import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import Events from './pages/Events.jsx';

/** On every route change: jump to the #section in the URL, or to the top. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return; }
    requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
