# Semantic Docs

This folder contains the templates used to generate the static website for [semantic-ui.com](http://www.semantic-ui.com). 

This repo can be used to create a fork of the UI documents to serve as styleguide for your project.

### Installing Dependencies


You must install [DocPad](http://github.com/docpad/docpad), the static site generator used to create the HTML for the site, to render the contents of this repository.
```
npm install -g docpad
docpad install eco;
docpad update; docpad upgrade;
```

### Generating Semantic UI for Docs

Assuming two sibling folders:

1. UI folder ./ui
2. Docs folder ./docs

* Clone both repos to respective folders
* npm install in both directories
* Go through Semantic UI installer steps (auto)
* In `./ui` folder `gulp build-docs` (builds files to ./docs)
* In `./docs` folder `docpad install` then `docpad run`
* Go to http://localhost:9778/ docs should be there
* Optionally run `gulp serve-docs` in ./ui to serve any changes from ./ui/src to ./docs

### Running the Server

Start the docs server (and generate docs):

```
# run from inside docs folder that will now contain the compiled docs
# windows users can then navigate to http://localhost:9778
docpad run
```


Watch for changes from your UI folder, and serve to the docs instance:

```
gulp serve-docs
```

### Publishing to GitHub Pages

You can publish your docs to GitHub Pages from the command line automatically
```
docpad deploy-ghpages --env static
```


## Help Fix Typos and Errors

If you find any typos or mistakes, submitting a fix is easy!

- [Open the `documents/` folder](https://github.com/Semantic-Org/Semantic-UI-Docs/tree/master/server/documents) on GitHub
- Click the “Edit” button on the appropriate page
- Click to submit a pull request

