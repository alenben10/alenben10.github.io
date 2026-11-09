# alenzimic.github.io

Personal academic site, built with [Astro](https://astro.build) and deployed to GitHub Pages
automatically on every push to `main`.

**You never need to touch HTML or CSS to update it.** Almost everything is plain text.

## Where things live

| I want to change…                         | Edit this                                   |
| ----------------------------------------- | ------------------------------------------- |
| Intro, role, research-interest tags, contact | `src/lib/profile.ts`                      |
| "About" paragraphs                        | `src/content/about/main.md`                 |
| Education                                 | `src/content/education/*.md`                |
| Research experience (timeline)            | `src/content/experience/*.md`               |
| Publications                              | `src/content/publications/*.md`             |
| Projects & code                           | `src/content/projects/*.md`                 |
| Honors & funding                          | `src/content/honors/*.md`                   |
| Talks & posters                           | `src/content/talks/*.md`                    |
| Mentoring & service                       | `src/content/service/*.md`                  |
| CV PDF                                    | replace `public/assets/Alen-Zimic-CV.pdf`   |
| Photo                                     | replace `public/assets/alen-zimic-portrait.webp` |
| Colors                                    | the few lines at the top of `src/styles/global.css` |

## Adding an item

Copy any `.md` file in the same folder, rename it, and change the text between the `---` lines.
Lower `order` numbers appear first. Use `*asterisks*` in a title for italics (species names).

Projects: the first project is shown as the wide featured card. Add `"earlier"` to a project's
`tags` to list it under "Earlier projects" instead of as a card. Optional links: `href` (code),
`demoHref`, and `secondaryHref` + `secondaryLabel`.

### Publication example

```md
---
title: "My new paper about *Escherichia coli*"
authors: "Doe J., A. Zimic-Sheen, et al."
journal: "Bioinformatics"
date: "2027"
category: "peer-reviewed"   # under-review | peer-reviewed | proceedings | in-preparation
doi: "10.1093/bioinformatics/xxxx"
order: 1
summary: "One sentence shown on the notes page."
---

Optional notes about the paper (Markdown). Every publication that is not
"in-preparation" automatically gets a page at /publications/<file-name>/.
```

Your name is bolded automatically in author lists.

## Run locally (optional)

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # what GitHub Actions runs
```
