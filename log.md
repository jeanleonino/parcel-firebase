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
* [ ] Set up Firebase hosting.
* [ ] Create a simple login form with Firebase.
* [ ] Hide content from who isn't logged in.
* [ ] Create a npm script for deploying to Firebase.

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

## Using SASS

I had some issues getting sass to work, but [@brandon93s](http://github.com/brandon93s) helped me:
You just need to install `node-sass`, and then link it to your js file:

```sh
npm install --save-dev node-sass
```

index.js:

```js
import "./style/main.scss";
```

Now imports work just fine inside scss files:

main.scss:

```sass
@import "normalize.scss";
@import "skeleton.scss";
```

PS: thanks, @brandon93s!
## Using Firebase SDK

Firebase SDK is the official js library for using Firebase in your application.
To start, I created a project on Firebase called `parcel-firebase`.

### Set up Firebase for hosting

Firebase requires `firebase-tools` cli

```sh
npm install -g firebase-tools@latest
firebase login
firebase init # set dist/ as public directory
```

To deploy just use `firebase deploy` command, later there will be a npm script just for it.

### Installing and using the Firebase SDK

```sh
npm install --save-dev firebase
```
