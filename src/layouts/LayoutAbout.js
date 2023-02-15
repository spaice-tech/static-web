import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LayoutAbout = ({ children }) => (
  <>
    <div class="stars1"></div>
    <div class="stars2"></div>
    <Header navPosition="center" className="reveal-from-bottom" hideSignin={true} hideAbout={true} />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutAbout;  