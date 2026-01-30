import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Save, ChevronDown, ChevronRight, Layout, Type, Image as ImageIcon, List } from "lucide-react";
import { useTheme } from "../Portfolio/ThemeContext";

export default function PageEditor() {
    const { theme } = useTheme(); // Use theme context if available or default
    const [data, setData] = useState<any>(null);
    const [selectedPage, setSelectedPage] = useState<string>("home");
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    useEffect(() => {
        fetch("/api/cms/site")
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const handleSave = async () => {
        setSaving(true);
        try {
            await fetch("/api/cms/site", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            setMessage({ type: 'success', text: 'Changes saved successfully!' });
            setTimeout(() => setMessage(null), 3000);
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to save changes.' });
        } finally {
            setSaving(false);
        }
    };

    const updateField = (sectionId: string, fieldKey: string, value: any) => {
        const newData = { ...data };
        const sectionIndex = newData.pages[selectedPage].sections.findIndex((s: any) => s.id === sectionId);
        if (sectionIndex !== -1) {
            newData.pages[selectedPage].sections[sectionIndex].content[fieldKey] = value;
            setData(newData);
        }
    };

    if (loading) return <div className="p-10 text-center text-slate-400">Loading editor...</div>;

    const pageKeys = Object.keys(data?.pages || {});
    const activePageData = data?.pages[selectedPage];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-white tracking-tight">Page Editor</h1>
                    <p className="text-slate-400 mt-2">Manage content for every section of your website.</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-2 px-6 py-3 bg-[#289ed8] hover:bg-[#289ed8]/90 text-white rounded-xl font-bold transition-all disabled:opacity-50"
                >
                    <Save size={18} />
                    {saving ? "Saving..." : "Save Changes"}
                </button>
            </div>

            {message && (
                <div className={`p-4 rounded-xl ${message.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                    {message.text}
                </div>
            )}

            {/* Main Grid */}
            <div className="grid grid-cols-12 gap-8">

                {/* Sidebar: Page Selector */}
                <div className="col-span-3 space-y-2">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 px-2">Select Page</h3>
                    {pageKeys.map(key => (
                        <button
                            key={key}
                            onClick={() => {
                                setSelectedPage(key);
                                setExpandedSection(null);
                            }}
                            className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium flex items-center justify-between ${selectedPage === key
                                    ? 'bg-[#289ed8]/10 text-[#289ed8] border border-[#289ed8]/30'
                                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <span className="capitalize">{data.pages[key].label || key}</span>
                            {selectedPage === key && <ChevronRight size={16} />}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="col-span-9 space-y-6">
                    <div className="bg-[#0f172a]/50 border border-white/5 rounded-3xl p-8 backdrop-blur-xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                                <Layout size={24} className="text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white capitalize">{activePageData?.label}</h2>
                                <span className="text-xs font-mono text-slate-500">ID: {selectedPage}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {activePageData?.sections?.map((section: any) => (
                                <div key={section.id} className="border border-white/10 rounded-2xl overflow-hidden bg-[#0d121f]">
                                    <button
                                        onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                                        className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors"
                                    >
                                        <span className="font-bold text-white flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${expandedSection === section.id ? 'bg-[#289ed8]' : 'bg-slate-600'}`} />
                                            {section.label}
                                        </span>
                                        <ChevronDown size={18} className={`text-slate-400 transition-transform ${expandedSection === section.id ? 'rotate-180' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {expandedSection === section.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="border-t border-white/10"
                                            >
                                                <div className="p-6 space-y-6">
                                                    {Object.entries(section.content).map(([key, value]) => (
                                                        <div key={key} className="space-y-2">
                                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                                                {key.toLowerCase().includes('image') ? <ImageIcon size={12} /> :
                                                                    Array.isArray(value) ? <List size={12} /> : <Type size={12} />}
                                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                                            </label>

                                                            {Array.isArray(value) ? (
                                                                <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                                                                    <p className="text-sm text-slate-500 italic mb-2">List editing coming soon for generic arrays. Edit directly in JSON for now.</p>
                                                                    <pre className="text-xs text-slate-600 overflow-x-auto">{JSON.stringify(value, null, 2)}</pre>
                                                                </div>
                                                            ) : key.toLowerCase().includes('description') || key.toLowerCase().includes('paragraph') ? (
                                                                <textarea
                                                                    value={value as string}
                                                                    onChange={(e) => updateField(section.id, key, e.target.value)}
                                                                    className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-slate-300 focus:border-[#289ed8] focus:outline-none transition-colors min-h-[100px]"
                                                                />
                                                            ) : (
                                                                <input
                                                                    type="text"
                                                                    value={value as string}
                                                                    onChange={(e) => updateField(section.id, key, e.target.value)}
                                                                    className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-slate-300 focus:border-[#289ed8] focus:outline-none transition-colors"
                                                                />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
