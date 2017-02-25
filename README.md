# Semantic Docs

This folder contains the templates used to generate the static website for [semantic-ui.com](http://www.semantic-ui.com)

## How to Use

### Prerequisites
#### Install dependencies
To be able to build and run Semantic UI Docs on your machine, you'll need the following npm packages globally installed:

* [Gulp](http://gulpjs.com/), the build system of Semantic UI.
```
npm install -g gulp
```
* [DocPad](http://docpad.org/), the static site generator with its [Eco templating plugin](https://github.com/docpad/docpad-plugin-eco) used to create the HTML for the site.
```
npm install -g docpad
docpad install eco;
docpad update; docpad upgrade;
```
#### Put Docs in the right location
By default Semantic-UI and Semantic-UI-Docs need to be located in adjacent directories and Semantic-UI-Docs folder needs to be renamed to `docs`.
You can also rename the Semantic-UI folder to `ui` but it is not required. For this example we'll assume it was renamed to `ui`.
So if you put them under `vendor/`, your directory structure is like this:

    vendor/
        docs/
        ui/
        ...
        ...

To configure a different `docs` location, modify [ `tasks/config/docs.js`](https://github.com/Semantic-Org/Semantic-UI/blob/master/tasks/config/docs.js) accordingly.

#### Install SUI and Docs
Run `npm install` in both `ui/` and `docs/` folders if you haven't done that yet.
```
cd ./ui
npm install
cd ..
cd ./docs
npm install
```

### Building and serving the Docs
#### Generating SUI for Docs
Navigate to the `ui/` folder and run the command to build Semantic-UI for the Docs

```
cd ./ui
gulp build-docs
```

This will create the `docs/out/` folder (in the adjacent `docs` directory) and copy builded Semantic-UI files there.

#### Generating Docs and running the Server
Navigate to the `docs/` folder and run the command to generate and serve the Semantic-UI-Docs
```
cd ./docs
docpad run
```
This will copy the builded Semantic-UI-Docs files to the `/out` folder and serve them from there on the location indicated by docpad like this
```
info: Server started on http://0.0.0.0:9778
info: In your web browser use http://127.0.0.1:9778
```

#### Watching for changes made to SUI
You can watch for changes from your UI folder, and serve to the Docs instance to see the changes immediately.
Navigate to the `ui/` folder and run the command to serve ui to the docs

```
cd ./ui
gulp serve-docs
```

## Help Fix Typos and Errors

If you find any typos or mistakes, submitting a fix is easy!

- [Open the `documents/` folder](https://github.com/Semantic-Org/Semantic-UI-Docs/tree/master/server/documents) on GitHub
- Click the “Edit” button on the appropriate page
- Click to submit a pull request
