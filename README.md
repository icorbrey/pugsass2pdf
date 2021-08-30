# pugsass2pdf

This is a template repository for compiling Pug and SASS files into PDF files.

## Building

### Using GitHub Actions

This repository includes GitHub Action workflows for automatically building
your project and publishing the built PDF as an artifact on a release. To
disable this, simply delete the workflow files from your repository.

### From the terminal

Run the following in your terminal to build your project:

```
$ npm run build
```

This is equivalent to the following commands, which you can also run:

```
$ npm run build:html
$ npm run build:css
$ npm run build:pdf
```

## Configuration

By default, `pugsass2pdf` draws from `src/index.pug` and `src/index.sass` for
build files and does not import data. To change this, include the following
section in your `package.json`:

```json
{
    "pugsass2pdf": {
        "pug": {
            "main": "src/index.pug",
            "data": "src/data.json"
        },
        "sass": {
            "main": "src/index.sass"
        }
    }
}
```
