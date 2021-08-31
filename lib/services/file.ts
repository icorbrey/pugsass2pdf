import path from 'path'
import fs from 'fs'

export const read = (inputPath: string) =>
    fs.readFileSync(inputPath).toString()

export const write = (outputPath: string, contents: string) =>
{
    ensureParentDirExists(outputPath)
    fs.writeFileSync(outputPath, contents)
}

export const getWritableStream = (outputPath: string) =>
{
    ensureParentDirExists(outputPath)
    return fs.createWriteStream(outputPath)
}

const ensureParentDirExists = (outputPath: string) =>
    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
