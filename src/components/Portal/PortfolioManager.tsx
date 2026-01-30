import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FileEdit,
    Trash2,
    Plus
} from 'lucide-react';

const PortfolioManager: React.FC = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/cms/portfolio')
            .then(res => res.json())
            .then(data => {
                setProjects(data.portfolio || []);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.05 }
        })
    };

    return (
        <div className="space-y-8">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black mb-2">Portfolio Manager</h1>
                    <p className="text-slate-400 text-sm">Manage your showcase items, case studies, and categories.</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] active:scale-95">
                    <Plus size={20} />
                    New Project
                </button>
            </header>

            {loading ? (
                <div className="h-64 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-blue-600/30 border-t-blue-600 rounded-full animate-spin" />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                            className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 group hover:border-blue-500/30 transition-all duration-500"
                        >
                            <div className="flex gap-6">
                                <div className="w-32 h-20 rounded-xl overflow-hidden bg-slate-900 border border-white/5 shrink-0">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="font-bold text-lg leading-tight truncate">{project.title}</h3>
                                            <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">{project.category}</span>
                                        </div>
                                        <div className="flex items-center gap-1 opacity-10 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors">
                                                <FileEdit size={16} />
                                            </button>
                                            <button className="p-2 hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-400 transition-colors">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-xs line-clamp-2 mb-3 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags?.slice(0, 3).map((tag: string) => (
                                            <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[9px] font-medium text-slate-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PortfolioManager;
