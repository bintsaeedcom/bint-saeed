#!/usr/bin/env node
/**
 * Free helper: rename dumped photos/videos to bint-saeed-{slug}-… convention.
 *
 * Usage:
 *   node ops/content/scripts/rename-assets.mjs --dir ./exports --slug park-lane-abaya --colour black --dry-run
 *   node ops/content/scripts/rename-assets.mjs --dir ./exports --slug park-lane-abaya --colour black
 *
 * Optional: --role front|detail|lifestyle|pin|reel (default cycles front/detail/lifestyle)
 */
import fs from 'fs'
import path from 'path'

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`)
  if (i === -1) return fallback
  return process.argv[i + 1] ?? fallback
}

const dir = arg('dir')
const slug = arg('slug')
const colour = arg('colour', 'studio')
const fixedRole = arg('role', null)
const dryRun = process.argv.includes('--dry-run')

if (!dir || !slug) {
  console.error('Required: --dir <folder> --slug <product-slug> [--colour black] [--role front] [--dry-run]')
  process.exit(1)
}

const abs = path.resolve(dir)
if (!fs.existsSync(abs)) {
  console.error('Directory not found:', abs)
  process.exit(1)
}

const MEDIA = /\.(jpe?g|png|webp|gif|mp4|mov|webm)$/i
const ROLES = ['front', 'detail', 'lifestyle', 'side', 'packshot']

const files = fs
  .readdirSync(abs)
  .filter((f) => MEDIA.test(f) && !f.startsWith('.'))
  .filter((f) => !f.toLowerCase().startsWith('bint-saeed-'))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

if (!files.length) {
  console.log('No unrenamed media files found in', abs)
  process.exit(0)
}

const mapping = []
files.forEach((file, index) => {
  const ext = path.extname(file).toLowerCase().replace('jpeg', 'jpg')
  const n = String(index + 1).padStart(2, '0')
  const isVideo = /\.(mp4|mov|webm)$/i.test(file)
  const role = fixedRole || (isVideo ? 'reel' : ROLES[index % ROLES.length])
  const next = `bint-saeed-${slug}-${colour}-${role}-${n}${ext === '.jpeg' ? '.jpg' : ext}`
  mapping.push({ from: file, to: next })
})

for (const { from, to } of mapping) {
  const src = path.join(abs, from)
  const dest = path.join(abs, to)
  if (fs.existsSync(dest)) {
    console.warn('Skip (target exists):', to)
    continue
  }
  console.log(`${dryRun ? '[dry-run] ' : ''}${from} → ${to}`)
  if (!dryRun) fs.renameSync(src, dest)
}

console.log(`\n${mapping.length} file(s). ${dryRun ? 'Dry run only — re-run without --dry-run to apply.' : 'Done.'}`)
console.log('Add matching alt texts in the content pack ALT_TEXTS.md / ASSETS_RENAME.md')
