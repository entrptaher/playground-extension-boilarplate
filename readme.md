Minimal chrome extension boilarplate. 

## Overview
On click on browser icon, the background will execute the content-script on current page. It will load fontawesome as well.

![](https://i.imgur.com/xLIJyHE.png)

Once you click the icon again, it will try to remove all references, and the page will reload.

## Usage

Clone the repo, install dependencies and start building.

```sh
yarn 
yarn run start
```

It will generate unpacked extension on `build` folder which you can install on chrome extension page.

## Structure

The source structure looks like below,
```
src
├── js
|  ├── background
|  |  └── index.jsx
|  └── content-script
|     ├── fontawesome.jsx
|     ├── index.jsx
|     └── styles
├── manifest.js
└── static
   └── img
      ├── logo.png
      └── logo.svg
```

The build structure looks like below,
```
build
├── fonts
|  ├── fa-regular-400.eot
|  ├── ...
├── img
|  └── logo.png
├── js
|  ├── background.js
|  └── content-script.js
└── manifest.json
```