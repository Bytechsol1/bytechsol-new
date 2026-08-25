import re
import sys
import os

file_path = r"e:\Bytechsol\bytechsol-new\bytechsol new\src\components\Portfolio\PortfolioPage.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

pattern = r'<div className="w-12 h-12 shrink-0 rounded-full border border-slate-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">\s*<svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">\s*<path strokeLinecap="round" strokeLinejoin="round" strokeWidth=\{2\} d="M5 12h14M12 5l7 7-7 7" \/>\s*<\/svg>\s*<\/div>'

replacement = r'''<div className="w-12 h-12 shrink-0 rounded-full bg-[#002244] text-white flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 delay-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>'''

new_content = re.sub(pattern, replacement, content)

if new_content == content:
    print("No changes made. Pattern not found.")
    sys.exit(1)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Replaced successfully.")
