#!/usr/bin/env node
// Post-build: add .js extensions to relative imports in the ESM output.
//
// tsc with moduleResolution=bundler emits extensionless relative paths
// (e.g. `from './sdk.gen'`), which is fine for Vite/webpack but breaks
// Node.js native ESM resolution (used by TanStack Start server, Jest ESM, etc).
// rewriteRelativeImportExtensions only helps when source uses explicit .ts
// extensions — hey-api generates extensionless imports, so we patch post-emit.

import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs'
import { join } from 'path'

// Matches: from './foo'  from '../bar/baz'
// Skips:   from './foo.js'  from './foo.json'  from 'package'
const RELATIVE_BARE = /from '(\.{1,2}\/[^'"]+)(?<!\.(js|mjs|cjs|json|css))'/g

function patch(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      patch(full)
    } else if (entry.endsWith('.js') || entry.endsWith('.d.ts')) {
      const original = readFileSync(full, 'utf8')
      const updated = original.replace(RELATIVE_BARE, "from '$1.js'")
      if (updated !== original) writeFileSync(full, updated)
    }
  }
}

patch('esm')
console.log('fix-esm-extensions: .js suffixes added to relative imports in esm/')
