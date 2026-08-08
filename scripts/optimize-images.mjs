import sharp from 'sharp'
import { readdir, stat, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const DIR = path.resolve('public/images/hotel')
const MAX_WIDTH = 1920

async function run() {
  const files = (await readdir(DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f))
  const manifest = {}
  let totalBefore = 0
  let totalAfter = 0

  for (const file of files) {
    const filePath = path.join(DIR, file)
    const before = (await stat(filePath)).size
    totalBefore += before

    const srcBuffer = await readFile(filePath)
    const meta = await sharp(srcBuffer).metadata()
    const resizeWidth = meta.width > MAX_WIDTH ? MAX_WIDTH : meta.width

    const jpegBuffer = await sharp(srcBuffer)
      .resize({ width: resizeWidth, withoutEnlargement: true })
      .jpeg({ quality: 78, progressive: true, mozjpeg: true })
      .toBuffer()

    const finalMeta = await sharp(jpegBuffer).metadata()
    await writeFile(filePath, jpegBuffer)

    const webpBuffer = await sharp(srcBuffer)
      .resize({ width: resizeWidth, withoutEnlargement: true })
      .webp({ quality: 72 })
      .toBuffer()
    const webpPath = filePath.replace(/\.(jpe?g|png)$/i, '.webp')
    await writeFile(webpPath, webpBuffer)

    const after = jpegBuffer.length
    totalAfter += after

    manifest[file] = { width: finalMeta.width, height: finalMeta.height }

    console.log(
      `${file}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (${finalMeta.width}x${finalMeta.height})`
    )
  }

  console.log('\n--- Manifest (width/height) ---')
  console.log(JSON.stringify(manifest, null, 2))
  console.log(
    `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`
  )
}

run()
