import React from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    Briefcase,
    Search,
    Settings,
    LogOut,
    ExternalLink,
    Layout
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface PortalLayoutProps {
    children: React.ReactNode;
}

const PortalLayout: React.FC<PortalLayoutProps> = ({ children }) => {
    const location = useLocation();

    const menuItems = [
        { title: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/portal' },
        { title: 'Page Section Editor', icon: <Layout size={20} />, path: '/portal/pages' },
        { title: 'Portfolio Manager', icon: <Briefcase size={20} />, path: '/portal/portfolio' },
        { title: 'SEO Specialist', icon: <Search size={20} />, path: '/portal/seo' },
        { title: 'Settings', icon: <Settings size={20} />, path: '/portal/settings' },
    ];

    return (
        <div className="flex min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-500/30">
            {/* Sidebar */}
            <aside className="w-72 bg-black/40 backdrop-blur-2xl border-r border-white/5 sticky top-0 h-screen flex flex-col p-6 overflow-hidden">
                <div className="mb-10 flex items-center gap-3 px-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center justify-center font-black text-xs">
                        BT
                    </div>
                    <span className="font-black text-xl tracking-tight">ADMIN <span className="text-blue-500">CMS</span></span>
                </div>

                <nav className="flex-grow space-y-2">
                    {menuItems.map((item) => (
                        <Link key={item.path} to={item.path}>
                            <motion.div
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 ${location.pathname === item.path
                                    ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-[0_0_30px_rgba(37,99,235,0.1)]'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                                    }`}
                            >
                                {item.icon}
                                <span className="font-semibold text-sm">{item.title}</span>
                                {location.pathname === item.path && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="ml-auto w-1.5 h-1.5 bg-blue-500 rounded-full"
                                    />
                                )}
                            </motion.div>
                        </Link>
                    ))}
                </nav>

                <div className="mt-auto pt-6 border-t border-white/5 space-y-2">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:text-white transition-colors text-sm">
                            <ExternalLink size={18} />
                            <span>Visit Website</span>
                        </div>
                    </a>
                    <div className="flex items-center gap-4 px-4 py-3 text-red-400/70 hover:text-red-400 cursor-pointer transition-colors text-sm">
                        <LogOut size={18} />
                        <span>Sign Out</span>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-10 max-w-7xl mx-auto w-full">
                {children}
            </main>
        </div>
    );
};

export default PortalLayout;
