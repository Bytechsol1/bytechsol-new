import { useState, useEffect } from 'react';
import {
    Save,
    Globe,
    CheckCircle2
} from 'lucide-react';

const SEOManager: React.FC = () => {
    const [seoData, setSeoData] = useState<any>(null);
    const [activeRoute, setActiveRoute] = useState('/');
    const [saving, setSaving] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        fetch('/api/cms/seo')
            .then(res => res.json())
            .then(data => setSeoData(data))
            .catch(err => console.error(err));
    }, []);

    const handleSave = () => {
        setSaving(true);
        fetch('/api/cms/seo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(seoData)
        })
            .then(() => {
                setStatus('success');
                setTimeout(() => setStatus('idle'), 3000);
            })
            .catch(() => setStatus('error'))
            .finally(() => setSaving(false));
    };

    const currentSEO = seoData?.routes?.[activeRoute];

    const updateField = (field: string, value: string) => {
        const newData = { ...seoData };
        newData.routes[activeRoute][field] = value;
        setSeoData(newData);
    };

    if (!seoData) return (
        <div className="h-64 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-600/30 border-t-blue-600 rounded-full animate-spin" />
        </div>
    );

    return (
        <div className="space-y-8">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black mb-2">SEO Specialist</h1>
                    <p className="text-slate-400 text-sm">Manage metadata, social tags, and heading hierarchy for every route.</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all shadow-xl active:scale-95 ${status === 'success' ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-500 transition-colors'
                        }`}
                >
                    {saving ? 'Saving...' : status === 'success' ? <><CheckCircle2 size={20} /> Saved</> : <><Save size={20} /> Save Changes</>}
                </button>
            </header>

            <div className="grid grid-cols-12 gap-8">
                {/* Route Selector */}
                <div className="col-span-3 space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-black px-4">Select Route</label>
                    {Object.keys(seoData.routes).map(route => (
                        <button
                            key={route}  
                            onClick={() => setActiveRoute(route)}
                            className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm font-semibold ${activeRoute === route
                                ? 'bg-blue-600/10 border-blue-500/30 text-blue-400'
                                : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10'
                                }`}
                        >
                            {route}
                        </button>
                    ))}
                </div>

                {/* Editor */}
                <div className="col-span-9 space-y-6 bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-300">Meta Title</label>
                            <input
                                value={currentSEO?.title || ''}
                                onChange={e => updateField('title', e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 transition-colors outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-300">Keywords (Comma separated)</label>
                            <input
                                value={currentSEO?.keywords || ''}
                                onChange={e => updateField('keywords', e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 transition-colors outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300">Meta Description</label>
                        <textarea
                            rows={3}
                            value={currentSEO?.description || ''}
                            onChange={e => updateField('description', e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 transition-colors outline-none resize-none"
                        />
                    </div>

                    <hr className="border-white/5" />

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-300 underline decoration-blue-500">H1 Tag Override</label>
                            <input
                                value={currentSEO?.h1 || ''}
                                onChange={e => updateField('h1', e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 transition-colors outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-300">OG Image URL</label>
                            <input
                                value={currentSEO?.ogImage || ''}
                                onChange={e => updateField('ogImage', e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 transition-colors outline-none"
                            />
                        </div>
                    </div>

                    {/* Preview Placeholder */}
                    <div className="mt-8 bg-black/60 rounded-2xl p-6 border border-white/5">
                        <div className="flex items-center gap-3 mb-4">
                            <Globe size={16} className="text-blue-500" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Google Preview</span>
                        </div>
                        <div className="space-y-1">
                            <div className="text-blue-400 text-lg font-medium hover:underline cursor-pointer truncate">
                                {currentSEO?.title || 'Loading...'}
                            </div>
                            <div className="text-green-600 text-xs mb-1">
                                https://bytechsol.com{activeRoute}
                            </div>
                            <div className="text-slate-400 text-xs leading-relaxed max-w-2xl">
                                {currentSEO?.description || 'Please provide a description for better search engine ranking...'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SEOManager;
