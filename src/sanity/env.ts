export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-06-13'

// เปลี่ยนมาใช้ค่าเริ่มต้น 'production' แทนการใช้ assertValue เพื่อป้องกัน Error
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// ใส่ Project ID ของคุณเป็นค่าเริ่มต้นไว้เลย ถ้าระบบหา env ไม่เจอจะได้ดึงตัวนี้ไปใช้
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'mzu6hrfzcxp4sc7wre6qzsk8'

// ฟังก์ชันนี้ยังเก็บไว้เผื่อไฟล์อื่นในระบบเรียกใช้ (แต่ในไฟล์นี้เราไม่ได้ใช้แล้ว)
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}