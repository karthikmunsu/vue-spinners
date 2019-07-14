# vue-spinner

> Not support Vue 2.0.

A collection of loading spinners with Vue.js. Just impressed from (greyby) vue-spinner.

## [Live demo](http://karthikmunsu.github.io/vue-spinners/)

## Installation

### NPM
```bash
$ npm install vue-spinners
```

### CommonJS
```js
var PulseLoader = require('v-spinners/src/DottedLoader.vue');

new Vue({
  components: {
    'DottedLoader': DottedLoader
  }
})
```

### ES6
```js
import DottedLoader from 'v-spinners/src/DottedLoader.vue'

new Vue({
  components: {
    DottedLoader
  }
})
```
Or: 
```js
Vue.component('dotted-loader', require('v-spinners/src/DottedLoader.vue'));
```

### For browserify
If you use browserify + vueify, you may need to import vue-spinner like this:

```js
var DottedLoader= require('v-spinners/dist/vue-spinners.min').PulseLoader;
```

```js
import { DottedLoader } from 'v-spinners/dist/vue-spinners.min.js'
```

[explain here](https://github.com/greyby/vue-spinner/issues/2)

### Browser globals
The `dist` folder contains `v-spinners.js` and `v-spinners.min.js` with all components exported in the <code>window.VueSpinners</code> object. These bundles are also available on NPM packages.

```html
<script src="path/to/vue.js"></script>
<script src="path/to/v-spinners.js"></script>
<script>
  var DottedLoader = VueSpinner.DottedLoader
</script>
```

## Local setup

```
npm install
npm run dev
```

## Usage

```html
<box-loader :loading="loading" :color="color" :size="size"></box-loader>
<circle-loader :loading="loading" :color="color" :size="size" :radius="radius"></circle-loader>
<circle-loader :loading="loading" :color="color" :size="size" :radius="radius" :noborder="true"></circle-loader>
<domino-loader :loading="loading" :color="color" :height="height" :width="width"></domino-loader>
<dotted-loader :loading="loading" :color="color" :size="size"></dotted-loader>
<hour-loader :loading="loading" :color="color" :size="size"></hour-loader>
<laddedr-loader :loading="loading" :color="color" :size="size"></ladder-loader>
<line-loader :loading="loading" :color="color" :size="size" :height="height" :width="width"></line-loader>
<pac-loader :loading="loading" :color="color" :size="size"></pac-loader>
<progress-loader :loading="loading" :color="color" :size="size" :radius="radius"></progress-loader>
<rainbow-loader :loading="loading" :color="color" :size="size" :radius="radius"></rainbow-loader>
<spherical-loader :loading="loading" :color1="color1" :color2="color2" :color3="color3"></spherical-loader>
<spin-loader :loading="loading" :color="color" :size="size"></spin-loader>
<tiles-loader :loading="loading" :color="color" :size="size"></tiles-loader>
<traingle-loader :loading="loading" :color="color" :size="size"></traingle-loader>
```

You can customize the color and size with setting the props. All props have default value. You can control the spinner show/hidden with setting the loading prop.

## TODO
 Im Soon gonna add lot more spinners, You have any ides for spinners do kinldy share with me I will add this in my collection.


## License

 vue-spinners is licensed under [The MIT License](LICENSE).
