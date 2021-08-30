import sass from 'sass'
import fs from 'fs'

export const buildCss = () =>
{
	const sassPath = 'src/index.sass'
	const cssPath = 'build/index.css'

	const css = sass.renderSync({ file: sassPath }).css.toString()
	fs.mkdirSync('build', { recursive: true })
	fs.writeFileSync(cssPath, css)
	console.log(`CSS file saved to '${cssPath}'.`)
}
