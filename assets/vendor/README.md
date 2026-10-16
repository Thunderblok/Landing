# Vendored Client Libraries (`assets/vendor/`)

Self-hosted production builds vendored to eliminate third-party runtime CDN dependencies and preserve strict Content-Security-Policy / offline determinism across the OKO estate.

## Inventory

| Library / File | Exact Version | Source URL | SHA256 (`sha256sum`) | Size (bytes) | License Notice |
| :--- | :--- | :--- | :--- | ---: | :--- |
| `gsap-3.x/gsap.min.js` | `3.15.0` | `https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js` | `92bb9a96476f983d212a2bc4f54c889039c1696dd4461d40a736860938570fbb` | `72927` | MIT / GreenSock Standard "No Charge" License (`gsap-3.x/LICENSE`) |
| `gsap-3.x/ScrollTrigger.min.js` | `3.15.0` | `https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js` | `b0b14d67b55b0c43c756ac0b106cfcb09d0879945f6ead64451065b0672916a2` | `44575` | MIT / GreenSock Standard "No Charge" License (`gsap-3.x/LICENSE`) |
| `gsap-3.x/Flip.min.js` | `3.15.0` | `https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/Flip.min.js` | `cbe3ca726350f8d230da38a14ce2384e7772e05a45cee6144dd7fe6dde868c2f` | `25534` | MIT / GreenSock Standard "No Charge" License (`gsap-3.x/LICENSE`) |
| `gsap-3.x/LICENSE` | `3.15.0` | `https://gsap.com/standard-license` | `3093bf9012056eb9f1540ae8aa15982240d7529023ec81049153d7c42fb2d017` | `1297` | MIT / Standard "No Charge" License text |
| `lenis-1.x/lenis.min.js` | `1.3.27` | `https://cdn.jsdelivr.net/npm/lenis@1.3.27/dist/lenis.min.js` | `80f53e77f1c13e379fc246d2b5e299188e20bcb2b2fe7ebb13e8e8c7563a6da7` | `18815` | MIT — Copyright (c) 2024 darkroom.engineering (`lenis-1.x/LICENSE`) |
| `lenis-1.x/LICENSE` | `1.3.27` | `https://cdn.jsdelivr.net/npm/lenis@1.3.27/LICENSE` | `7d1896b31f2eed9f286b05faca067c4e35b2f109ae7c4ed5105220e2d2820228` | `1088` | MIT License text |
| `three.module.js` | `0.186.0` (r186) | `https://cdn.jsdelivr.net/npm/three@0.186.0/build/three.module.js` | `9052042d676cb0fdc1ddfefe193053f34b7ac0513a616fdac4535d49987812ea` | `662772` | MIT — Copyright 2010-2026 Three.js Authors (`README.txt`) |
| `three.core.js` | `0.186.0` (r186) | `https://cdn.jsdelivr.net/npm/three@0.186.0/build/three.core.js` | `9edde002b066a9a05676a6127f67735b62baf399bdea529f2f7e31657da769e6` | `1458113` | MIT — Copyright 2010-2026 Three.js Authors (`README.txt`) |

## MIT & Free-Use Notices

- **Lenis (`1.3.27`)**: Released under the MIT License (`Copyright (c) 2024 darkroom.engineering`). Full text in [`lenis-1.x/LICENSE`](./lenis-1.x/LICENSE).
- **GSAP (`3.15.0` — Core, ScrollTrigger, Flip)**: Copyright 2008-2026 GreenSock. 100% free for commercial and non-commercial use under the MIT / GreenSock Standard "No Charge" License (`gsap-3.x/LICENSE`).
- **Three.js (`0.186.0`)**: Released under the MIT License. See [`README.txt`](./README.txt) for importmap notes.
