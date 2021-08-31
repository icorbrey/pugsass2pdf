import { file, sass } from '../services'
import { config } from '../config'

export const compileSass = () =>
{
	const source = file.read(config.sassEntryPath)
	const compiled = sass.compile(source)
	file.write(config.cssBuildPath, compiled)
	
	console.log(`CSS file saved to '${config.cssBuildPath}'.`)
}
