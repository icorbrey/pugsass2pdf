import { file, pdf } from '../services'
import { config } from '../config'

export const assemblePdf = () =>
{
	const source = file.read(config.htmlBuildPath)
	pdf.compileToFile(config.pdfBuildPath, source)
	
	console.log(`PDF file saved to '${config.pdfBuildPath}'.`)
}
