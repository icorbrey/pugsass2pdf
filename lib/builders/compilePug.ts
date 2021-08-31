import { file, pug } from '../services'
import { config } from '../config'

export const compilePug = () =>
{
	const pugSource = file.read(config.pugEntryPath)
	const cssSource = file.read(config.cssBuildPath)
	const compiled = pug.compile(pugSource, cssSource)
	file.write(config.htmlBuildPath, compiled)
	
	console.log(`HTML file saved to '${config.htmlBuildPath}'.`)
}
