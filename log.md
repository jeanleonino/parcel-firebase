# Using Parcel for the first time

This repo is a test with Parcel, some basic js/css and the Firebase sdk.
## Checklist

* [x] Get parcel up and running
* [x] Create `npm scripts`
* [x] Change all to `src/` folder, looks like `dist/` is created automatically.
* [ ] Use `sass`. (! problem)
* [x] Use basic css, could be Skeleton.css
* [x] Add a `LICENSE.md` file
* [x] Add a `README.md` file.
* [ ] Use Firebase sdk.
* [ ] Create a simple login form.
* [ ] Hide content from who isn't logged in.

### Getting Start tutorial

With some small modifications, following the [Getting Started](https://en.parceljs.org/getting_started.html) by Parcel.

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

### Changing to `src` folder

Firstly, commit all work to here: `git commit -m "Up and running parcel"`

Move files to `src` folders, change scripts:

```json
"scripts": {
    "watch": "parcel src/index.html",
    "build": "parcel build src/index.html"
  },
```

### Using css

Create folder `style` and put `skeleton.css` there and `normalize.css`.
Import from `index.html`
