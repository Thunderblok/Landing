#!/usr/bin/env bash
# Build the OKO press kit archive from committed sources.
# Idempotent. Shellcheck-clean. Run from the repo root (oko-site/src).
# Output: press/oko-press-kit.zip + press/oko-press-kit.zip.sha256
# Rasterises two PNG logo renditions via ImageMagick if available.
#
# Usage: bash assets/scripts/build-press-kit.sh
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")"/../.. && pwd)"
SRC="${REPO_ROOT}/press-kit-src"
OUT_DIR="${REPO_ROOT}/press"
OUT_ZIP="${OUT_DIR}/oko-press-kit.zip"
STAGE="$(mktemp -d)"
trap 'rm -rf "${STAGE}"' EXIT

if [[ ! -d "${SRC}" ]]; then
  echo "fatal: ${SRC} missing" >&2
  exit 2
fi
mkdir -p "${OUT_DIR}"

# Copy committed sources into stage.
cp -a "${SRC}"/. "${STAGE}/"

# Rasterise PNG renditions of the bolt mark on dark + light backgrounds.
# Skip gracefully if ImageMagick is not installed.
if command -v magick >/dev/null 2>&1; then
  CMD="magick"
elif command -v convert >/dev/null 2>&1; then
  CMD="convert"
else
  CMD=""
fi

if [[ -n "${CMD}" ]]; then
  SVG="${SRC}/logos/oko-mark.svg"
  # On dark #0b1117.
  "${CMD}" -background '#0b1117' -density 384 "${SVG}" -resize 1024x1024 \
    "${STAGE}/logos/oko-mark-dark.png"
  # On light #f4f0e7.
  "${CMD}" -background '#f4f0e7' -density 384 "${SVG}" -resize 1024x1024 \
    "${STAGE}/logos/oko-mark-light.png"
else
  cat > "${STAGE}/logos/PNG-NOT-GENERATED.txt" <<'EOF'
PNG renditions of oko-mark were not generated because neither `magick` (ImageMagick 7+)
nor `convert` (ImageMagick 6) was available on the build host.

To generate them manually:

  magick -background '#0b1117' -density 384 oko-mark.svg -resize 1024x1024 oko-mark-dark.png
  magick -background '#f4f0e7' -density 384 oko-mark.svg -resize 1024x1024 oko-mark-light.png

Then re-run this build script. The SVG source is authoritative.
EOF
fi

# Zip from stage, excluding macOS metadata and git droppings.
rm -f "${OUT_ZIP}"
( cd "${STAGE}" && zip -qr "${OUT_ZIP}" . \
    -x '*.DS_Store' '*/.git/*' '*/.gitignore' )

# Companion sha256.
( cd "${OUT_DIR}" && sha256sum "$(basename "${OUT_ZIP}")" > "${OUT_ZIP}.sha256" )

echo "built: ${OUT_ZIP}"
echo "sha256: $(cut -d' ' -f1 "${OUT_ZIP}.sha256")"
echo "contents:"
unzip -l "${OUT_ZIP}" | sed 's/^/  /'
