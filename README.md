# Semantic Docs

This folder contains the templates used to generate the static website for [semantic-ui.com](http://www.semantic-ui.com)

## How to Use


To install [DocPad](http://github.com/docpad/docpad), the static site generator used to create the html for the site.
```
npm install -g docpad
docpad install eco;
docpad update; docpad upgrade;
```

### Generating SUI for Docs

for example with a directory vendor -> SemanticUI place docs folder inside vendor to reflect vendor -> SemanticUI | docs

```
# assumes ./docs and ./ui for default paths, run from ./ui (the folder name ./ui may be any folder that contains the Semantic UI build files)
# run gulp build-docs from the folder containing Semantic UI this will build docs into the sibling folder ./docs
gulp build-docs
```

> The default location for ``build-docs`` is an adjacent folder with the name ``docs/``. The command must be run from your UI folder and not from the docs folder.

To configure a different docs location modify [ tasks/docs.json](https://github.com/Semantic-Org/Semantic-UI/blob/master/tasks/admin/docs.json)

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


## Help Fix Typos and Errors

If you find any typos or mistakes, submitting a fix is easy!

- [Open the `documents/` folder](https://github.com/Semantic-Org/Semantic-UI-Docs/tree/master/server/documents) on GitHub
- Click the “Edit” button on the appropriate page
- Click to submit a pull request

