# Using Parcel for the first time

## Command history

Up and running parcel

```sh
npm init -y
npm install --save-dev parcel-bundler
git init
```

Created file `.gitignore`

```
node_modules/
node_modules/
.cache/
dist/
```

Created `npm scripts`

```json
"scripts": {
    "watch": "parcel index.html",
    "build": "parcel build index.html"
  },
```

Created `index.html` and `index.js`, just following [Getting Started](https://en.parceljs.org/getting_started.html) steps.

Tutorial finished, next steps:

1. Change all to `src/` folder, looks like `dist/` is created automatically.
1. Use `sass`.
1. Use Firebase sdk.
1. Create a simple login form.
1. Hide content from who isn't logged in.

Firstly, commit all work to here: `git commit -m "Up and running parcel"
