# Semantic Docs

This folder contains the templates used to generate the static website for [semantic-ui.com](http://www.semantic-ui.com)

## How to Use


To install [DocPad](http://github.com/docpad/docpad), the static site generator used to create the html for the site.
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
* In ./ui folder `gulp build-docs` (builds files to ./docs)
* In ./docs folder `docpad run`
* Go to http://localhost:9778/ docs should be there
* Optionally run `gulp serve-docs` in ./ui to serve any changes from ./ui/src to ./docs

To configure a different docs location modify [ tasks/docs.json](https://github.com/Semantic-Org/Semantic-UI/blob/master/tasks/admin/docs.json)


### Running Server

You can then start your docs server (and generate docs) using:
```
#run from inside docs folder that will now contain the compiled docs - windows users can then navigate to http://localhost:9778
docpad run
```

To watch for changes from your ui folder to serve to your docs instance
```
gulp serve-docs
```


## Help Fix Typos and Errors

If you find any typos or mistakes, submitting a fix is easy!

[Open the documents folder](https://github.com/Semantic-Org/Semantic-UI-Docs/tree/master/server/documents) on GitHub, click the edit button on the appropriate page. Then click to submit a pull request.

