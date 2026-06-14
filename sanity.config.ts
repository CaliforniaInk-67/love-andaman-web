'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// ดึงค่า projectId และ dataset มาจากไฟล์ env ของระบบโดยตรง ปลอดภัยที่สุด
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || 'mzu6hrfzcxp4sc7wre6qzsk8', // ถ้าระบบหาจาก env ไม่เจอ มันจะใช้ค่าเริ่มต้นให้เองอัตโนมัติ
  dataset: dataset || 'production',                  // ป้องกันตัวแดง มั่นใจได้ว่าไม่พังแน่นอน
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})