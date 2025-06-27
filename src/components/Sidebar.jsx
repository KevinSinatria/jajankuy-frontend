import React, { useEffect, useState, useRef } from 'react';
import {
    LayoutDashboard,
    CircleUserRound,
    SquarePen,
    BarChart2,
    PersonStanding,
    PackageOpen,
    Clapperboard,
    LogOut,
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import bg from '../assets/logo3.png';

const iconMap = {
    Dashboard: <LayoutDashboard size={18} />,
    Profile: <CircleUserRound size={18} />,
    'Kelola Jajanan': <SquarePen size={18} />,
    Statistik: <BarChart2 size={18} />,
    'Kelola User': <PersonStanding size={18} />,
    Pesanan: <PackageOpen size={18} />,
    'Kelola Iklan': <Clapperboard size={18} />,
};

const navItems = [
    { id: 1, name: 'Dashboard', path: '/dashboard' },
    { id: 2, name: 'Profile', path: '/profile-admin' },
    { id: 3, name: 'Kelola Jajanan', path: '/kelola-jajanan' },
    { id: 4, name: 'Statistik', path: '/statistik' },
    { id: 5, name: 'Kelola User', path: '/kelola-user' },
    { id: 6, name: 'Pesanan', path: '/pesanan-admin' },
    { id: 6, name: 'Kelola Iklan', path: '/kelola-iklan' },
];

const ITEM_HEIGHT = 56;
const ITEM_GAP = 11;

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [activeIndex, setActiveIndex] = useState(() =>
        navItems.findIndex(item => item.path === location.pathname)
    );

    useEffect(() => {
        const index = navItems.findIndex(item => item.path === location.pathname);
        setActiveIndex(index);
    }, [location.pathname]);

    return (
        <aside className="relative w-64 min-h-screen bg-gradient-to-b bg-[#202720] pl-6 py-8 overflow-hidden">
            {/* logo */}
            <div className="text-center font-bold text-xl tracking-wide mb-10 z-10">
                <div className="py-3 rounded-lg w-20 mx-auto ml-16">
                    <img src={bg} alt="Logo Jajankuy" className="w-full object-contain" />
                </div>
            </div>

            {/* sidebar */}
            <div className="relative">
                <AnimatePresence initial={false}>
                    {activeIndex !== -1 && (
                        <motion.div
                            layoutId="activeHighlight"
                            initial={false}
                            animate={{
                                top: `${activeIndex * (ITEM_HEIGHT + ITEM_GAP)}px`,
                            }}
                            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                            className="absolute w-[240px] h-[55px] bg-white text-black rounded-l-[32px] shadow-md z-0"
                        >
                            {/* lengkungan atas */}
                            <span className="absolute top-[-50px] right-[8px] w-[33px] h-[50px] rounded-br-[200px] shadow-[15px_15px_0_15px_white] bg-transparent" />
                            {/* lengkungan bawah */}
                            <span className="absolute top-[55px] right-[8px] w-[33px] h-[50px] rounded-tr-[200px] shadow-[15px_-15px_0_15px_white] bg-transparent" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* navigasi */}
                <nav className="relative flex flex-col gap-4 text-sm text-white z-10 mt-4">
                    {navItems.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div
                                key={item.id}
                                onClick={() => navigate(item.path)}
                                className={`relative flex items-center gap-3 py-[15.5px] px-4 cursor-pointer font-semibold transition-all ${isActive
                                    ? 'text-black z-20'
                                    : 'hover:bg-white/10 rounded-lg text-white font-normal'
                                    }`}
                            >
                                {iconMap[item.name]}
                                {item.name}
                            </div>
                        );
                    })}
                </nav>

                {/* logout */}
                <div className="mt-30 pr-6">
                    <a href='#' className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full shadow cursor-pointer font-semibold w-full">
                        <LogOut className="w-6 h-6" />
                        <span>Logout</span>
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
