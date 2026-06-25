# Personal Academic Website

This repository is a static personal academic website deployed with GitHub Pages.

## Site Positioning

The website should present Hekai Bu as both:
1. an academic researcher in nanoscale heat transfer, interfacial thermal transport, two-dimensional materials, and atomistic simulations;
2. a scientific software developer working on GPU-accelerated molecular dynamics, machine-learning interatomic potentials, and high-performance simulation code.

The style should be academic, minimal, polished, and technically credible.
Avoid flashy animations, excessive colors, exaggerated marketing language, or template-like AI visuals.

## Content Source

Use `content/profile.md` as the single source of truth.

When updating website content:
- Read `content/profile.md` first.
- Do not invent publications, DOI links, GitHub links, Google Scholar links, journal status, awards, or metrics.
- If information is missing, use a TODO placeholder.
- Prefer the Chinese CV-derived content over the older English CV-derived content.

## Explicit Exclusions

Do not include:
- VDWToolkit
- Guanghe Funding / domestic accelerator card testing project
- phone number
- unverified publication status from the older English CV
- private notes, manuscript drafts, or sensitive files

## Technical Requirements

Use plain HTML, CSS, and minimal JavaScript unless explicitly requested.

Required structure:
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- `assets/images/`
- `content/profile.md`
- `cv/`
- `papers/`

The site must be:
- compatible with GitHub Pages;
- responsive on desktop, tablet, and mobile;
- easy to maintain;
- fast to load;
- accessible with semantic HTML;
- readable without JavaScript.

## Design Requirements

The visual style should be:
- clean academic;
- minimal but refined;
- clear in hierarchy;
- high contrast and readable;
- restrained in color usage;
- smooth in interactions;
- suitable for a researcher/developer homepage.

Recommended sections:
- Home
- Research
- Development
- Publications
- Experience
- CV
- Contact

## Interaction Requirements

Use subtle interactions only:
- smooth scrolling;
- active navigation state;
- mobile navigation toggle;
- hover states for cards and links.

Avoid:
- heavy animations;
- auto-playing effects;
- particle backgrounds;
- excessive gradients;
- decorative icons without meaning.

## Deployment

Before deployment:
- check `git status --short`;
- inspect `git diff`;
- verify `index.html` exists at the repository root;
- verify all paths are relative and GitHub Pages compatible;
- verify no sensitive files are staged;
- do not commit or push without explicit user approval.
