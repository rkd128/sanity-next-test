import { defineConfig } from 'sanity';
import schemas from './sanity/schemas'
import { structureTool } from 'sanity/structure'
import {colorInput} from '@sanity/color-input'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import {media} from 'sanity-plugin-media'
import {visionTool} from '@sanity/vision'

const config = defineConfig({
    projectId: "rxcpny8a",
    dataset: "production",
    title: "UX Sanity + Next Test",
    apiVersion: "2024-04-18",
    basePath: "/admin",
    plugins: [
      structureTool(), 
      vercelDeployTool(),
      colorInput(),
      media(),
      visionTool()
    ],
    schema: { types: schemas }
  })

export default config;



