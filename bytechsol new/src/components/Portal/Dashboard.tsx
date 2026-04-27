import React from 'react';
import { motion } from 'framer-motion';
import {
    Eye,
    Activity,
    Clock,
    ArrowUpRight,
    Sparkles
} from 'lucide-react';

const Dashboard: React.FC = () => {
    const stats = [
        { label: 'Total Portfolio', value: '18', icon: <Activity className="text-blue-500" /> },
        { label: 'SEO Health', value: '92%', icon: <Sparkles className="text-yellow-500" /> },
        { label: 'Pending Edits', value: '3', icon: <Clock className="text-purple-500" /> },
        { label: 'Site Visits', value: '1.2k', icon: <Eye className="text-green-500" /> },
    ];

    return (
        <div className="space-y-10">
            <header>
                <h1 className="text-4xl font-black mb-2 tracking-tight">System <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">Overview</span></h1>
                <p className="text-slate-400 text-sm">Welcome back. Everything is running smoothly across the data layer.</p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/[0.03] border border-white/5 rounded-3xl p-6 hover:bg-white/[0.05] transition-all group"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-black/40 rounded-2xl group-hover:scale-110 transition-transform">
                                {stat.icon}
                            </div>
                            <ArrowUpRight size={18} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
                        </div>
                        <div className="text-3xl font-black mb-1">{stat.value}</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity placeholder */}
                <div className="lg:col-span-2 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <Activity size={20} className="text-blue-500" />
                        Recent Data Updates
                    </h2>
                    <div className="space-y-6">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex items-center gap-4 group">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                                <div className="flex-grow border-b border-white/5 pb-4">
                                    <div className="text-sm font-semibold mb-1">Portfolio Item 'Bellroy' updated</div>
                                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">2 hours ago • By Admin</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SEO Tip */}
                <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden flex flex-col justify-end min-h-[300px]">
                    <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-10 -translate-y-10">
                        <Sparkles size={160} />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-black mb-4 leading-tight">Optimize for Peak Rankings.</h3>
                        <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                            Updating your Meta Descriptions and OG Images can increase your click-through rate by up to 30%.
                        </p>
                        <button className="w-full py-4 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                            Launch SEO specialist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
