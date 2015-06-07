# eiviyi

![Last version](https://img.shields.io/github/tag/Kikobeats/eiviyi.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/eiviyi/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/eiviyi)
[![Dependency status](http://img.shields.io/david/Kikobeats/eiviyi.svg?style=flat-square)](https://david-dm.org/Kikobeats/eiviyi)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/eiviyi.svg?style=flat-square)](https://david-dm.org/Kikobeats/eiviyi#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/eiviyi.svg?style=flat-square)](https://www.npmjs.org/package/eiviyi)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat-square)](https://www.gittip.com/Kikobeats/)

> Average module. An efficient way to calculate average.

## Why?

- Abstract the process of calculate the average in a independent module.
- Calculate it using a efficient memory way.
- Simple and Chainable API.

I was looking for a better solution than store all values in an array, sum all and divide for the length. This module is inspired in [Daniel Bernier blog](http://invisibleblocks.com/2008/07/30/long-running-averages-without-the-sum-of-preceding-values/) that's provide a memory efficient solution for the problem.

## Install

```bash
npm install eiviyi --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install eiviyi --save
```

and later link in your HTML:

```html
<script src="bower_components/eiviyi/dist/eiviyi.js"></script>
```

## Usage

First, load the library:

```js
var Avg = require('eiviyi');
```

Then create a new instance to use:

```js
var avg = new Avg({
  round: 2, // optional
  unit: ' ms' // optional
});
```

Now you can add new samples to calculate the average:

```js
avg.add(2);
```

Also you can provide a `n` number of values to add:

```js
avg.add(2, 3, 4, 5);
```

or provide an array of values:

```js
var values = [2, 3, 4, 5];
avg.add(values);
```

Methods are chainable as well:

```js
console.log(avg.add(2).add(3).add(4).add(5).resume())
// => '3.5 ms'
```

## API

### .new([Options] {Object})

Create a new instance. Options can be:

* round **{Number}**: specify if number of decimals to fix in the `resume` output (for example, `2`). Default value is `null`.
* unit **{String}**: specify a unit to print in the `resume` (for example, `ms`). Default value is `null`.

### .reset()

Reset the current counter.

### .add(values... {Number})

Add values to calculate the average. You can provide a `n` number of values or an array of values.

### .count()

Get the current number of values added for calculate the average.

### .resume()

Get an output with the average.

### .round([newRound] {Number})

Get the current number of decimals to fix in the ouptut or set a new value.

### .unit([newUnit] {String})

Get the current unit to output or set a new value.

## Examples

see `examples.js`

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
