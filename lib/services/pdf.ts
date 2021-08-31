import wkhtmltopdf from 'wkhtmltopdf'
import { file } from '../services'

export const compileToFile = (path: string, source: string) =>
    wkhtmltopdf(source)
        .pipe(file.getWritableStream(path))
