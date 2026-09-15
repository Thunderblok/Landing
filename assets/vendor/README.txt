three.js r186 (npm three@0.186.0), build/three.module.js + build/three.core.js
MIT — Copyright 2010-2026 Three.js Authors — https://github.com/mrdoob/three.js

Vendored deliberately. The importmap in substrate.html resolves "three" to
three.module.js, which imports ./three.core.js as a sibling — BOTH files are
required. Vendoring only the first reproduces the original 404 one level down.

sha256:
  9052042d676cb0fdc1ddfefe193053f34b7ac0513a616fdac4535d49987812ea  three.module.js
  9edde002b066a9a05676a6127f67735b62baf399bdea529f2f7e31657da769e6  three.core.js

To update: fetch build/three.module.js and build/three.core.js from the same
release together, and re-record both hashes here.

Known deprecation at r186: substrate.html uses THREE.Clock, which r186 marks
deprecated in favour of THREE.Timer. It still works and the page runs with zero
console errors. When it is eventually removed, the page goes blank again — so on
the next bump, either keep Clock working or replace the two lines that use it
(substrate.html: `new THREE.Clock()` and `clock.getElapsedTime()`), which only
need elapsed seconds and could equally come from performance.now().
