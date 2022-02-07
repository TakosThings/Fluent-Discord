# Contributing

## Issues & Feature Requests
* Disable plugins and addon themes before opening an issue
* Use the relevant template
* Don't 'bulk report' unrelated issues in the same issue
* Don't report a new issue in the comments of an existing issue
* Check previous feature requests using the *Feature request* tag before making a new one

## Plugin Support Requests
* You may request theme support for any plugin published on [betterdiscord.app](https://betterdiscord.app/plugins).
* Open an issue using the [template](https://github.com/TakosThings/Fluent-Discord/issues/new?assignees=&labels=better+discord%2Cplugin+support&template=plugin_support.yml&title=Plugin+name+here). 

## Pull Requests
* Major changes: Open an issue using the *Change proposal* template to discuss your changes 
* Small changes and tweaks can get away without an issue
* Clone/rebase the repo
* Make sure your editor is obeying `.editorconfig` (VS Code needs the plugin!)
* Make changes in a new branch (not master)
* Submit your PR

## Development
### Environment
* Visual Studio Code
* [Editorconfig Plugin](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) for VS Code
* Git
* Node.js

### Setup
* `npm i` to install Dart Sass. This should be all you need to get started.

#### NPM Commands
* `npm run dev` watches files for changes and automatically builds and emits the theme to your BetterDiscord themes folder. BD will reload the theme with the changes each time.
* `npm run build` builds and emits the theme to the dist directory. Generally just used for building a release.

### Comments & Debugging
* Where required a code comment should start with `TODO, NOTE, DEV, DEBUG or HACK` and the date in YYYY-MM-DD format, followed by the comment: 
```SCSS
// TODO: 2021-07-01 - Find better icon
```
* Including a Fluent Icon from the icon font should always inlude the description in a comment at the end of the line: 
```SCSS
content: "\F159"; // DialShape4
```
* Use `red`, `$red` or `#F00` for debugging

### Plugin Support
Use the [Plugin Support Request](https://github.com/TakosThings/Fluent-Discord/issues/new?assignees=&labels=better+discord%2Cplugin+support&template=plugin_support.yml&title=Plugin+name+here) issue template to request support for a plugin. The plugin __must__ be approved on [betterdiscord.app](https://betterdiscord.app)

If you are interested in creating a PR for a plugin use the following formatting:
* Create a new file in `src/modules/betterdiscord/plugins` with the following formatting: `_GitHubUsername.PluginName.scss`. Note the underscore at the start of the filename. Capitalisation should also match the username and plugin name. Example: `_TakosThings.FluentDiscord.scss`
* Add an import to `src/modules/betterdiscord/_plugin_support.scss` with the following formatting:
```SCSS
// https://betterdiscord.app/plugin/PluginName
@import "_GitHubUsername.PluginName.scss";
```
