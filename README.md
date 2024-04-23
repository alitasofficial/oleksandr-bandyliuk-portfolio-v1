# Oleksandr Bandyliuk Portfolio Project

Features:

- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of this project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm install` | Installs dependencies                        |
| `pnpm dev`     | Starts local dev server at `localhost:4321`  |
| `pnpm build`   | Build your production site to `./dist/`      |
| `pnpm preview` | Preview your build locally, before deploying |


## Project Constants

The `src/constants.ts` file contains website constants of related pages or components.

```text
SITE_TITLE - Website title
SITE_DESCRIPTION - Website description
SITE_URL - Website URL
SITE_AUTHOR - Website author
FAVICON - Website favicon
MENU_ITEMS - Website menu items
SOCIAL_LINKS - Website social links
INTRO_SETTINGS - Intro section settings
THINGS_SETTINGS - Things section settings
MEDIA_SETTINGS - Media section settings
ARCHIVED_SETTINGS - Archived section settings
SELECTED_ARTICLES_SETTINGS - Selected articles section settings
VISITED_COUNTRIES_SETTINGS - Visited countries section settings
FAVORITES_SETTINGS - Favorites section settings
DAILY_SETTINGS - Daily section settings
TAGS - Tags (The tags can also be fecthed from the frontmatter of the markdown file)
FAVORITE_ARTICLES - Favorite articles
```

## How to add new blog post

To add a new blog post, you need to create a new markdown or mdx file in the `src/content/blog/` directory with relevant frontmatter.

Here is a sample of the frontmatter:
** Tags are case sensitive

```markdown
---
title: "Title of the blog post"
description: "Description of the blog post"
pubDate: "2022-01-01"
heroImage: "image.jpg"
tags: ["Tag1", "tag2"]
---
```

## SEO

The SEO component is located in the `src/layouts/Layout.astro` file. The component is used in the layout files to set the SEO meta tags.

## Assets

The assets are located in the `public/` or `src/assets` directory. You can add images, fonts, or any other static files in this directory.

All image files are optimized using the `sharp` package for better performance.