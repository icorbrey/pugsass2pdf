import pug from 'pug'
import fs from 'fs'

export const buildHtml = () =>
{
	const pugPath = 'src/index.pug'
	const htmlPath = 'build/index.html'

	const html = pug.renderFile(pugPath)
	fs.mkdirSync('build', { recursive: true })
	fs.writeFileSync(htmlPath, html)
	console.log(`HTML file saved to '${htmlPath}'.`)
}
