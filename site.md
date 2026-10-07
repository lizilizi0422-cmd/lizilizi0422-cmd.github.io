---
# ═══════════════════════════════════════════════════════════════
#  SITE SETTINGS + HOME PAGE · 网站设置 + 首页内容
#  Edit the text after each colon. Keep the quotes "…".
#  只改冒号后面引号里的文字，引号要保留。
#  Lines starting with # are notes — they never show on the site.
#  以 # 开头的是说明，不会显示在网站上。
# ═══════════════════════════════════════════════════════════════
layout: settings
permalink: /site-settings/
sitemap: false

# ── Who you are · 你是谁 ──────────────────────────────────────
my_name: "Ziqi Li"
roles:                      # shown under your name · 显示在名字下面
  - "Art & Learning Educator"
  - "UX Designer"
  - "Product Designer"
  - "Toy Designer"
email: "your.email@example.com"          # TODO: your real email · 换成你的邮箱
linkedin: "https://www.linkedin.com/in/ziqi-li-1b1b33351/"
instagram: ""                             # optional · 可留空
cv_file: ""                               # e.g. "/images/site/Ziqi-Li-CV.pdf" — upload the PDF first · 先上传 PDF 再填
location: ""                              # optional, e.g. "Cambridge, MA" · 可留空

# ── Search engines & sharing · 搜索与分享 ─────────────────────
seo_title: "Ziqi Li | Learning, UX & Toy Designer · Harvard GSE · RISD"
seo_description: "Ziqi Li (Harvard GSE, RISD) is a UX and toy designer for children's learning and development, building play-based tools and AI products grounded in learning theory and early childhood art education."
keywords: "learning experience design, UX design for education, AI chatbot for bilingual students, educational toy design, art education, early childhood art education, inquiry-based learning"
og_image: "/images/site/share-image.jpg"   # picture shown when the link is shared · 分享链接时显示的图
job_title: "UX & Toy Designer for Children's Learning and Development"
alumni_of:
  - "Harvard Graduate School of Education"
  - "Rhode Island School of Design"

# ═══ HOME PAGE · 首页（从上到下的顺序）══════════════════════════

# (1) Short intro · 简短介绍
hero_tag: ""              # small label above your name (optional) · 名字上方的小标签（可留空）
hero_question: "What if the tools children learn with were designed around how they *actually play and think*?"   # words between *stars* get a hand-drawn underline · 星号中间的词会有手绘下划线
intro: "I’m an art & learning educator and designer. I create learning experiences, play spaces, toys, and AI tools for young learners — starting from how children think, play, and feel."


# (2) Education (kept small) · 教育背景（小字）
education:
  - school: "Harvard Graduate School of Education"
    program: ""                     # optional, e.g. your degree · 可填学位
  - school: "Rhode Island School of Design"
    program: "Industrial Design"
  - school: "Brown University"
    program: "Coursework in education"

# (3) Research directions — clickable cards · 研究方向卡片（可点击）
#     link = where the card goes; projects = extra small links under it.
#     link 是整张卡片跳转的地方；projects 是卡片下面的小链接。
directions_title: "Research directions"
directions_kicker: "What I explore"
directions_text: "Three threads run through my work. Each card opens the projects behind it."
directions:
  - title: "Art and Learning for Early Childhood"
    doodle: "block"        # little drawing: block, chestnut, kite, star, sun, heart, arch, pencil, plane, spiral · 卡片小插画
    text: "Documentation, play spaces, and open-ended materials that make young children’s thinking visible."
    image: ""             # photo for this row (empty = grey placeholder) · 这一行的图片（空着=灰色占位框）
    link: "/projects/early-childhood/"
    projects:
      - label: "Pedagogical Documentation"
        url: "/projects/early-childhood/pedagogical-documentation/"
      - label: "Play Space & Materials"
        url: "/projects/early-childhood/play-space-materials/"
  - title: "AI Project / Research"
    doodle: "chestnut"        # little drawing: block, chestnut, kite, star, sun, heart, arch, pencil, plane, spiral · 卡片小插画
    text: "Warm, bilingual AI companions that lower the pressure of learning — starting with FindMy Voice."
    image: ""
    link: "/projects/findmy-voice/"
    projects:
      - label: "FindMy Voice — AI chatbot"
        url: "/projects/findmy-voice/"
  - title: "UX / Product Design"
    doodle: "kite"        # little drawing: block, chestnut, kite, star, sun, heart, arch, pencil, plane, spiral · 卡片小插画
    text: "Accessible digital experiences and physical products, tested with the people who use them."
    image: ""
    link: "/projects/"
    projects:
      - label: "Digital Accessibility Design"
        url: "/projects/lab-practicum/digital-accessibility/"
      - label: "Toy Design"
        url: "/projects/toy-design/"

# (3½) Your own home blocks · 你自己的首页模块
#      Shown between "Research directions" and "How I work with kids". Add, delete, reorder or
#      change the layout in Pages CMS (see EDITING.md). 显示在“研究方向”和“我如何和孩子们一起工作”之间。
home_blocks:
  - type: media_left
    kicker: "In the studio"
    title: "Title copy goes here"
    body: "Body copy goes here. Two or three sentences you would like every visitor to read, for example what a day of making with children looks like."
    image: ""
    image_alt: ""
    caption: ""
    image_shape: portrait
    doodle: pencil
    button_label: ""
    button_link: ""

# (4) How I work with kids — my beliefs, where they come from, how they change my design
#     我如何和孩子们一起工作：我的信念、来源、以及它们如何改变我的设计
#     The cards themselves are files in the _beliefs/ folder (one file per card).
#     卡片本身在 _beliefs/ 文件夹里，每张卡一个文件。
kids_kicker: "My approach"
kids_title: "How I work with kids"
kids_text: "Body copy goes here. Two or three sentences on how you understand children’s learning, and how theory from your classes and labs shapes the way you design."
kids_question: "What do children already know how to do — and how can design follow it?"   # opening provocation · 开头的提问


# (5) Contact + photo gallery · 联系方式 + 照片墙
# Only post photos of children with parent/school consent, or faceless angles (backs, hands).
# 只发布获得家长/学校同意的孩子照片，或者看不到脸的角度（背影、手部）。
contact_title: "Let’s design for curious learners together."
contact_text: "I’m always happy to talk about learning, play, and design."
gallery_title: "Moments with kids"
gallery_folder: "/images/home/kids-gallery/"   # photos uploaded here appear automatically · 上传到这里的照片会自动显示
kids_gallery:                                  # optional: add a description + caption for each photo · 可选：给每张照片写描述和说明
  - image: ""            # empty = grey placeholder box · 空着 = 灰色占位框
    alt: ""
    caption: ""
  - image: ""
    alt: ""
    caption: ""
  - image: ""
    alt: ""
    caption: ""
  - image: ""
    alt: ""
    caption: ""
  - image: ""
    alt: ""
    caption: ""
  - image: ""
    alt: ""
    caption: ""

# ── Projects page · 作品页 ────────────────────────────────────
projects_title: "Projects"
projects_question: "Questions I’m following through research, making, and play."

# ── Footer · 页脚 ─────────────────────────────────────────────
footer_note: "Designing for curious learners."
---

This file only holds settings — nothing below this line is shown.
这个文件只放设置，横线下面的内容不会显示。
