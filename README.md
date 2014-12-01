# Semantic Docs

## How to Use

This folder contains the templates used to generate the static website for LearnSemantic.com

To install DocPad
```
npm install -g docpad
docpad install eco;
docpad update; docpad upgrade;
```

Before running server you will need to build your UI files for the docs. This can be done using 

```
gulp build-docs
```

This command builds files for the docs from a separate config designed for housing a docs instance, [see tasks/docs.json](https://github.com/Semantic-Org/Semantic-UI/blob/master/tasks/admin/docs.json)

The default location for ``build-docs`` is a sibling folder to your ui with the name ``docs/``

You can then start your docs server (and generate docs) using:
```
docpad run
```

## Help Fix Typos and Errors

If you find any typos or mistakes, submitting a fix is easy!

[Open the documents folder](https://github.com/Semantic-Org/Semantic-UI-Docs/tree/master/server/documents) on GitHub, click the edit button on the appropriate page. Then click to submit a pull request.

