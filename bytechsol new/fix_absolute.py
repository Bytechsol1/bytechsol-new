import re
import sys

file_path = r"e:\Bytechsol\bytechsol-new\bytechsol new\src\components\Portfolio\PortfolioPage.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

pattern = r'<div className="flex items-center justify-between gap-4">\s*<div className="flex-1 min-w-0">\s*<h3 className="(.*?)">\s*(.*?)\s*<\/h3>\s*<p className="(.*?)">\s*(.*?)\s*<\/p>\s*<\/div>\s*<div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full border border-slate-200 flex items-center justify-center text-black group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">\s*<svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">\s*<path strokeLinecap="round" strokeLinejoin="round" strokeWidth=\{\{?2\}\}? d="M5 12h14M12 5l7 7-7 7" \/>\s*<\/svg>\s*<\/div>\s*<\/div>'

def repl(match):
    h3_class = match.group(1).replace("pr-16", "").strip() + " pr-14"
    title = match.group(2)
    p_class = match.group(3).replace("pr-16", "").strip() + " pr-14"
    desc = match.group(4)
    
    return f'''<div className="relative w-full">
                                <div>
                                    <h3 className="{h3_class}">
                                        {title}
                                    </h3>
                                    <p className="{p_class}">
                                        {desc}
                                    </p>
                                </div>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full border border-slate-200 flex items-center justify-center text-black group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={{2}} d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>'''

new_content = re.sub(pattern, repl, content)

if new_content == content:
    print("No changes made. Pattern not found.")
    sys.exit(1)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Replaced successfully")
