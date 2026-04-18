import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Preloader from './components/Preloader';
import HomeWrapper from './components/HomeWrapper';
import PropertiesPage from './components/sub-pages/properties/PropertiesPage';
import PropertyDetails from './components/sub-pages/properties/PropertyDetails';
import Gallery from './components/sub-pages/gallery/Gallery';
import About from './components/sub-pages/about/About';
import Blogs from './components/sub-pages/blogs/Blogs';
import BlogDetails from './components/sub-pages/blogs/BlogDetails';
import Contact from './components/sub-pages/contact/Contact';
import ArkCrypto from './components/sub-pages/ark-coin/ArkCrypto';
import ArkOS from './components/sub-pages/ark-os/ArkOS';

function App() {
  const [isLoading, setIsLoading] = React.useState(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    return !hasVisited;
  });

  React.useEffect(() => {
    if (isLoading) {
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, [isLoading]);

  const handleAnimationComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="mobile-col mobile-height-auto" style={{ display: 'flex', width: '100%', height: '100vh', backgroundColor: '#000', overflow: 'hidden' }}>
      {isLoading && <Preloader onComplete={handleAnimationComplete} />}
      {!isLoading && (
        <>
          <Sidebar />
          <div className="mobile-width-full mobile-height-auto" style={{ flex: 1, height: '100%', overflow: 'hidden' }}>
            <Routes>
              <Route path="/" element={<HomeWrapper />} />
              <Route path="/properties" element={<PropertiesPage />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ark-crypto" element={<ArkCrypto />} />
              <Route path="/ark-os" element={<ArkOS />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
