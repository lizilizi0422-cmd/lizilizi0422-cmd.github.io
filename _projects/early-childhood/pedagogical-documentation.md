---
# ── PROJECT · 子项目 ─────────────────────────────────────────
# Change the text in quotes. Lines starting with # are notes. 改引号里的文字；# 开头的是说明。
title: "Pedagogical Documentation for Preschool"
tagline: "Making young children’s thinking visible"          # one line, also used on cards and in the Google title · 一句话
area: "early-childhood"          # which project area this belongs to · 属于哪个作品板块
seo_title: ""          # optional · 可选：搜索标题 (blank = "Title | Tagline | Ziqi Li")
seo_description: ""    # optional · 可选：一句话简介 (blank = site description)
part: "Part A"                 # small label above the title (optional) · 标题上方的小标签（可选）
summary: "Summary copy goes here. One or two sentences shown on the project card."
order: 1
status: placeholder        # delete this line when the page is finished (hides it from Google until then) · 写完后删除
cover: ""                  # card + top image (empty = grey placeholder) · 封面图（空着=灰色占位框）
cover_alt: ""
cover_caption: ""
photos_folder: "/images/early-childhood/pedagogical-documentation/"   # every photo uploaded here appears at the bottom · 上传到这里的照片自动显示在页面底部
role: "Your role"
context: "School / course"
timeline: "Year"
users: "Age group"

# ── PAGE BLOCKS · 页面模块 ───────────────────────────────────
# The page is built from these blocks, top to bottom. In Pages CMS you can add, delete,
# drag to reorder, or change each block's layout ("type"). See EDITING.md.
# 页面由下面的模块从上到下组成。在 Pages CMS 里可以新增、删除、拖动排序、换版式。
# image: "" = grey placeholder box until you choose a photo · 空着 = 灰色占位框
blocks:
  - type: hero               # centered title (blank title = page title, blank text = tagline) · 居中大标题
    kicker: ""
    title: ""
    text: ""
    image: ""
    image_alt: ""
    caption: ""
  - type: text               # heading left, text right · 左标题右正文
    kicker: "01"
    title: "The question"
    body: "Body copy goes here. In two or three sentences, describe the question this project set out to explore and why it matters for the children you designed for."
    align: left
  - type: media_right        # text left, image right · 左文右图
    kicker: "02"
    title: "Context & research"
    body: "Body copy goes here. Who you worked with, where it happened, and what you observed, heard or read before designing."
    image: ""
    image_alt: ""
    caption: "Caption goes here"
    image_shape: portrait
    doodle: none
    button_label: ""
    button_link: ""
  - type: images_2           # two staggered images · 两张错落的图
    kicker: ""
    title: ""
    images:
      - image: ""
        alt: ""
        caption: "Caption goes here"
      - image: ""
        alt: ""
        caption: "Caption goes here"
  - type: text
    kicker: "03"
    title: "Theory & frameworks"
    body: "Body copy goes here. The theories and readings behind your design, in your own words, with one line on why each one mattered."
    align: center
  - type: theory             # theory → design decision rows · 理论 → 设计决策
    kicker: "04"
    title: "Theory → design decisions"
    intro: ""
    rows:
      - principle: "Theory or principle (source)"
        observed: "What you observed with children or users."
        decision: "The design decision it led to."
      - principle: "Theory or principle (source)"
        observed: "What you observed with children or users."
        decision: "The design decision it led to."
      - principle: "Theory or principle (source)"
        observed: "What you observed with children or users."
        decision: "The design decision it led to."
  - type: media_left         # image left, text right · 左图右文
    kicker: "05"
    title: "Design process"
    body: "Body copy goes here. Sketches, prototypes and tests: what you tried first, what you learned, and what you changed after each round."
    image: ""
    image_alt: ""
    caption: "Caption goes here"
    image_shape: landscape
    doodle: pencil
    button_label: ""
    button_link: ""
  - type: images_3           # three staggered images · 三张错落的图
    kicker: ""
    title: ""
    images:
      - image: ""
        alt: ""
        caption: "Caption goes here"
      - image: ""
        alt: ""
        caption: "Caption goes here"
      - image: ""
        alt: ""
        caption: "Caption goes here"
  - type: text
    kicker: "06"
    title: "Solution"
    body: "Body copy goes here. The final design in two or three sentences: what it is, who uses it, and how it works."
    align: center
  - type: image_full         # full-width image · 通栏大图
    image: ""
    image_alt: ""
    caption: "Caption goes here"
  - type: quote
    quote: "Pull quote goes here. One sentence a child, teacher or user said that stayed with you."
    source: "Name, role"
  - type: text
    kicker: "07"
    title: "What I learned"
    body: "Body copy goes here. Three to five honest takeaways, and what you would test or change next."
    align: left
---
