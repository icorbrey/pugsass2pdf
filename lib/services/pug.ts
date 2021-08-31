import pug from 'pug'

export const compile = (pugSource: string, cssSource: string) =>
    pug.render(pugSource, {
        style: sanitizeCss(cssSource),
        basedir: 'src',
        pretty: true,
    })

const sanitizeCss = (source: string) =>
    source.split('').map(x => x === '"' ? "'" : x).join('')
