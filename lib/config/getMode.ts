type Mode = 'html' | 'css' | 'pdf' | 'all'

export const getMode = (): Mode =>
{
	const mode = process.argv[2]

	if (!isDefined(mode))
		throw new Error('Build mode must be provided.')

	if (!isValidMode(mode))
		throw new Error(`'${mode}' is not a valid build mode.`)

	return mode
}

const isDefined = (mode: string) =>
	mode !== undefined && mode !== null

const isValidMode = (mode: string): mode is Mode =>
	['html', 'css', 'pdf', 'all'].includes(mode)
