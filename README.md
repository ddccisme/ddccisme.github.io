# 董掌柜的杂货铺 🏮

> 每天打烊前，往货架上添一件新货。

大数据 & AI 售前工程师的技术博客。开张于 2016（Hexo 时代），歇业十年，
2026 年 10 月用 [Astro](https://astro.build/) 重新开张。

**在线地址**：<https://ddccisme.github.io>

## 每日更新工作流

```sh
# 1. 复制模板开写（文件名 = 日期 + 主题 slug）
cp src/content/blog/_daily-template.md src/content/blog/2026-10-26-你的主题.md

# 2. 编辑文章（frontmatter 改标题/日期/标签）

# 3. 本地预览
npm run dev

# 4. 发布 = push 即部署（GitHub Actions 自动构建上线）
git add . && git commit -m "post: 2026-10-26 你的主题" && git push
```

## 文章标签分区

| 标签 | 内容 |
| ---- | ---- |
| 大数据 | 数仓、湖仓一体、分布式数据库、OLAP |
| AI工程 | 大模型、LLMOps、RAG、AI 落地 |
| 售前手艺 | 方案设计、POC、客户沟通 |
| 工具杂货 | 效率工具、脚本、踩坑 |
| 随笔 | 博客本身和非技术内容 |

## 项目结构

```text
├── .github/workflows/deploy.yml   # GitHub Pages 自动部署
├── public/                        # 静态资源（favicon 等）
├── src/
│   ├── assets/                    # 图片等资源
│   ├── components/                # Header / Footer 等
│   ├── content/blog/              # 📝 所有文章（每日更新就在这）
│   │   └── _daily-template.md     # 每日写作模板（不会被构建）
│   ├── layouts/BlogPost.astro     # 文章页布局
│   ├── pages/                     # 首页 / 文章列表 / 关于 / RSS
│   └── consts.ts                  # 站点名与描述
└── astro.config.mjs               # Astro 配置
```

## 常用命令

| 命令 | 说明 |
| ---- | ---- |
| `npm run dev` | 本地开发（localhost:4321） |
| `npm run build` | 构建产物到 `./dist/` |
| `npm run preview` | 本地预览构建结果 |

## 历史

- **2016-07**：Hexo + GitHub Pages 开张，发了一篇 Hello World
- **2016-07 ~ 2026-10**：歇业 😅
- **2026-10-25**：Astro 重建，规矩改为每日更新
- 老站存档见仓库 `old-site-backup/`（本地）或 GitHub 历史提交
