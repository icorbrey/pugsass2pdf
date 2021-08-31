import wkhtmltopdf from 'wkhtmltopdf'
import fs from 'fs'

export const buildPdf = () =>
{
	const htmlPath = 'build/index.html'
	const pdfPath = 'build/build.pdf'

	const html = fs.readFileSync(htmlPath).toString()
	wkhtmltopdf(html, {
		output: pdfPath,
		marginTop: '0in',
		marginLeft: '0in',
		marginRight: '0in',
		marginBottom: '0in',
	})
	console.log(`PDF file saved to '${pdfPath}'.`)
}
