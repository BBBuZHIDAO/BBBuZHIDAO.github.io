---
name: profile-content-manager
description: Maintain the profile source file and synchronize verified profile content into the academic website. Use when extracting information from CVs, updating personal information, publications, research projects, or developer projects.
---

# Profile Content Manager Skill

The file `content/profile.md` is the single source of truth.

## Main workflow

1. Read `content/profile.md`.
2. Compare new information against existing content.
3. Prefer the newest verified source.
4. Preserve exclusions and privacy constraints.
5. Update website content only after the source file is consistent.

## Accuracy rules

Do not invent:
- publication status
- DOI
- URL
- journal volume or issue
- dates
- award names
- project roles
- metrics

Use TODO placeholders when information is missing.

## Privacy rules

Do not publish:
- phone number
- private address
- private notes
- internal-only project information

## Explicit exclusions

Never add the following to the public website:
- VDWToolkit
- Guanghe Funding / domestic accelerator card testing project

## English rendering

When converting Chinese CV content into English website copy:
- keep the meaning accurate;
- use concise academic English;
- avoid literal translation if it sounds unnatural;
- preserve technical terms such as GPUMD, NEP, ILP, LAMMPS, CUDA, molecular dynamics, and machine-learning potentials.
