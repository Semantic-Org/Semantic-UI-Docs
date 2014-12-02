# Semantic Docs

This folder contains the templates used to generate the static website for
[LearnSemantic.com](learnsemantic.com).

Below are guidelines on how to setup a local instance of the docs site
for contribution.


# First-time Setup

Requirements:

- Semantic UI (preferably a checkout of the core repo)
- DocPad (preferably a global npm package)


## Cloning/forking this repo

Semantic UI has a separate build task for the documentation site. It assumes
that the documentation repo (this repo) is in a sibling directory named `docs`,
so it is recommended to clone this repo like so:

```
$ pwd
~/src/vendor/Semantic-UI
$ cd ..
$ git clone git@github.com:Semantic-Org/Semantic-UI-Docs.git docs
```

You can configure this behavior by editing [tasks/docs.json][docs_json] in your
Semantic UI repo.

[docs_json]: https://github.com/Semantic-Org/Semantic-UI/blob/master/tasks/admin/docs.json


## Semantic UI

The Semantic UI distributable JS and CSS are not included in this repo, nor are
they generated automatically by the DocPad build tool, so you must manually
generate them from the Semantic UI core repo. This is to allow development on
the docs site with bleeding-edge SUI code without requiring a new commit on
this project every time SUI changes.

Thus, you will need to use your checkout of the core [Semantic UI][semantic_ui]
repo for first-time setup.

[semantic_ui]: https://github.com/Semantic-Org/Semantic-UI

From within the Semantic UI core repo, run:

```
gulp build-docs
```

By default, this targets `../docs/out`. You can configure this behavior by
editing [tasks/docs.json][docs_json] in your Semantic UI repo.


## DocPad

To install DocPad:

```
npm install -g docpad
docpad install eco
docpad update
docpad upgrade
```


# Running the Server

You can then start your docs server (and generate docs) using:

```
docpad run
```

There will be a significant delay on the first load while it builds all static
files for the first time.


# Help Fix Typos and Errors

If you find any typos or mistakes, submitting a fix is easy!

Open the [documents folder][docs] on GitHub, click the edit button on the
appropriate page. Then click to submit a pull request.

[docs]: https://github.com/Semantic-Org/Semantic-UI-Docs/tree/master/server/documents

