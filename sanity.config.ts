// sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schemaTypes';

// Use environment variables or fallback values
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-12';

export default defineConfig({
    basePath: '/admin', // The route where the studio will be mounted
    projectId,
    dataset,

    plugins: [structureTool()],

    schema: {
        types: schema.types,
    },
});
