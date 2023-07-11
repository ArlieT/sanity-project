import { defineConfig, isDev } from 'sanity'
import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import schemas from '@/sanity/schema'
// import {schemaTypes} from './schemas'

// const devOnlyPlugins = [getStartedPlugin()]

const config = defineConfig({
  name: 'default',
  title: 'practice-project',
  projectId: 'balpo577',
  dataset: 'production',
  apiVersion: '2023-3-11',
  // plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {types: schemas},
})


export default config