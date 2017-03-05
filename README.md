# simple-average


![Last version](https://img.shields.io/github/tag/Kikobeats/simple-average.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/simple-average/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/simple-average)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/simple-average.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/simple-average)
[![Dependency status](https://img.shields.io/david/Kikobeats/simple-average.svg?style=flat-square)](https://david-dm.org/Kikobeats/simple-average)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/simple-average.svg?style=flat-square)](https://david-dm.org/Kikobeats/simple-average#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/simple-average.svg?style=flat-square)](https://www.npmjs.org/package/simple-average)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> An efficient way to calculate average.

## Why?

- Abstract the process of calculate the average in a independent module.
- Calculate it using a efficient memory way.
- Simple and Chainable API.

I was looking for a better solution than store all values in an array, sum all and divide for the length. This module is inspired in [Daniel Bernier blog](http://invisibleblocks.com/2008/07/30/long-running-averages-without-the-sum-of-preceding-values/) that's provide a memory efficient solution for the problem.

## Install

```bash
npm install simple-average --save
```
## Usage

First, load the library:

```js
const simpleAverage = require('simple-average')
```

Then create a new instance to use:

```js
const aggregator = simpleAverage()
```

Now you can add new samples to calculate the average:

```js
aggregator.add(2)
```

Also you can provide a `n` number of values to add:

```js
average.add(2)
average.add(2, 3, 4, 5)
```

Methods are chainable as well:

```js
const resume = average.add(2).add(3).add(4).add(5).resume()
console.log(resume)
// => 3.5
```

## API

### .simpleAverage()

Create a new instance.

### .reset()

Reset the current counter.

### .add(values... {Number})

Add values to calculate the average. You can provide a `n` number of values or an array of values.

### .count()

Get the current number of values added for calculate the average.

### .resume()

Get an output with the average.

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
