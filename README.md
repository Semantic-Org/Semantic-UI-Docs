# Semantic Docs

This folder contains the templates used to generate the static website for [semantic-ui.com](http://www.semantic-ui.com)

## How to Use


To install [DocPad](http://github.com/docpad/docpad), the static site generator used to create the HTML for the site.
```
npm install -g docpad
docpad install eco;
docpad update; docpad upgrade;
```

### Generating SUI for Docs

Before running the server, you will need to build your UI files for the docs. 

First, be sure your docs are in the right location.  
For example, if your Semantic UI folder is under `vendor/`, like this...

    vendor/
        SemanticUI/
        ...
        ...

Then you should put `docs/` under `vendor/`, so it looks like this:

    vendor/
        docs/
        SemanticUI/
        ...
        ...

If you haven't run `npm install` in your `./SemanticUI` folder yet, do that now. Next, run the commands to build the docs:

```
# "ui" can be any folder that contains the SUI build files
cd ./ui
gulp build-docs
```

By default, docs build to `build-docs/` (from the adjacent folder `docs/`). 
**The command _must_ be run from your UI folder!** (In the above example, we use `./ui`.) 

To configure a different `docs` location, modify [ `tasks/config/docs.js`](https://github.com/Semantic-Org/Semantic-UI/blob/master/tasks/config/docs.js) accordingly.


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

