import { assemblePdf, compilePug, compileSass } from './builders'
import { getMode } from './config'

switch (getMode())
{
	case 'css':
		compileSass()
		break

	case 'html':
		compilePug()
		break

	case 'pdf':
		assemblePdf()
		break

	case 'all':
		compileSass()
		compilePug()
		assemblePdf()
		break
}
