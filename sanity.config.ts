import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: "rxcpny8a",
    dataset: "production",
    title: "Test Website",
    apiVersion: "2023-03-19",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: { types: schemas }
})

export default config;