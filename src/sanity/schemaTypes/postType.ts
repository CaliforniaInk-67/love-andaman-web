import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    
    // ─── 🛠️ ปรับแก้ฟิลด์ SEO ให้ตรวจคะแนนความยาวอักษรแบบ REAL-TIME ───
    defineField({
      name: 'metaTitle',
      title: 'Meta Title (SEO)',
      type: 'string',
      description: 'หัวข้อสำหรับแสดงบน Google (ความยาวแนะนำ: 50 - 60 ตัวอักษร)',
      validation: (Rule) =>
        Rule.custom((text) => {
          if (!text) return true;
          if (text.length < 50) return `⚠️ สั้นไปหน่อยนะคุณ (ตอนนี้มี ${text.length} ตัวอักษร) แนะนำให้ยาวกว่า 50 ตัวอักษรเพื่อ SEO ที่ดี`;
          if (text.length > 60) return `❌ ยาวเกินไปแล้ว! (ตอนนี้มี ${text.length} ตัวอักษร) เกิน 60 ตัวอักษร Google จะแสดงผลขาดหาย`;
          return true; // ผ่านเกณฑ์
        }),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      description: 'เนื้อหาเกริ่นนำสำหรับแสดงบน Google (ความยาวแนะนำ: 120 - 160 ตัวอักษร)',
      validation: (Rule) =>
        Rule.custom((text) => {
          if (!text) return true;
          if (text.length < 120) return `⚠️ ข้อความเกริ่นนำสั้นไป (ตอนนี้มี ${text.length} ตัวอักษร) แนะนำให้ยาวกว่า 120 ตัวอักษรเพื่อข้อมูลที่ครบถ้วน`;
          if (text.length > 160) return `❌ ยาวเกินไปแล้ว! (ตอนนี้มี ${text.length} ตัวอักษร) เกิน 160 ตัวอักษร Google จะตัดคำข้อความทิ้ง`;
          return true; // ผ่านเกณฑ์
        }),
    }),
    // ──────────────────────────────────────────────────────────────

    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})