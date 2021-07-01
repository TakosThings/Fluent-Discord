# Contributing

## Issues & Feature Requests
* Disable plugins and addon themes before opening an issue
* Use the relevant template
* Don't 'bulk report' unrelated issues in the same issue
* Don't report a new issue in the comments of an existing issue
* Check previous feature requests using the *Feature request* tag before making a new one

## Pull Requests
* Open an issue using the *Change proposal` template to discuss your changes
* Clone/rebase the repo
* Make sure your editor is obeying `.editorconfig`
* Make changes in a new branch (not master)
* Submit your PR

## Development
### Environment
This assumes a Windows OS. You will need to modify the output paths in `package.json` for Mac and Linux.
* Visual Studio Code
* [Editorconfig Plugin](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) for VS Code
* Git
* Node.js

### Setup
* `npm i sass -g` to install Dart Sass. This should be all you need to get started.

NPM Commands
* `npm run dev` watches files for changes and automatically build and output the theme to your BetterDiscord themes folder.
* `npm run translations` creates the translation add-on files. These are output to the dist directory.
* `npm run build` is just a convenience command for uploading a release.

### Comments & Debugging
* Where required a code comment should start with `TODO, NOTE, DEV, DEBUG or HACK` and the date in YYYY-MM-DD format, followed by the comment: 
```
// TODO: 2021-07-01 - Find better icon
```
* Including a Fluent Icon from the icon font should always inlude the description in a comment at the end of the line: 
```
content: "\F159"; // DialShape4`
```
* Use `red` or `#F00` for debugging
