import fs from 'fs'

export const saveFile = (path: string, contents: string) =>
{
	fs.mkdirSync(getParentDirectory(path), { recursive: true })
	fs.writeFileSync(path, contents)
}

const getParentDirectory = (path: string) =>
    path.split('/').slice(0, -1).join('/')
