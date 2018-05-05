# Webpack Simple Configuration

A sample project with a simple webpack configuration that covers the following needs:

* Convert typescript files to javascript.
* Extract referenced sass rules into css files.
* Create a separate bundle for vendor libraries (bulma, toastr, etc).
* Inject the file references to an html file.
* Have a different configuration for development and production.

## Getting Started

If this configuration covers your needs also, you just have to download the following files and include them in your project:

* webpack.common.js
* webpack.dev.js
* webpack.prod.js
* package.json

The **package.json** file contains the required libraries to run webpack (webpack, babel-core, ts-loader, etc.), some optional libraries (bulma, toastr, etc) that are used by the sample project and commands to build the modules and run the application.

## Running the Sample Project

You may run the following commands to run the sample project:

1. **npm install**: To install the node modules.
1. **npm run build**: To build the modules.
1. **npm run build-prod**: To build the modules for production. The generated files are minified.
1. **npm start**: To start the application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details