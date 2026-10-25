import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// 加载 `src/content/blog/` 目录下的 Markdown 和 MDX 文章
	// 以 `_` 开头的文件（如 _daily-template.md）是写作模板，不会被构建
	loader: glob({ base: './src/content/blog', pattern: ['**/*.{md,mdx}', '!**/_*.{md,mdx}'] }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// 知识分类标签，如：大数据 / AI工程 / 售前手艺 / 工具杂货 / 随笔
			tags: z.array(z.string()).default([]),
		}),
});

export const collections = { blog };
