import re
import sys

file_path = r"e:\Bytechsol\bytechsol-new\bytechsol new\src\shareable\WorldMap.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Remove the previously added badge
badge_pattern = r'<div className="d-flex justify-content-center mt-5 mb-2".*?</div>\s*</div>'
content = re.sub(badge_pattern, '', content, flags=re.DOTALL)

# 2. Modify the Marker foreignObject
marker_pattern = r'<foreignObject width=\{80\} height=\{50\} x=\{-40\} y=\{-60\}>\s*<div\s*className="d-flex flex-column align-items-center text-center"\s*style=\{\{(.*?)\}\}\s*>\s*<img\s*src=\{marker\.flag\}\s*alt=\{\`\$\{marker\.name\} Flag\`\}\s*className="img-fluid"\s*style=\{\{ width: "24px", height: "24px" \}\}\s*\/>\s*<span>\{marker\.name\}<\/span>\s*<\/div>\s*<\/foreignObject>'

def marker_replace(match):
    style_content = match.group(1)
    return f'''<foreignObject width={{200}} height={{120}} x={{-100}} y={{-80}} style={{overflow: 'visible'}}>
                    <a
                      href={{marker.name === "USA" ? "https://www.google.com/maps/search/?api=1&query=30+N+Gould+St+Ste+R,+Sheridan,+WY+82801" : "#"}}
                      target={{marker.name === "USA" ? "_blank" : "_self"}}
                      rel="noopener noreferrer"
                      className="group relative d-flex flex-column align-items-center text-center text-decoration-none"
                      style={{{{
                        {style_content},
                        cursor: marker.name === "USA" ? "pointer" : "default",
                        marginTop: "20px"
                      }}}}
                    >
                      <img
                        src={{marker.flag}}
                        alt={{`${{marker.name}} Flag`}}
                        className="img-fluid"
                        style={{{{ width: "24px", height: "24px" }}}}
                      />
                      <span>{{marker.name}}</span>

                      {{marker.name === "USA" && (
                        <div className="absolute bottom-full mb-2 w-max max-w-[200px] p-2 bg-slate-900 text-white text-xs text-center font-medium rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                          30 N Gould St Ste R,<br/>Sheridan, WY 82801
                          <div className="absolute left-1/2 top-full w-2 h-2 bg-slate-900 transform rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                      )}}
                    </a>
                  </foreignObject>'''

new_content = re.sub(marker_pattern, marker_replace, content)

if new_content == content:
    print("No changes made. Pattern not found.")
    sys.exit(1)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Replaced successfully")
