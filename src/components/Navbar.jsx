import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Heart } from 'lucide-react';
import logo from '../assets/logo.png';
import typ from '../assets/typography.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isAuthenticated = false;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  const closeNavbar = () => {
    setOpen(false);
  };

  const navItems = [
    { id: 1, name: 'Beranda', path: '/' },
    { id: 2, name: 'Tentang', path: '/about' },
    { id: 3, name: 'Pesanan', path: '/checkout' },
    { id: 4, name: 'Riwayat', path: '/history' },
  ];

  return (
    <header
      className={`fixed top-0 lg:top-4 left-1/2 -translate-x-1/2 w-full max-w-7xl z-[999] backdrop-blur-md transition-all duration-300 shadow-md lg:border lg:border-black lg:rounded-full px-6 py-3' : 'bg-transparent py-4'`}>
      <div className="w-full lg:grid lg:grid-cols-3 lg:items-center">

        {/* logo */}
        <Link to="/" className="flex items-center whitespace-nowrap font-black" onClick={closeNavbar}>
          <span className="ml-2 mt-2">
            <img src={logo} alt="JajanKuy Logo" style={{ width: '40px' }} />
          </span>
          <span className="ml-2 mt-2">
            <img src={typ} alt="JajanKuy Logo" style={{ width: '120px' }} />
          </span>
        </Link>

        {/* searchbar
        <div className="hidden lg:flex justify-center lg:col-span-2">
          <div className="relative w-90 px-4">
            <input
              type="text"
              placeholder="Cari..."
              className="w-full px-4 py-2 pr-10 border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-100"
            />
            <Search
              className="absolute right-7 top-1/2 -translate-y-1/2 text-black"
              size={20}
            />
          </div>
        </div> */}

        {/* logo burger */}
        <label
          className="hamburger absolute top-4 right-10 cursor-pointer lg:hidden"
          htmlFor="navbar-toggle"
          aria-label="Toggle navigation"
        >
          <input
            type="checkbox"
            id="navbar-toggle"
            checked={open}
            onChange={toggleNavbar}
            className="hidden"
          />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            />
            <path className="line" d="M7 16 27 16" />
          </svg>
        </label>

        {/* navigasi */}
        <nav
          aria-label="Header Navigation"
          className={`${open ? 'pt-4 max-h-96' : 'max-h-0'
            } flex w-full flex-col items-center overflow-hidden transition-all duration-300 lg:col-start-4 lg:max-h-full lg:flex-row lg:justify-end`}
        >
          <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:space-y-0 lg:justify-end">
            {/* keranjang dan wishlist layar desktop */}
            <li className="hidden lg:flex lg:mr-6">
              <Link to="/keranjang" className="flex items-center" onClick={closeNavbar}>
                <ShoppingCart className="text-black" size={20} />
              </Link>
            </li>
            <li className="hidden lg:flex lg:mr-6">
              <Link to="/favorite" className="flex items-center" onClick={closeNavbar}>
                <Heart className="text-black" size={20} />
              </Link>
            </li>

            {/* navigasi utama */}
            {navItems.map((item) => (
              <li key={item.id} className="lg:mr-12 text-black">
                <Link
                  to={item.path}
                  className={`transition ${location.pathname === item.path ? '' : ''}`}
                  onClick={closeNavbar}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <hr className="mt-3 w-full lg:hidden" />

          <div className="my-0 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-3 lg:space-y-0">
            {/* icon keranjang dan wishlist layar mobile */}
            <div className="flex lg:hidden space-x-7 mt-3">
              <Link to="/keranjang" onClick={closeNavbar}>
                <ShoppingCart className="text-black" size={20} />
              </Link>
              <Link to="/favorite" onClick={closeNavbar}>
                <Heart className="text-black" size={20} />
              </Link>
            </div>

            {/* login dan profile */}
            {isAuthenticated ? (
              <Link
                to="/profile"
                className="flex items-center rounded-full bg-[#1eff00] hover:bg-[#5dcd6c] px-5 py-3 font-medium text-white transition-all duration-200"
                onClick={closeNavbar}
              >
                <ion-icon name="person-circle-outline" className="text-xl mr-2"></ion-icon>
                Profile
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex items-center whitespace-nowrap mt-0.5 lg:mt-0 text-black"
                onClick={closeNavbar}
              >
                Masuk
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
