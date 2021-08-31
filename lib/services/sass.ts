import sass from 'sass'

export const compile = (source: string) =>
    sass.renderSync({
            indentedSyntax: true,
            data: source,
        })
        .css.toString()
