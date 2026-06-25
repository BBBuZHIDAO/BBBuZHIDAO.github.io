---
name: github-pages-deploy
description: Check, commit, and deploy a static academic website to GitHub Pages. Use before committing or pushing website changes.
---

# GitHub Pages Deploy Skill

Before deployment, check:

1. `git status --short`
2. `git diff`
3. repository structure
4. GitHub Pages compatibility
5. relative paths for CSS, JS, images, CV, and papers
6. whether `index.html` exists at the repository root
7. whether sensitive files are staged

## Sensitive or excluded content

Do not commit:
- API keys
- tokens
- private notes
- manuscript drafts
- raw data
- phone number
- VDWToolkit content
- Guanghe Funding / domestic accelerator card testing content

## Recommended commands

Use these only after the user approves:

- `git add .`
- `git commit -m "Build personal academic website"`
- `git push origin main`

Never push without explicit user approval.
