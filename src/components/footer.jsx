import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-stone-800 text-white text-center p-3">
      <p>&copy; {new Date().getFullYear()} Sedenio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
