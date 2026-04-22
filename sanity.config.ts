'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'

import {structureTool} from 'sanity/structure'
import {colorInput} from '@sanity/color-input'
import {muxInput} from 'sanity-plugin-mux-input'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {myStructure} from './src/sanity/deskStucture'
export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder

  plugins: [structureTool({
    structure: myStructure
  }), visionTool(),muxInput(),colorInput()],

  schema
})
