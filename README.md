# Semantic Docs

## How to Use

This folder contains the templates used to generate the static website for LearnSemantic.com

To install DocPad
```
npm install -g docpad
docpad install eco;
docpad update; docpad upgrade;
```

### Generating SUI for Docs

Before running server you will need to build your UI files for the docs. Semantic UI includes a special command to build files for a docs instance that must be run from an adjacent Semantic UI folder.

```
# assumes ./docs and ./ui for default paths, run from ./ui
gulp build-docs
```

> The default location for ``build-docs`` is an adjacent folder with the name ``docs/``. The command must be run from your UI folder and not from the docs folder.

To config a different docs location modify, [ tasks/docs.json](https://github.com/Semantic-Org/Semantic-UI/blob/master/tasks/admin/docs.json)


### Running Server

You can then start your docs server (and generate docs) using:
```
docpad run
```

To watch for changes from your ui folder to serve to your docs instance
```
gulp serve-docs
```


## Help Fix Typos and Errors

If you find any typos or mistakes, submitting a fix is easy!

[Open the documents folder](https://github.com/Semantic-Org/Semantic-UI-Docs/tree/master/server/documents) on GitHub, click the edit button on the appropriate page. Then click to submit a pull request.

