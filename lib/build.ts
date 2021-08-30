import { buildHtml } from './builders/buildHtml'
import { buildCss } from './builders/buildCss'
import { buildPdf } from './builders/buildPdf'
import { getMode } from './args/getMode'

switch (getMode())
{
	case 'html':
		buildHtml()
		break

	case 'css':
		buildCss()
		break

	case 'pdf':
		buildPdf()
		break

	case 'all':
		buildHtml()
		buildCss()
		buildPdf()
		break
}
