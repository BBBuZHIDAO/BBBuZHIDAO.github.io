# Profile Source for Personal Academic Website

This file is the single source of truth for the personal academic website.
The website should be written in English, but this source file may preserve Chinese notes for accuracy.

## Basic Information

Name: Hekai Bu  
Location: Wuhan, China  
Email: hekai_bu@whu.edu.cn  

Public links:
- Email: mailto:hekai_bu@whu.edu.cn
- Google Scholar: https://scholar.google.com/citations\?user\=on0EFOUAAAAJ\&hl\=en
- GitHub: https://github.com/BBBuZHIDAO
- CV: cv/CV.pdf
- Profile photo: assets/images/me.jpg

Do not publish phone number on the public website unless explicitly requested.

## Current Position

Master's student in Solid Mechanics at Wuhan University.

## Education

### Wuhan University
M.S. in Solid Mechanics  
Sep. 2023 – Jun. 2026  
Weighted average score: 85/100  
Research areas: molecular dynamics simulations, high-performance computing, and two-dimensional materials.

### Wuhan University
B.Eng. in Engineering Mechanics  
Sep. 2019 – Jun. 2023  
Weighted average score: 88/100  

Selected honors:
- Wuhan University Second-Class Scholarship, 2021
- Wuhan University Outstanding Student Award, 2021
- Provincial Second Prize, National College Students' Mathematics Competition, 2020

## Research Interests

- Nanoscale heat transfer
- Interfacial thermal transport
- van der Waals materials
- Two-dimensional materials
- Phonon transport
- Molecular dynamics simulations
- Machine-learning interatomic potentials
- Hybrid machine-learning and physics-based potentials
- GPU-accelerated molecular dynamics

## Technical Skills

Programming:
- C/C++
- CUDA C++
- Python
- MATLAB
- Fortran

Development tools:
- Git
- GDB
- CUDA-GDB
- Make
- NVIDIA Nsight Compute
- Vim
- SLURM

Scientific software:
- GPUMD
- LAMMPS
- VASP
- OVITO
- Adobe Illustrator

Languages:
- Chinese, native
- English

## Research and Development Profile

The website should present the profile as both an academic researcher and a scientific software developer.

Suggested short bio:

I am a master's student in Solid Mechanics at Wuhan University. My research focuses on nanoscale heat transfer, interfacial thermal transport, and atomistic simulations of two-dimensional and van der Waals materials. I also develop and optimize scientific simulation software, with particular interests in GPU-accelerated molecular dynamics, machine-learning interatomic potentials, and hybrid force-field frameworks for large-scale materials simulations.

## Work Experience

### YUSUR Technology Co., Ltd.
C++ Software Engineer Intern  
Wuhan, China  
Mar. 2023 – Jun. 2023

- Implemented host-to-card QDMA transfer modules in QEMU, including descriptor packaging, DMA execution, status-queue management, and packet validation.
- Built Docker-based development environments and debugged the open-nic driver on a hardware simulator.
- Collaborated on coding standards and version-control workflows using GitLab.
- Prepared application documentation and contributed to software copyright and patent materials.

## Selected Development Project

### GPUMD and NEP: Performance Optimization and Feature Expansion
Key Developer  
Jul. 2023 – Present

- Profiled GPU kernels using NVIDIA Nsight Compute and refactored performance bottlenecks, achieving approximately 15% speedup through algorithmic optimization.
  - GPUMD PR 762: https://github.com/brucefan1983/GPUMD/pull/762
  - GPUMD PR 806: https://github.com/brucefan1983/GPUMD/pull/806
- Developed loading-spring force modules in GPUMD for GPU-accelerated dynamic friction simulations.
  - GPUMD PR 1273: TODO if public link should be added
  - GPUMD PR 1378: TODO if public link should be added
- Integrated hybrid potentials for van der Waals materials, including SW+ILP, Tersoff+ILP, and NEP+ILP.
  - GPUMD PR 761: https://github.com/brucefan1983/GPUMD/pull/761
  - GPUMD PR 1062: https://github.com/brucefan1983/GPUMD/pull/1062
  - GPUMD PR 951: https://github.com/brucefan1983/GPUMD/pull/951
- Maintained the NEP_CPU repository and improved the NEP–LAMMPS interface to support hybrid potentials in LAMMPS.
  - NEP_CPU PR 34: https://github.com/brucefan1983/NEP_CPU/pull/34
- Developed a ghost-atom computation module for the GPUMD Deep Potential interface to improve throughput and reduce GPU memory consumption.
  - GPUMD PR 827: https://github.com/brucefan1983/GPUMD/pull/827
- Updated the official GPUMD user manual and maintained internal developer documentation.
  - GPUMD PR 1068: https://github.com/brucefan1983/GPUMD/pull/1068
  - GPUMD PR 791: https://github.com/brucefan1983/GPUMD/pull/791/files

## Selected Research Project

### Scalable Force-Field Framework for Large-Scale van der Waals Heterostructures
Developer and Researcher  
Jun. 2023 – May 2026

- Developed a hybrid sMLP+ILP framework that combines near-DFT accuracy with empirical-potential-level efficiency.
- Reduced the required number of training configurations by more than one order of magnitude.
- Implemented NEP+ILP in LAMMPS through the NEP_CPU interface and in GPUMD through a highly coupled GPU implementation.
- Systematically validated mechanical and thermal properties of graphene, h-BN, and transition metal dichalcogenides against experimental benchmarks.

## Publications

Use the following publication list. Do not invent DOI, links, journal status, or metrics.

For the website:
- Bold "H. Bu" in author lists.
- Use compact action links such as PDF and DOI/Publisher.
- Add "Co-first author" only where explicitly stated.
- Do not add citation metrics or impact factors.

1. H. Bu#, W. Jiang#, P. Ying, T. Liang, Z. Fan, W. Ouyang, Modular hybrid machine learning and physics-based potentials for scalable modeling of van der Waals heterostructures, Journal of the Mechanics and Physics of Solids, 2026, 210, 106540. Co-first author.
   - PDF: papers/bu-2026-jmps-hybrid-potentials.pdf
   - DOI: https://doi.org/10.1016/j.jmps.2026.106540

2. W. Jiang#, H. Bu#, T. Liang#, P. Ying, Z. Fan, J. Xu, W. Ouyang, Accurate modeling of interfacial thermal transport in van der Waals heterostructures via hybrid machine learning and registry-dependent potentials, Journal of Chemical Theory and Computation, 2026, 22(9), 4699–4715. Co-first author.
   - PDF: papers/jiang-2026-jctc-interfacial-thermal-transport.pdf
   - Publisher: https://pubs.acs.org/doi/10.1021/acs.jctc.5c01950

3. K. Xu, H. Bu, S. Pan, E. Lindgren, Y. Wu, Y. Wang, J. Liu, K. Song, B. Xu, Y. Li, T. Hainer, L. Svensson, J. Wiktor, R. Zhao, H. Huang, et al., P. Guan, P. Erhart, J. Sun, W. Ouyang, Y. Su, Z. Fan, GPUMD 4.0: a high-performance molecular dynamics package for versatile materials simulations with machine-learned potentials, MGE Advances, 2025, 3(3), e70028.
   - PDF: papers/xu-2025-mgea-gpumd-4.pdf
   - DOI: https://doi.org/10.1002/mgea.70028

4. W. Jiang, H. Bu, B. Wu, W. Ouyang, Chirality-dependent strain modulation of thermal conductivity in double-walled molybdenum disulfide nanotubes, International Communications in Heat and Mass Transfer, 2026, 170, 109935.
   - PDF: papers/jiang-2026-ichmt-mos2-nanotubes.pdf
   - DOI: https://doi.org/10.1016/j.icheatmasstransfer.2025.109935

5. W. Jiang, T. Liang, H. Bu, J. Xu, W. Ouyang, Moiré-driven interfacial thermal transport in twisted transition metal dichalcogenides, ACS Nano, 2025, 19(17), 16287–16296.
   - PDF: papers/jiang-2025-acsnano-moire-thermal-transport.pdf
   - Publisher: https://pubs.acs.org/doi/abs/10.1021/acsnano.4c12148

6. T. Liang#, W. Jiang#, K. Xu, H. Bu, Z. Fan, W. Ouyang, J. Xu, PYSED: A tool for extracting kinetic-energy-weighted phonon dispersion and lifetime from molecular dynamics simulations, Journal of Applied Physics, 2025, 138(7), 075101.
   - PDF: papers/liang-2025-jap-pysed.pdf
   - DOI: https://doi.org/10.1063/5.0278798

## Patents and Software Copyrights

For the website, show this section only if it does not make the page visually crowded. It may also be moved to the CV section.

- Z. Liu, W. Ouyang, H. Bu, High-performance software for object matching and tracking based on temporal image feature analysis, 2023SR0562225, National Copyright Administration of China, May 2023.
- W. Ouyang, H. Bu, Efficient color-feature-based software for rapid thickness measurement of two-dimensional materials, 2023SR1348265, National Copyright Administration of China, Oct. 2023.
- W. Ouyang, H. Yang, W. Jiang, H. Bu, Computational method and device for force-field simulations of van der Waals heterostructures, CN120087210A, China National Intellectual Property Administration, Jun. 2025.

## Files in Repository

Profile photo:
- assets/images/me.jpg

CV:
- cv/CV.pdf

Publication PDFs:
- papers/bu-2026-jmps-hybrid-potentials.pdf
- papers/jiang-2026-jctc-interfacial-thermal-transport.pdf
- papers/xu-2025-mgea-gpumd-4.pdf
- papers/jiang-2026-ichmt-mos2-nanotubes.pdf
- papers/jiang-2025-acsnano-moire-thermal-transport.pdf
- papers/liang-2025-jap-pysed.pdf

## Explicitly Excluded Content

Do not include the following content in the website body:
- VDWToolkit
- Guanghe Funding / domestic accelerator card testing project
- Phone number
- Unverified publication status from the older English CV

Important note:
If cv/CV.pdf contains additional content, do not duplicate excluded content from the PDF into the webpage body.
