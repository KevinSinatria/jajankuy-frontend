import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import logo from '../assets/jajankuylogo.png';

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
        { id: 2, name: 'Pesanan', path: '/pesanan' },
        { id: 3, name: 'History', path: '/history' },
    ];

    return (
        <header
            className={`fixed mx-auto w-full flex flex-col overflow-hidden px-8 py-4 z-50 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md' : 'bg-transparent'
                }`}
        >
            <div className="w-full lg:grid lg:grid-cols-3 lg:items-center">
                {/* logo Jajankuy */}
                <Link to="/" className="flex items-center whitespace-nowrap font-black" onClick={closeNavbar}>
                    <span className="mr-2 w-28">
                        <img src={logo} alt="JajanKuy Logo" style={{ width: '90px' }} />
                    </span>
                </Link>

                {/* searchbar */}
                <div className="hidden lg:flex justify-center">
                    <div className="relative w-80">
                        <input
                            type="text"
                            placeholder="Cari..."
                            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-100"
                        />
                        <Search
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            size={20}
                        />
                    </div>
                </div>

                {/* logo burger */}
                <label className='hamburger absolute top-10 right-10 cursor-pointer lg:hidden' id='navbar-open' onChange={toggleNavbar} checked={open} aria-label="Toggle navigation">
                    <input type="checkbox" />
                    <svg viewBox="0 0 32 32">
                        <path
                            class="line line-top-bottom"
                            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                        ></path>
                        <path class="line" d="M7 16 27 16"></path>
                    </svg>
                </label>


                {/* navigasi */}
                <nav
                    aria-label="Header Navigation"
                    className={`${open ? 'pt-8 max-h-96' : 'max-h-0'
                        } flex w-full flex-col items-center overflow-hidden transition-all duration-300 lg:col-start-3 lg:max-h-full lg:flex-row lg:justify-end`}
                >
                    <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:space-y-0 lg:justify-end">
                        {navItems.map((item) => (
                            <li key={item.id} className="lg:mr-12">
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
                        {isAuthenticated ? (
                            <Link
                                to="/profile"
                                className="flex items-center rounded-full bg-[#4A4843] hover:bg-[#2F2E2B] px-5 py-3 font-medium text-white transition-all duration-200"
                                onClick={closeNavbar}
                            >
                                <ion-icon name="person-circle-outline" className="text-xl mr-2"></ion-icon>
                                Profile
                            </Link>
                        ) : (
                            <Link
                                to="/login"
                                className="flex items-center whitespace-nowrap mt-2 lg:mt-0"
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
