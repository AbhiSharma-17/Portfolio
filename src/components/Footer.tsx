const Footer = () => {
  return (
    <footer className="border-t border-brand/20 bg-glass/50 mt-24 py-8 text-center text-sm text-gray-500 shadow-[0_-10px_20px_rgba(0,229,255,0.02)]">
      <div className="max-w-7xl mx-auto px-6">
        <p>Designed & Built by <span className="text-brand-light font-medium neon-text">Abhishek Kumar</span></p>
        <p className="mt-2">© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
